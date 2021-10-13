<template>
  <div>
    <Loading v-if="!$store.getters.hasInitialPageLoaded" />
    <Nav v-if="$store.getters.hasInitialPageLoaded" />
    <nuxt v-if="$store.getters.hasInitialPageLoaded" />
    <div class="image-canvas"></div>
  </div>
</template>

<script>
import Loading from "../components/Loading";
import Nav from "../components/Nav";
import { gsap } from "gsap";

export default {
  components: {
    Loading,
    Nav,
  },
  // methods: {
  //   loadingFinished() {
  //     this.loading = false;
  //   },
  // },
  mounted() {
    console.log(this.$store.getters.hasInitialPageLoaded);
  },
};
</script>
<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  font-size: 10px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Raleway";
  color: $text-color;
  overflow-y: scroll;
}

img {
  display: block;
}

.image-canvas {
  position: fixed;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  z-index: -1;
  background-image: none;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
