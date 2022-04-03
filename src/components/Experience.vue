<template>
  <div class="max-w-[1000px] mx-auto pb-24">
    <div class="text-[#60FFD9] text-4xl mb-24">Work Experience</div>
    <div class="flex flex-wrap sm:flex-nowrap gap-5">
      <div class="w-full sm:w-2/3">
        <div class="flex">
          <div
            :class="{
              border: isSelected === item.jobTitle,
              'border-b': isSelected !== item.jobTitle,
            }"
            @click="isSelected = item.jobTitle"
            v-for="(item, i) in infoList"
            :key="`infoList${i}`"
            class="w-1/2 flex flex-row flex-grow text-center border-[#60FFD9] p-[10px] mb-10 cursor-pointer"
          >
            {{ item.jobTitle }}
          </div>
        </div>
        <transition name="slide-fade" mode="out-in">
          <div v-if="isSelected === `Fletrix`">
            <span class="text-xl"> Front End Developer (Intern) </span>
            <span class="text-[#60FFD9] text-xl"> @ Fletrix </span>
            <div class="text-[#868686]">Jun 2020 - March 2022</div>
            <div>
              <ul class="list-disc list-inside space-y-5">
                <li>
                  Developed and maintained code for client websites primarily
                  using
                  <span class="text-[#60FFD9]">Vue</span>
                  ,
                  <span class="text-[#60FFD9]">HTML</span>
                  ,
                  <span class="text-[#60FFD9]">CSS</span>
                  ,
                  <span class="text-[#60FFD9]">Sass</span>
                  ,
                  <span class="text-[#60FFD9]">JavaScript</span> and
                  <span class="text-[#60FFD9]"> Node.JS</span>
                </li>
                <li>
                  Clients included
                  <span class="text-[#60FFD9]"> JobJobSend</span>
                  ,
                  <span class="text-[#60FFD9]"> YMCA</span>
                  ,
                  <span class="text-[#60FFD9]"> YK</span>
                  ,
                  <span class="text-[#60FFD9]"> BeNature</span>
                </li>
                <li>
                  Sites were manually tested in a variety of browsers and mobile
                  devices to ensure cross-browser compatibility and
                  responsiveness.
                </li>
              </ul>
            </div>
          </div>
          <div v-if="isSelected !== `Fletrix`">
            <span class="text-xl">Student Helper </span>
            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>
            <div class="text-[#868686]">Jan - July 2021</div>
            <div>
              <ul class="list-disc list-inside space-y-5">
                <li>
                  Developed a website For
                  <span class="text-[#60FFD9]"> RCADMM Project</span>

                  in Speed.
                </li>
                <li>
                  Primarily Using <span class="text-[#60FFD9]">HTML</span>,
                  <span class="text-[#60FFD9]">CSS</span>,
                  <span class="text-[#60FFD9]">JavaScript</span>,
                  <span class="text-[#60FFD9]">Bootstrap</span>.
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <!--        <transition name="fade" mode="out-in">-->
        <!--          <div v-if="isSelected !== `Fletrix`">-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="text-[#60FFD9] text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--          </div>-->
        <!--        </transition>-->
      </div>
      <div class="w-full sm:w-1/3">
        <ProgressBar
          class="mb-5"
          v-for="(item, i) in progressList"
          :key="`progress${i}`"
          :title="item.title"
          :percentage="item.percentage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar";
export default {
  name: "Experience",
  components: { ProgressBar },
  data() {
    return {
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

      infoList: [{ jobTitle: "Fletrix" }, { jobTitle: "Speed Student Helper" }],
      isSelected: "Fletrix",
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
