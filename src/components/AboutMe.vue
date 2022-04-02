<template>
  <div class="max-w-[1000px] mx-auto" id="about">
    <div class="text-[#60FFD9] text-4xl mb-24">About Me</div>
    <div class="flex flex-wrap flex-row">
      <div
        v-for="(item, index) in list"
        :key="index"
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

      <!-- Filled -->
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
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
    };
  },
};
</script>

<style scoped></style>
