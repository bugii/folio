<template>
  <div class="single-page-container">
    <!-- <div
      ref="projectImagePlaceholder"
      class="single-page-project-image"
      :style="{
        backgroundImage: 'url(' + project.image + ')',
      }"
      style="background-size: cover; background-position: center center"
      alt=""
    ></div> -->
    <h1
      class="single-project-title"
      :style="{
        backgroundImage: 'url(' + project.image + ')',
      }"
      style="background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        -webkit-background-clip: text;
        color: transparent"
    >
      {{ project.title }}
    </h1>

    <!-- This is an element that is not shown but has the exact same height as the text inside the "single-project-title" div
      Since we use a background-image on the title background clip, we need this image to look exactly as the "project-image" to have a working transition
      The "project-image" has height and width of 100vh/100vw, which is why the "single-project-title" needs that as well to have the right background clip
      Since the two are positioned absolutely, we can use this "single-project-title-hidden" to use as a kind of padding, so that the text appears at the right position below. -->
    <div class="full-page-wrapper">
      <h1 class="single-project-title-hidden">
        {{ project.title }}
      </h1>

      <div class="second-half">
        <div class="subtitle-div">
          <ul>
            <li>Client: Personal</li>
            <li>Design</li>
            <li>Development</li>
            <li>JamStack</li>
          </ul>
          <div>
            <div>
              <Arrow />
              <a :href="project.link">Visit project</a>
            </div>
            <img :src="project.image" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div class="text-container" ref="textContainer">
      <div class="columns">
        {{ project.text }}
      </div>
    </div>

    <div ref="lowerContainer" class="lower-container">
      <!-- <div
        class="project-images-container"
        :style="{ backgroundColor: project.color }"
      >
        <ProjectImage
          v-for="(image, index) in project.images"
          :key="index"
          :image="image"
          :slug="project.slug"
          :index="index"
        />
      </div> -->

      <div
        class="next-project-container"
        @click="$router.push(nextProject.slug)"
        :style="{ backgroundImage: 'url(' + nextProject.image + ')' }"
        style="background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        -webkit-background-clip: text;
        color: transparent"
      >
        Next project
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import Arrow from "../../components/Arrow.vue";

export default {
  name: "id",
  components: {
    Arrow,
  },
  asyncData({ route }) {
    const projects = require("../../assets/content/projects.json");

    let filteredProject, nextProject;

    projects.filter((project, index) => {
      if (project.slug === route.params.id) {
        nextProject = projects[(index + 1) % projects.length];
        filteredProject = project;
        return;
      }
    })[0];

    return {
      project: filteredProject,
      nextProject,
    };
  },
  transition: {
    enter(el, done) {
      console.log("id: enter");

      // gsap.to(document.querySelector(".projects-container"), {
      //   opacity: 0,
      //   duration: 0.25,
      // });

      gsap.to(document.querySelector(".image-canvas"), {
        opacity: 0,
        duration: 1.25,
        onComplete: done,
      });
    },
    leave(el, done) {
      console.log("id: leave");
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
.single-page-container {
  width: 100%;

  .single-project-title {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    height: 100vh;
    width: 100%;
    padding: $side;
    padding-top: 15rem;
    line-height: 9rem;
    z-index: -1;
    font-size: 17rem;

    @media screen and (max-width: 800px) {
      font-size: 5rem;
      line-height: 3rem;
      padding-left: $side-mobile;
      padding-right: $side-mobile;
    }

    &-hidden {
      height: auto;
      width: auto;
      padding: $side;
      padding-top: 6rem;
      line-height: 9rem;
      font-size: 17rem;
      visibility: hidden;

      @media screen and (max-width: 800px) {
        font-size: 5rem;
        line-height: 3rem;
        padding-left: $side-mobile;
        padding-right: $side-mobile;
      }
    }
  }

  .full-page-wrapper {
    // height: calc(100vh - 10rem);
    // max-height: 80rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // @media screen and (max-width: 800px) {
    //   height: auto;
    //   max-height: auto;
    // }

    .second-half {
      align-items: flex-end;
      // display: flex;

      .subtitle-div {
        display: flex;
        justify-content: space-between;

        @media screen and (max-width: 800px) {
          flex-direction: column;
        }

        // justify-content: space-between;
        // align-items: center;

        ul {
          padding-left: $side;
          list-style: none;
          font-size: 2rem;

          @media screen and (max-width: 800px) {
            padding-left: $side-mobile;
          }

          li:not(:first-child) {
            margin-top: 1rem;
          }
        }

        div {
          display: flex;

          @media screen and (max-width: 800px) {
            flex-direction: column;
          }

          div {
            align-self: flex-end;
            display: flex;
            align-items: center;
            margin-right: 3rem;
            margin-bottom: 3rem;

            svg {
              fill: $text-color;
              margin-right: 1rem;
              height: 1.5rem;
            }
            a {
              color: $text-color;
              text-decoration: none;
              font-size: 1.6rem;
            }
          }

          img {
            height: 30rem;
            // max-width: 35%;
            // height: auto;

            @media screen and (max-width: 800px) {
              width: 100%;
              height: auto;
            }
          }
        }
      }
    }
  }

  .text-container {
    padding: $side;
    font-size: 2rem;
    width: 100%;

    @media screen and (max-width: 800px) {
      padding: $side-mobile;
    }

    .columns {
      margin-top: 2rem;
      column-count: 4;
      line-height: 3rem;
      width: 100%;
      position: relative;

      @media screen and (max-width: 800px) {
        column-count: 1;
      }
    }
  }

  // .project-images-container {
  //   padding: 0 8rem 8rem 8rem;
  //   width: 100%;

  //   @media screen and (max-width: 800px) {
  //     padding: 0 4rem 4rem 4rem;
  //   }
  // }

  .next-project-container {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    line-height: 40vh;
    font-weight: 800;
    height: 40vh;
    width: 100%;
    font-size: 10rem;
    cursor: pointer;
    position: relative;

    @media screen and (max-width: 800px) {
      line-height: 30vh;
      font-size: 5rem;
    }
  }
}
</style>
