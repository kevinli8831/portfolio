<template>
  <div id="app">
    <NavBar></NavBar>
    <div class="container mx-auto px-5">
      <Intro></Intro>
      <AboutMe></AboutMe>
      <Experience />
      <Work />
      <contact />
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/navBar";
import Intro from "./components/Intro";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default {
  name: "App",
  components: {
    Contact,
    Work,
    Experience,
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
