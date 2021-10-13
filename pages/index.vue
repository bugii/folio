<template>
  <div class="projects-container">
    <Project
      v-for="project in projects"
      :key="project.slug"
      :title="project.title"
      :image="project.image"
      :slug="project.slug"
    />
  </div>
</template>

<script>
import Project from "../components/Project";
import projects from "../assets/content/projects.json";
import gsap from "gsap";

export default {
  data() {
    return {
      projects,
    };
  },

  components: {
    Project,
  },

  mounted() {
    console.log("mounted");
    const backgroundImageContainer = document.querySelector(".image-canvas");
    backgroundImageContainer.style.backgroundImage = "none";
    backgroundImageContainer.style.height = "30vw";
    backgroundImageContainer.style.width = "60vw";
    backgroundImageContainer.style.opacity = "1";
    backgroundImageContainer.style.filter = "grayscale(100%)";
    backgroundImageContainer.style.webkitFilter = "grayscale(100%)";
  },

  transition: {
    enter(el, done) {
      console.log("index: enter");
      done();
    },
    leave(el, done) {
      console.log("index: leave");
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.projects-container {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
}
</style>
