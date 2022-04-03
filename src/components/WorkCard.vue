<template>
  <div class="flex flex-col shadow-2xl border-colorOrange border">
    <div id="title" class="bg-[#B44C02] p-3 font-bold text-xl">
      {{ content.title }}
    </div>
    <div class="p-3">
      <div id="photo" class="mb-5">
        <transition name="flip" mode="out-in">
          <img
            class="transition-all"
            :key="!isHover ? content.logo : content.logo2"
            :src="!isHover ? content.logo : content.logo2"
            style="height: 200px; width: 100%"
            @mouseover="isHover = true"
            @mouseleave="isHover = false"
          />
        </transition>
      </div>
      <div id="tag">
        <div class="flex items-center gap-2">
          <span class="material-icons-outlined"> tag </span>
          <span
            class="bg-[#B44C02] p-2 rounded-full"
            v-for="(item, i) in content.tag"
            :key="`tag${i}`"
            >{{ item }}</span
          >
        </div>
      </div>
      <div id="content">
        <span v-for="n in 10" :key="n">n</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkCard",
  data() {
    return {
      isHover: false,
    };
  },
  props: {
    content: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transform: rotateY(90deg);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
