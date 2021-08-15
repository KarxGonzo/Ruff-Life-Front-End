import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import PetsIndex from "../views/PetsIndex.vue";
import PetsNew from "../views/PetsNew.vue";
import PetsShow from "../views/PetsShow.vue";
import PetsEdit from "../views/PetsEdit.vue";
import ItemsNew from "../views/ItemsNew.vue";
import ShoppingHistoryNew from "../views/ShoppingHistoryNew.vue";
import FavoriteSnacksNew from "../views/FavoriteSnacksNew.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  { path: '/signup', name: 'Signup', component: Signup},
  { path: "/login", name: "Login", component: Login },
  { path: "/logout", name: "Logout", component: Logout },
  { path: "/pets", name: "PetsIndex", component: PetsIndex },
  { path: "/pets/new", name: "PetsNew", component: PetsNew },
  { path: "/pets/:id", name: "PetsShow", component: PetsShow },
  { path: "/pets/:id/edit", name: "PetsEdit", component: PetsEdit },
  { path: "/items/new", name: "Itemsnew", component: ItemsNew },
  { path: "/shopping_histories/new", name: "ShoppingHistoryNew", component: ShoppingHistoryNew },
  { path: "/favorite_snacks/new", name: "FavoriteSnacksNew", component: FavoriteSnacksNew },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
