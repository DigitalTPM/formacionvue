<template>
  <div class="about">
    <h1>Bucaminas</h1>
    <Tablero :tipoMina="tipoMina" />
  </div>
</template>

<script>
import Tablero from "../components/buscaminas/Tablero.vue";

export default {
  components: { Tablero },
  name: "Buscaminas",
  props: {
    tipoMina: {
      type: Number,
    },
  },
};
</script>

