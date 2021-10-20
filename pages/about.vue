<template>
  <main>
    <h1>Hey, I am Dario!</h1>
    <p>
      I am a software developer based in Switzerland. I like to develop (and
      sometimes design) websites and other web-based projects.
    </p>

    <p>
      I graduated from University of Zurich (Major: Software Systems) in
      September 2021. During my Master's in Computer Science I worked on many
      small projects (some of which you can find on this webiste) to learn new
      technologies and gather experience. On the frontend I am mostly familiar
      with Vue and React, and on the Backend I used NodesJS, Java with Spring
      Boot and .NET 5.
    </p>

    <p>
      Some of my projects are open source and can be found on my
      <a href="http://github.com/bugii">GitHub</a>.
    </p>

    <p class="contact">
      You can contact me at
      <a href="mailto:dario.bugmann@outlook.com">dario.bugmann@outlook.com.</a>
    </p>
  </main>
</template>

<script>
export default {
  transition: {
    enter(el, done) {
      console.log("about: enter");
      done();
    },
    leave(el, done) {
      console.log("about: leave");
      done();
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  padding: $side;
  font-size: 1.6rem;
  max-width: 80rem;

  @media screen and (max-width: 800px) {
    padding: $side-mobile;
  }

  h1 {
    font-size: 3rem;
  }

  p {
    margin-top: 2rem;
  }

  a {
    text-decoration: none;
    color: $text-title;
  }
}
</style>
