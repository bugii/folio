<template>
  <div class="initial-loading-screen">
    <div class="gray-overlay"></div>
    <div class="center-container">
      <h3>personal website of</h3>
      <h1 ref="h1">
        <span ref="d" class="D">D</span><span class="other">a</span
        ><span class="other">r</span><span class="other">i</span
        ><span class="other">o</span><span class="other">&nbsp;</span
        ><span ref="b" class="B">B</span><span class="other">u</span
        ><span class="other">g</span><span class="other">m</span
        ><span class="other">a</span><span class="other">n</span
        ><span class="other">n</span>
      </h1>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    // setTimeout(() => {
    //   this.$store.dispatch("initialLoadFinished");
    // }, 2000);

    setTimeout(() => {
      const tl = gsap.timeline();
      tl.to(".other", 0.5, {
        opacity: 0,
      });
      tl.to(".D", 0.5, {
        x: "6.75rem",
      });
      tl.to(
        ".B",
        0.5,
        {
          x: "1.75rem",
        },
        "-=.5"
      );
      tl.to(".gray-overlay", 1, {
        x: 0,
        onComplete: () => this.$store.dispatch("initialLoadFinished"),
      });
    }, 1000);
  },
};
</script>

<style lang="scss" scoped>
.initial-loading-screen {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .gray-overlay {
    transform: translateX(120%);
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: $bg-color;
  }

  h3 {
    font-weight: 300;
    font-size: 1.6rem;
    text-transform: uppercase;
    color: $text-color-light;
  }

  h1 {
    font-weight: 300;
    font-size: 2.6rem;
    margin-top: 1rem;
    text-align: center;

    span {
      display: inline-block;
      //   visibility: hidden;

      //   &.D,
      //   &.B {
      //     visibility: visible;
      //   }
    }
  }
}
</style>
