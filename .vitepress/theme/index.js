// https://vitepress.dev/guide/custom-theme
// import './tailwind.postcss'
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import './style-liberty.css'
import './my.css'
import vuetify from './vuetify'
// import Test from '../components/Test.vue'
import Home from './pages/Home.vue'
import AboutUs from './pages/AboutUs.vue'
import FAQ from './pages/FAQ.vue'
import AskFor from './pages/AskFor.vue'
import BlogPost from './pages/BlogPost.vue'
import ContactUs from './pages/ContactUs.vue'
import ContactUsForm from './components/ContactUsForm.vue'
import Clients from './pages/Clients.vue'
import HomeTitle from './components/HomeTitle.vue'
import HomeBody from './components/HomeBody.vue'
import DocTop from './components/DocTop.vue'
import PageTop from './components/PageTop.vue'
import HomeBanner from './components/HomeBanner.vue'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-before': () => h(HomeTitle),
      'home-hero-before': () => h(HomeBanner),
      'home-features-after': () => h(HomeBody),
      'page-top': () => h(DocTop)
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('FAQ',FAQ)
    app.component('AboutUs',AboutUs)
    app.component('BlogPost',BlogPost)
    app.component('ContactUs',ContactUs)
    app.component('AskFor',AskFor)
    app.component('PageTop',PageTop)
    app.component('Clients',Clients)
    app.component('ContactUsForm',ContactUsForm)
    app.use(vuetify)
    // app.component('Test', Test)
  }
}
