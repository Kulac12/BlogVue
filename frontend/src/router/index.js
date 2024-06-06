import {createRouter,createWebHistory} from "vue-router";

import HomeView from "@/views/HomeView.vue";
import ApplicationView from "@/views/ApplicationView.vue";
import ContactView from "@/views/ContactView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";
import YandexMap from "@/views/YandexMap.vue";


const router = createRouter({
    history: createWebHistory(),
    routes:[
      {
        path:'/',
        name:'home',
        component: HomeView,
      },
      {
        path:'/appl',
        name:'appl',
        component: ApplicationView,
      },
      {
        path:'/login',
        name:'login',
        component: LoginView,
      },
      {
        path:'/contact',
        name:'contact',
        component: ContactView,
      },
      {
        path:'/register',
        name:'register',
        component: RegisterView,
      },
      {
        path:'/yandexmap',
        name:'yandexmap',
        component: YandexMap,
      },
    ],
    linkActiveClass:'aktif-link',
});

export default router;