<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link :to="{ name: 'PeticionServidor' }"
        >Peticion Servidor</router-link
      >
      | <router-link :to="{ name: 'Buscaminas' }">Buscaminas</router-link> |
      <router-link :to="{ name: 'BuscaminasRaquel' }"
        >BuscaminasRaquel</router-link
      >
      |
      <router-link :to="{ name: 'Buscaminasjoaquin' }"
        >Buscaminasjoaquin</router-link
      >
      |
      <router-link :to="{ name: 'BuscaminasJose' }">BuscaminasJose</router-link>
      |
      <router-link to="/gameover">Pantalla final</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
