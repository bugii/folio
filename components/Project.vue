<template>
  <h2
    ref="projectTitle"
    class="project-title"
    :class="{ active: active }"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="openProject"
  >
    {{ title }}
  </h2>
</template>

<script>
import gsap from "gsap";

export default {
  props: ["title", "image", "slug"],
  data() {
    return {
      active: false,
    };
  },

  methods: {
    wrap(el, wrapper) {
      el.parentNode.insertBefore(wrapper, el);
      wrapper.appendChild(el);
    },
    mouseenter() {
      const backgroundImageContainer = document.querySelector(".image-canvas");
      this.active = true;
      backgroundImageContainer.style.backgroundImage =
        "url(" + this.image + ")";
    },
    mouseleave() {
      const backgroundImageContainer = document.querySelector(".image-canvas");
      this.active = false;
      backgroundImageContainer.style.backgroundImage = "none";
    },
    openProject() {
      // const projectsTextContainer = document.querySelector(
      //   ".projects-container"
      // );
      // projectsTextContainer.style.display = "none";

      const backgroundImageContainer = document.querySelector(".image-canvas");

      gsap.to(backgroundImageContainer, {
        width: "100%",
        height: "100%",
        duration: 1,
        filter: "grayscale(0%)",
        "-webkit-filter": "grayscale(0%)",
        onComplete: () => this.$router.push(`projects/${this.slug}`),
      });
    },
  },
  mounted() {
    const Splitting = require("splitting");
    let res = Splitting({
      target: this.$refs.projectTitle,
      by: "lines",
    });

    let spans = [...this.$refs.projectTitle.childNodes].filter(
      (el) => el.nodeName === "SPAN"
    );

    const arr = [];
    for (let line = 0; line < res[0].lines.length; line++) {
      arr.push([]);
    }

    // also include line indexes on whitespaces (needed in order to include them
    // in the div for animation)
    spans.forEach((span) => {
      // span.addEventListener("click", () => this.$emit("clickProject"));
      if (getComputedStyle(span).getPropertyValue("--line-index") === "") {
        const prev = getComputedStyle(
          span.previousElementSibling
        ).getPropertyValue("--line-index");
        span.style.setProperty("--line-index", prev);
      }

      if (getComputedStyle(span).getPropertyValue("--line-index") === "") {
        const prev = getComputedStyle(
          span.previousElementSibling
        ).getPropertyValue("--line-index");
        arr[prev].push(span);
      } else {
        const index = getComputedStyle(span).getPropertyValue("--line-index");
        arr[index].push(span);
      }
    });

    arr.forEach((line) => {
      const wrapper = document.createElement("div");
      // wrapper.addEventListener("click", () => this.$emit("clickProject"));
      wrapper.classList.add("overflow-hidden");

      line.forEach((el) => {
        this.wrap(el, wrapper);
      });
    });

    // create timeline
    const tl = gsap.timeline();
    arr.forEach((row, i) => {
      tl.from(
        row,
        0.7,
        {
          delay: i == 0 ? 1 : 0,
          y: "6rem",
          opacity: 0,
          ease: "power2.out",
        },
        "-=0.6"
      );
    });
  },
};
</script>

<style lang="scss">
@import "splitting/dist/splitting.css";
@import "splitting/dist/splitting-cells.css";

.project-title {
  position: relative;
  margin-left: $side;
  padding-left: $side;
  padding-right: $side;
  color: $text-color-light;
  font-size: 5.5rem;
  font-weight: 400;
  font-family: "Playfair Display";
  cursor: pointer;
  margin-top: 2rem;

  @media screen and (max-width: 800px) {
    font-size: 2rem;
    margin-left: 0;
    // margin-left: $side-mobile;
    padding-left: $side-mobile;
    padding-right: $side-mobile;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  span.word {
    display: inline-block;
  }

  &.active {
    color: $text-title;

    &::before {
      position: absolute;
      left: 0;
      content: "";
      background-color: black;
      width: 5px;
      height: 100%;
    }
  }
}
</style>
