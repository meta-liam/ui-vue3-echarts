<template>
     <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/demo1">About</router-link> |
      <router-link to="/demo2">Contact</router-link>
    </nav>
    <main>
      <router-view />
    </main>
</template>

<script>
export default {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
