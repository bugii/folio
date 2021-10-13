<template>
  <nav>
    <nuxt-link to="/" class="nav-item logo" @click.native="closeNav()">
      DB
    </nuxt-link>
    <ul ref="navList" class="nav-items" :class="{ 'nav-open': navOpen }">
      <li class="nav-item">
        <nuxt-link exact @click.native="closeNav()" to="/about"
          >About</nuxt-link
        >
      </li>
      <li class="nav-item">
        <nuxt-link exact class="projects" @click.native="closeNav()" to="/"
          >Projects</nuxt-link
        >
      </li>
      <!-- <li class="nav-item">
        <nuxt-link @click.native="closeNav()" to="/blog">Blog</nuxt-link>
      </li>
      <li class="nav-item">
        <nuxt-link @click.native="closeNav()" to="/contact">
          Contact
        </nuxt-link>
      </li> -->
    </ul>
    <svg
      v-if="!navOpen"
      key="svg1"
      @click="openNav()"
      class="nav-icon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.24 14.06"
    >
      <defs>
        <style>
          .cls-1 {
            stroke-miterlimit: 10;
            stroke-width: 1.5px;
          }
        </style>
      </defs>
      <title>nav-icon</title>
      <g>
        <line class="cls-1" y1="1" x2="24.24" y2="1" />
        <line class="cls-1" x1="7.58" y1="7.03" x2="24.24" y2="7.03" />
        <line class="cls-1" x1="16.03" y1="13.06" x2="24.24" y2="13.06" />
      </g>
    </svg>
    <svg
      v-if="navOpen"
      key="svg2"
      @click="closeNav()"
      class="nav-icon nav-icon-close"
      enable-background="new 0 0 413.348 413.348"
      height="512"
      viewBox="0 0 413.348 413.348"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"
      />
    </svg>
  </nav>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      navOpen: false,
      isMobile: false,
    };
  },
  components: {},
  methods: {
    openNav() {
      this.navOpen = true;
      gsap.from(document.querySelectorAll(".nav-item"), {
        x: -40,
        opacity: 0,
        stagger: 0.2,
        ease: "slow.in",
        onComplete: () => {
          gsap.to(document.querySelector(".nav-icon-close"), {
            opacity: 1,
            duration: 0.5,
          });
        },
      });
    },
    closeNav() {
      if (this.isMobile) {
        gsap.to(document.querySelectorAll(".nav-item"), {
          opacity: 0,
          duration: 0.2,
          stagger: -0.1,
          onComplete: () => {
            this.navOpen = false;
            gsap.set(document.querySelectorAll(".nav-item"), { opacity: 1 });
            gsap.set(document.querySelector(".nav-icon-close"), { opacity: 0 });
          },
        });
      }
    },
    checkMobile() {
      if (window.matchMedia("(max-width: 768px)").matches) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  },
  mounted() {
    this.checkMobile();
    window.addEventListener("resize", this.checkMobile);

    gsap.from("nav", 2, {
      opacity: 0,
    });
  },
};
</script>

<style lang="scss" scoped>
nav {
  z-index: 1;
  position: relative;
  padding: 4rem $side;
  color: $text-color;
  stroke: $text-color;
  fill: $text-color;
  font-weight: 300;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: $side-mobile;
  }

  .nuxt-link-exact-active {
    font-weight: 600;
  }

  .nuxt-link-active.logo,
  .nuxt-link-active.projects {
    font-weight: 600;
  }

  .nav-item {
    font-size: 1.6rem;
  }

  .nav-items {
    .nav-item {
      @media screen and (max-width: 800px) {
        font-size: 3rem;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 800px) {
      flex-direction: column;
      align-items: flex-start;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      min-height: 100vh;
      background-color: $bg-color;
      padding: $side-mobile;

      display: none;

      &.nav-open {
        display: flex;
      }
    }

    li {
      margin-left: 4rem;

      @media screen and (max-width: 800px) {
        margin-left: 0;
        font-size: 3rem;
        line-height: 2;
      }
    }
  }
}

a {
  text-decoration: none;
  color: inherit;
}

.nav-icon {
  display: none;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 800px) {
    cursor: pointer;
    stroke: inherit;
    fill: inherit;
    height: 2rem;
    width: 2rem;
    display: inline-block;
  }
}

.nav-icon-close {
  opacity: 0;
  position: fixed;
  top: 4rem;
  right: $side;

  @media screen and (max-width: 800px) {
    right: $side-mobile;
  }
}
</style>
