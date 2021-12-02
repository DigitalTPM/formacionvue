<template>
  <div class="about">
    <h1>Petición servidor</h1>
    <ul>
      <li v-for="(empleado, i) in listadoEmpleados" :key="'empleado-' + i">
        {{ empleado.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PeticionServidor",
  data() {
    return {
      listadoEmpleados: [],
    };
  },
  props: {
    tipoMina: {
      type: Number,
    },
  },
  created() {
    const self = this;
    axios.get("/empleados/").then((res) => {
      self.listadoEmpleados = res.data || [];
    });
  },
};
</script>

