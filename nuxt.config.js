export default {
  target: "static",
  generate: { routes: ["/marti", "/mapeni", "/toni"] },
  /*
   ** Headers of the page
   */
  head: {
    title: "Dario Bugmann",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Personal Website - Dario Bugmann",
      },
    ],
    link: [
      // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Raleway:400,500,700,800&display=swap",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Playfair+Display:400,600,700,800&display=swap",
      },
    ],
  },
  styleResources: {
    scss: ["./assets/scss/vars.scss"],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],
  /*
   ** Build configuration
   */
  build: {
    transpile: ["gsap"],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
};
