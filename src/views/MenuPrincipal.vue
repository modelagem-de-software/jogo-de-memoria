<template>
  <div class="d-flex justify-center align-center fill-height">
    <div class="bg-white col-4 box-com-sombra d-flex justify-center align-center border-radius-5">
      <v-list rounded>
      <v-subheader class="mt-5 mb-5">
        <h1>Jogo de Memória</h1>
      </v-subheader>
        <v-list-item
                v-for="(botao, index) in botoes"
                :key="index"
                @click="irPara(botao.rota)"
        >
          <v-list-item-icon>
            <v-icon v-if="botao.icon" color="pink">{{ botao.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
              <v-list-item-title v-text="botao.nome"></v-list-item-title>
          </v-list-item-content>

        </v-list-item>
      </v-list>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "MenuPrincipal",
  data: ()=> ({
    botoes: [
      {
        nome: 'Jogar',
        cor: 'primary',
        rota: '/jogar',
        icon: 'mdi-gamepad-variant-outline',
      },
      {
        nome: 'Configurar Jogo',
        cor: 'blue lighten-2',
        rota: '/configurar-jogo',
        icon: 'mdi-account-cog',
      },
      {
        nome: 'Configurar Cartas',
        cor: 'teal darken-3',
        rota: '/configurar-cartas',
        icon: 'mdi-cards',
      },
    ]
  }),
  methods: {
    irPara(rota) {
      this.$router.push({ path: rota });
    }
  }
}
</script>
