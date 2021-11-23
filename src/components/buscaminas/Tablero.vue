<template>
  <div class="tablero">
    <div class="controles">
      <input v-model="celdasAbiertas" />{{ tipoMina }}
    </div>
    <div class="contenedor-celdas">
      <Celda
        v-for="(celda, i) in celdas"
        :key="'celda' + i"
        ref="celdas"
        @explosion="terminaJuego"
        @celdaMostrada="nuevaCeldaMostrada"
        :x="celda.x"
        :y="celda.y"
        :mina="celda.mina"
        :habilitado="!finJuego"
      >
        <template v-if="tipoMina == 1"
          ><img
            src="https://play-lh.googleusercontent.com/VCPSGPMM79sp6JmfExcsWB-Un80CKS-7bJo71QiH2EOsrsvjgcJLYpBDxPKfGInDHw=s128"
        /></template>
        <template v-if="tipoMina == 2"
          ><img
            src="https://www.reviversoft.com/blog/wp-content/uploads/2013/03/Minesweeper_Icon.png"
          /><span>BOOM</span></template
        >
        <template v-if="tipoMina == 3">Jose</template>
      </Celda>
    </div>
  </div>
</template>

<script>
import Celda from "./Celda.vue";

export default {
  name: "Tablero",

  components: { Celda },

  data() {
    return {
      celdas: [],
      celdasAbiertas: 0,
      finJuego: false,
      tableroVisible: false,
    };
  },
  props: {
    tamano: {
      type: Number,
      default: 10,
    },
    tipoMina: {
      type: Number,
    },
  },
  methods: {
    inicializarTablero() {
      // Crear celdas. El tablero es cuadrado con tantas celdas como diga el props tamano
      const self = this;
      for (let i = 0; i < self.tamano; i++) {
        for (let j = 0; j < self.tamano; j++) {
          self.celdas.push({
            x: i,
            y: j,
          });
        }
      }
      let numeroMinas = 10;
      do {
        let celdaElegida = Math.floor(Math.random() * self.celdas.length);
        if (!self.celdas[celdaElegida].mina) {
          self.celdas[celdaElegida].mina = true;
          numeroMinas--;
        }
      } while (numeroMinas > 0);
    },

    celdasVecinas(celda) {
      const self = this;
      if (self.$refs.celdas) {
        let tvariable = self.$refs.celdas.filter((c) => c.esVecina(celda));
        return tvariable;
      }
      return [];
    },

    nuevaCeldaMostrada() {
      const self = this;
      self.celdasAbiertas++;
    },

    terminaJuego() {
      const self = this;
      self.$refs.celdas
        .filter((c) => c.mina)
        .forEach((c) => {
          c.mostrarCelda();
        });
      if (!self.finJuego) {
        self.finJuego = true;
        setTimeout(function () {
          self.$router.push(`/gameover/${self.celdasAbiertas}/`);
        }, 3000);
      }
    },
  },

  created: function () {
    const self = this;
    self.inicializarTablero();
  },
  mounted: function () {
    const self = this;
    if (self.$refs.celdas) {
      self.$refs.celdas.forEach((c) => {
        c.addVecinas(self.celdasVecinas(c));
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablero {
  margin: 0 auto;
  background: lightgray;
  width: 500px;
  height: 500px;
  position: relative;
}
.contenedor-celdas {
  position: relative;
}
</style>
