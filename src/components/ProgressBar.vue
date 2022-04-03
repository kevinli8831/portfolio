<template>
  <div class="flex w-full">
    <div class="relative z-0 bg-gray-600 w-full">
      <div
        class="bg-colorOrange z-10 transition-all ease-in-out"
        :style="{ width: percentage + `%` }"
      >
        <div class="w-[110px] flex justify-center bg-[#B44C02] z-20">
          {{ title }}
        </div>
        <div class="absolute top-0 right-3">{{ percentage }}%</div>
      </div>
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
