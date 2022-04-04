<template>
  <div
    id="Work"
    data-wow-duration="1.5s"
    data-wow-offset="100"
    class="wow fadeInLeft max-w-[1000px] mx-auto pt-24 mb-24"
  >
    <div class="textOrange text-4xl mb-24 font-bold">Project</div>
    <div
      style="gap: 40px"
      class="flex flex-row flex-wrap lg:flex-nowrap mb-10"
      v-for="(item, index) in contentList"
      :key="`content${index}`"
    >
      <WorkCard class="flex-grow" :content="item" />
      <div class="space-y-10 py-3" style="line-height: 35px">
        <div class="font-bold text-xl">{{ item.subTitle }}</div>
        <div style="font-size: 18px">{{ item.content }}</div>
      </div>
    </div>
    <!--    <div class="grid-cols-1 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">-->
    <!--      <WorkCard-->
    <!--        v-for="(item, index) in contentList"-->
    <!--        :key="index"-->
    <!--        :content="item"-->
    <!--      >-->
    <!--      </WorkCard>-->
    <!--    </div>-->
  </div>
</template>

<script>
import WorkCard from "@/components/WorkCard";
import { WOW } from "wowjs";
export default {
  name: "Work",
  components: { WorkCard },
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
      contentList: [
        {
          title: "Responsive Web App",
          subTitle: "JobJobSend",
          logo: "jobjobsend.svg",
          logo2: "jobjobsend2.png",
          tag: ["Vue", "Html", "Css", "JavaScript", "Team"],
          content:
            "JobJobSend is a Web app that allows users to remark on any corporate position, such as wage and colleague. I'm in charge of the user interface of the program, and I'm decorating it with the help of the Element UI framework. In addition, I developed a number of components, such as a card and a progress bar, and I am currently working on a dialog box that will allow users to express their opinions on the firm. ",
        },
        {
          title: "Admin Panel",
          subTitle: "BeNature",
          logo: "benature.png",
          tag: ["Vue", "Html", "Css", "JavaScript", "Team"],
          logo2: "benature2.png",
          content:
            "BeNature is a hair salon that offers herbal hair colouring treatments to its customers, as well as other services. I am in charge of the salon's administration panel, which assists the salon's administrator or employer in managing their customer service, " +
            "such as the booking system and the Eshop for the products they offer.",
        },
        {
          title: "Website",
          subTitle: "Polyu Speed",

          logo: "RCADMM.png",
          logo2: "RCADMM2.png",
          tag: ["Html", "Css", "JavaScript", "Individual"],
          content:
            "RCADMM is an abbreviation for Research Centre for New Design, Materials, and Manufacturing Technologies. Its mission is to develop engineering design and application of advanced materials that is safe, sustainable, and effective. My responsibilities include UI design for the RCADMM website, as well as the use of Bootstrap for responsive design.",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
