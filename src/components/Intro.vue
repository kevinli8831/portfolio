<template>
  <div
    data-wow-duration="1s"
    class="wow rollIn min-h-[100vh] flex items-start justify-center flex-col max-w-[1000px] mx-auto space-y-10"
  >
    <div class="textOrange">Hi, my name is</div>
    <div class="text-3xl sm:text-7xl">Li Wai Kiu , Kevin Li</div>
    <div class="text-3xl sm:text-7xl text-[#868686]">Full Stack Developer</div>
    <div class="text-lg text-[#868686] max-w-[600px]" style="line-height: 35px">
      I am a programmer with expertise in a range of programming languages and frameworks. On the front-end, I am skilled in using React.js, Vue.js, and Next.js, while on the back-end, I have experience with Express.js, Nest.js, Spring Boot, and Java. I have also worked with databases such as MongoDB and MySQL, and I am proficient in using Git and GitLab for version control.
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
