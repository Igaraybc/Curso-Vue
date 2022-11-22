<template>
  <nav class="navbar">
    <router-link to="/" class="nav-link">
        <img id="logo" :src="logo" :alt="alt">
    </router-link>
    <div class="texts">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link to="/pedidos" class="nav-link">Pedidos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    name: "Navbar",
    props: ["logo", "alt"]
};
</script>

<style scoped>
  .navbar{
    background-color: #222;

    width: 100%;

    display: flex;
    align-items: center;
    align-content: center;
    justify-content: space-between;
    padding: 20px 50px;
  }

  .nav-link{
    color: rgb(240, 205, 6);
    text-decoration: none;
    font-size: 18px;
    transition: .5s;
  }

  .nav-link:hover{
    color: white;
  }

  .navbar #logo{
    width: 50px;
    height: auto;
  }

  .texts .nav-link{
    margin: 0 20px;
  }


</style>