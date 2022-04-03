<template>
  <div class="flex w-full">
    <div class="bg-[#5A17B1] pl-5" :style="{ width: percentage + `%` }">
      {{ title }}
    </div>
    <div class="bg-gray-600 flex-grow">
      <div class="text-right pr-5">{{ percentage }}%</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    title: {
      type: String,
      default: "-",
    },
    percentage: {
      type: Number,
      default: 50,
    },
  },
};
</script>

<style scoped></style>
