<template>
  <div
    class="wow fadeInLeft max-w-[1000px] mx-auto pt-24 pb-24"
    data-wow-offset="100"
    data-wow-duration="1.5s"
    id="Exp"
  >
    <div class="textOrange text-4xl mb-24 font-bold">Work Experience</div>
    <div class="flex flex-wrap sm:flex-nowrap" style="gap: 64px">
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
            class="w-1/2 flex flex-row flex-grow border-colorOrange p-[10px] mb-10 cursor-pointer font-bold justify-center text-2xl"
          >
            {{ item.jobTitle }}
          </div>
        </div>
        <transition name="fade" mode="out-in">
          <div
            v-if="isSelected === `Fletrix`"
            :key="`Fletrix`"
            class="space-y-5"
          >
            <span class="text-xl"> Front End Developer (Intern) </span>
            <span class="textOrange text-xl"> @ Fletrix </span>
            <div class="text-[#868686]">Jun 2020 - March 2022</div>
            <div>
              <ul class="list-disc list-inside space-y-5">
                <li>
                  Developed and maintained code for client websites primarily
                  using
                  <span class="textOrange">Vue</span>
                  ,
                  <span class="textOrange">HTML</span>
                  ,
                  <span class="textOrange">CSS</span>
                  ,
                  <span class="textOrange">Sass</span>
                  ,
                  <span class="textOrange">JavaScript</span> and
                  <span class="textOrange"> Node.JS</span>
                </li>
                <li>
                  Clients included
                  <span class="textOrange"> JobJobSend</span>
                  ,
                  <span class="textOrange"> YMCA</span>
                  ,
                  <span class="textOrange"> YK</span>
                  ,
                  <span class="textOrange"> BeNature</span>
                </li>
                <li>
                  Sites were manually tested in a variety of browsers and mobile
                  devices to ensure cross-browser compatibility and
                  responsiveness.
                </li>
              </ul>
            </div>
          </div>
          <div
            v-if="isSelected === `Infinite Financial Solutions`"
            :key="`Infinite Financial Solutions`"
            class="space-y-5"
          >
            <span class="text-xl">Programmer </span>
            <span class="textOrange text-xl"> @ Infinite Financial Solution ltd </span>
            <div class="text-[#868686]">August 2022 - Now</div>
            <div>
              <ul class="list-disc list-inside space-y-5">
                <li>
                  IFS has provided professionals with IT service consultancy, business process re-engineering and system solutions to companies especially in the bank and financial sectors

                  in Speed.
                </li>
                <li>
                  Using
                  <span class="textOrange">ReactJs</span>
                  for FrontEnd
                </li>
                <li>
                  Using
                  <span class="textOrange">Spring Boot and Java</span>
                  for BackEnd
                </li>
                <li>
                  Primarily Using <span class="textOrange">Spring Boot</span>,
                  <span class="textOrange">Java</span>,
                  <span class="textOrange">React</span>,
                  <span class="textOrange">Liquibase</span>.
                  <span class="textOrange">MySQL</span>.
                </li>
              </ul>
            </div>
          </div>
        </transition>
        <!--        <transition name="fade" mode="out-in">-->
        <!--          <div v-if="isSelected !== `Fletrix`">-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="textOrange text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="textOrange text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="textOrange text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="textOrange text-xl"> @ Polyu Speed </span>-->
        <!--            <div class="text-[#868686]">Jan - July 2021</div>-->
        <!--            <span class="text-xl">Student Helper </span>-->
        <!--            <span class="textOrange text-xl"> @ Polyu Speed </span>-->
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
import { WOW } from "wowjs";

import ProgressBar from "@/components/ProgressBar";
export default {
  name: "Experience",
  components: { ProgressBar },
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
      progressList: [
        { title: "Spring Boot", percentage: 80 },
        { title: "Java", percentage: 80 },
        { title: "React", percentage: 90 },
        { title: "MySQL", percentage: 70 },
        { title: "TypeScript", percentage: 80 },
        { title: "JavaScript", percentage: 80 },
        { title: "CSS", percentage: 70 },
        { title: "TailWind CSS", percentage: 70 },
        { title: "VueJs", percentage: 70 },
        { title: "NextJs", percentage: 50 },
        { title: "NodeJs", percentage: 50 },
        { title: "NestJs", percentage: 50 },
        { title: "Express", percentage: 40 },
        { title: "MongoDB", percentage: 35 },
        { title: "Supabase", percentage: 35 },
      ],

      infoList: [{ jobTitle: "Infinite Financial Solutions" },{ jobTitle: "Fletrix" }],
      isSelected: "Infinite Financial Solutions",
    };
  },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
