<template>
  <v-app class="bg-gray">
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h3>Jogo de Memória</h3>
      <div class="ml-10">
        <small>Desenvolvido por Assis Neto,  Luiza Lamarque,  Renan Schmitt,  Willian Bello</small>
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style>
  html, body {
    height: 100%;
  }

  .v-content__wrap {
    background-color: #eaeaea;
  }

  .bg-white {
    background-color: white;
  }

  .border-radius-5 {
    border-radius: 5px;
  }

  .box-com-sombra {
    box-shadow: 0 2px 4px #999898;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.4s;
    transition-property: opacity;
    transition-timing-function: linear;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }

  .back {
    background-color: #ffc107;
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }

  .front {
    background-color: #673ab7;
    z-index: 2;
    -webkit-transform: rotateY(0);
    transform: rotateY(0);
  }

  .back, .front {
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }

  .back, .flipper, .front {
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }


</style>
