<template>
  <div
    class="wow bounceInDown min-h-[100vh] flex items-start justify-center flex-col max-w-[1000px] mx-auto space-y-10"
  >
    <div class="textOrange">Hi, my name is</div>
    <div class="text-3xl sm:text-7xl">Li Wai Kiu , Kevin Li</div>
    <div class="text-3xl sm:text-7xl text-[#868686]">Front End Developer</div>
    <div class="text-lg text-[#868686] max-w-[600px]">
      I'm a programmer who specializes in front-end development. At the moment,
      I'm concentrating on Vue.js and React.
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";

export default {
  name: "Intro",
  mounted() {
    const wow = new WOW({
      offset: 100,
      // 距离可视区域多少开始执行动画

      // 异步加载的内容是否有效
      live: false,
    });
    wow.init();
  },
};
</script>

<style scoped></style>
