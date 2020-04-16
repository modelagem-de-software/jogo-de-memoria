<template>
  <v-app class="bg-gray">
    <v-app-bar
      app
      color="primary"
      dark
    >
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
</style>
