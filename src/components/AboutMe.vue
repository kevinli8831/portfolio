<template>
  <div
    class="wow flipInX max-w-[1000px] mx-auto"
    data-wow-offset="100"
    id="about"
  >
    <div class="text-[#60FFD9] text-4xl mb-24">About Me</div>
    <div class="flex flex-wrap flex-row">
      <div
        v-for="(item, index) in list"
        :key="`list${index}`"
        class="flex flex-col items-center w-full sm:w-1/2 lg:w-1/4 mb-10 px-2"
      >
        <span
          class="material-icons-outlined !text-[120px] border border-[#60FFD9] rounded-xl p-5"
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
      <ProgressBar
        class="mb-5"
        v-for="(item, i) in progressList"
        :key="`progress${i}`"
        :title="item.title"
        :percentage="item.percentage"
      />
      <!-- Filled -->
    </div>
  </div>
</template>

<script>
import { WOW } from "wowjs";
import ProgressBar from "@/components/ProgressBar";
export default {
  name: "AboutMe",
  components: {
    ProgressBar,
  },
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
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
        { title: "MongoDB", percentage: 35 },
      ],
    };
  },
};
</script>

<style scoped></style>
