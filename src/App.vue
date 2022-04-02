<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container mx-auto px-5">
      <Intro></Intro>
      <AboutMe></AboutMe>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Intro from "./components/Intro";
import AboutMe from "@/components/AboutMe";

export default {
  name: "App",
  components: {
    AboutMe,
    Intro,
    NavBar,
  },
};
</script>

<style>
html {
  scroll-behavior: smooth;
}
#app {
  color: white;
  height: 100%;
  background-color: #071425;
}
</style>
