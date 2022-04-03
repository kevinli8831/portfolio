<template>
  <div class="grid-cols-1 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
    <WorkCard v-for="(item, index) in contentList" :key="index" :content="item">
    </WorkCard>
  </div>
</template>

<script>
import WorkCard from "@/components/WorkCard";
export default {
  name: "Work",
  components: { WorkCard },
  data() {
    return {
      contentList: [
        {
          title: "Responsive Web App",
          logo: "jobjobsend.svg",
          logo2: "jobjobsend2.png",
          tag: ["Vue", "Html", "Css", "JavaScript"],
          content: "",
        },
        {
          title: "Admin Panel",
          logo: "benature.png",
          tag: ["Vue", "Html", "Css", "JavaScript"],
          logo2: "",
          content: "",
        },
        {
          title: "Website",
          logo: "RCADMM.png",
          logo2: "",
          tag: ["Html", "Css", "JavaScript"],
          content: "",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
