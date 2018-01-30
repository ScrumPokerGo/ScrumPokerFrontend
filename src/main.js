import Vue from "vue/dist/vue"
import VueRouter from "vue-router"
import App from "./App"
import { routes } from "./routes"

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
    mode: "history",
    routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
