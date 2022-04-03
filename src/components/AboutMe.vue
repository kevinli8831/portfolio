<template>
  <div
    class="wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24"
    data-wow-offset="100"
    id="about"
  >
    <div class="textOrange text-4xl mb-24">About Me</div>
    <div class="flex flex-wrap flex-row">
      <div
        v-for="(item, index) in list"
        :key="`list${index}`"
        class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-10 px-2"
      >
        <span
          class="material-icons-outlined !text-[120px] border border-colorOrange rounded-xl p-5 mb-5"
        >
          {{ item.icon }}
        </span>
        <span class="text-2xl mb-2">
          {{ item.title }}
        </span>
        <span class="px-3 text-center">
          {{ item.text }}
        </span>
      </div>

      <!-- Filled -->
    </div>
    <p>
      I work as a Front-End Developer in Hong Kong. I'm regarding effective
      animations and creating dynamic user experiences.
    </p>
    <p>
      I have a BSc (Hons) in Applied Sciences (Information Systems and Web
      Technologies) from The Hong Kong Polytechnic University's School of
      Professional Education and Executive Development.
    </p>
    <p>
      During my time at university, I had many opportunities from various IT
      companies and gained some work experience from them. In addition, I became
      a well-organized person, a problem solver, an independent employee with a
      keen eye for detail.
    </p>
    <p>
      I am proficient with a wide range of tools. I'll usually be digging into
      Vue, architecting CSS in and out of JavaScript, or orchestrating slick
      animations with Animate.css. I am also interested in the entire frontend
      spectrum and working on ambitious projects with like-minded people.
    </p>
    <p>I eagerly await the opportunity to meet with you!</p>
  </div>
</template>

<script>
import { WOW } from "wowjs";
export default {
  name: "AboutMe",
  components: {},
  mounted() {
    const wow = new WOW({
      // 距离可视区域多少开始执行动画

      // 异步加载的内容是否有效
      live: false,
    });
    wow.init();
  },

  data() {
    return {
      list: [
        {
          title: "Fast",
          text: "My top priority is fast load times and lag-free interaction.",
          icon: "rocket",
        },
        {
          text: "Websites don't have to be static; I adore animating them to bring them to life.",
          icon: "dynamic_feed",
          title: "Dynamic",
        },
        {
          text: "Strong affinity for user-friendly, intuitive UX/UI.",
          icon: "psychology",
          title: "Intuitive",
        },
        {
          text: "My designs will work on any device, no matter how large or small.",
          icon: "phonelink",
          title: "Responsive",
        },
      ],
      progressList: [
        { title: "HTML", percentage: 80 },
        { title: "CSS", percentage: 70 },
        { title: "JavaScript", percentage: 80 },
        { title: "VueJs", percentage: 80 },
        { title: "React", percentage: 40 },
        { title: "TailWind CSS", percentage: 60 },
        { title: "NodeJs", percentage: 50 },
        { title: "Express", percentage: 40 },
        { title: "MongoDB", percentage: 35 },
      ],
    };
  },
};
</script>

<style scoped>
p {
  font-size: 18px;
  margin: 10px 0px;
}
</style>
