<template>
  <div class="celda" :style="estilos" @click="mostrarCelda">
    <div v-if="celdaVisible">
      <slot v-if="mina">
        <img
          src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d0/87/f6/d087f6eb-c54e-5af2-fc92-3c4b656af7e0/source/256x256bb.jpg"
        />
      </slot>
      <span v-if="!mina" class="numero" :class="colorTexto">
        {{ numeroMinas }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Celda",
  data() {
    return {
      celdaVisible: false,
      celdasVecinas: [],
    };
  },
  props: {
    x: {
      type: Number,
    },
    y: {
      type: Number,
    },
    mina: {
      type: Boolean,
    },
    habilitado: {
      type: Boolean,
      default: true,
    },
  },

  computed: {
    estilos: function () {
      const self = this;
      let cadena = "top: " + self.x * 50 + "px; left: " + self.y * 50 + "px";
      return cadena;
    },
    numeroMinas: function () {
      const self = this;
      return self.celdasVecinas.filter((c) => c.mina).length;
    },
    colorTexto: function () {
      const self = this;

      switch (self.numeroMinas) {
        case 1:
          return "uno";
        case 2:
          return "dos";
        case 3:
          return "tres";
        case 4:
          return "cuatro";
        case 5:
          return "cinco";
        case 6:
          return "seis";
        case 7:
          return "siete";
        case 8:
          return "ocho";
      }
      return "";
    },
  },

  methods: {
    esVecina(celda) {
      const self = this;
      if (self.x === celda.x && self.y === celda.y) return false;

      if (Math.abs(self.x - celda.x) <= 1 && Math.abs(self.y - celda.y) <= 1)
        return true;
      return false;
    },

    addVecinas(celdas) {
      const self = this;
      self.celdasVecinas = celdas;
    },

    mostrarCelda() {
      const self = this;
      if (!self.habilitado) return;
      if (self.celdaVisible) return;

      self.celdaVisible = true;
      self.$emit("celdaMostrada");

      if (self.mina) {
        self.$emit("explosion");
        return;
      }

      if (self.numeroMinas === 0) {
        self.celdasVecinas.forEach((c) => {
          c.mostrarCelda();
        });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.celda {
  background: #ccc;
  border: 1px solid black;
  width: 50px;
  height: 50px;
  position: absolute;
}
.celda img {
  width: 50px;
  height: 50px;
}
.celda .numero {
  line-height: 50px;
  font-weight: bold;
  font-size: 20px;
}
.celda .texto-explosion {
  font-weight: bold;
  color: red;
  position: relative;
  top: -37px;
  font-size: 15px;
}
.uno {
  color: blue;
}
.dos {
  color: darkblue;
}
.tres {
  color: green;
}
.cuatro {
  color: grey;
}
.cinco {
  color: red;
}
.seis {
  color: aquamarine;
}
.siete {
  color: yellow;
}
.ocho {
  color: orange;
}
</style>
