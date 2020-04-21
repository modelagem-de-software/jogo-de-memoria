import Vue from 'vue'
import VueRouter from 'vue-router'
import MenuPrincipal from "@/views/MenuPrincipal";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect: '/menu-principal'
  },
  {
    path: '/menu-principal',
    name: 'Menu Principal',
    component: MenuPrincipal
  },
  {
    path: '/jogar',
    name: 'Jogar',
    component: () => import(/* lazyloading Jogar */ '../views/Jogar.vue')
  },
  {
    path: '/configurar-jogo',
    name: 'Configurações do Jogo',
    component: () => import(/* lazyloading ConfigurarJogo */ '../views/ConfigurarJogo.vue')
  },
  {
    path: '/configurar-jogo/selecionar-dificuldade',
    name: 'Selecionar Dificuldade',
    component: () => import(/* lazyloading SelecionarDificuldade */ '../views/SelecionarDificuldade.vue')
  },
  {
    path: '/configurar-jogo/selecionar-skin',
    name: 'Selecionar Skin',
    component: () => import(/* lazyloading SelecionarSkin */ '../views/SelecionarSkin.vue')
  },
  {
    path: '/configurar-cartas',
    name: 'Configurações de Cartas',
    component: () => import(/* lazyloading ConfigurarCartas */ '../views/ConfigurarCartas.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
