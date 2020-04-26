<template>
    <div class="d-flex justify-center align-center fill-height">
        <div class="bg-white col-10 box-com-sombra d-flex justify-center align-center border-radius-5">
            <v-row>
                <v-col>
                    <head-pagina></head-pagina>
                    <v-row>
                        <v-col>
                            <!-- Inicia conteúdo da página -->
                            <div class="mt-10">
                                <h1>PÁGINA JOGAR</h1>
                                <div class="row cartas container ml-auto mr-auto">
                                    <div class="carta" v-for="(carta, index) in cartas"
                                         :class="{ virada: carta.virada, correta: carta.correta}"
                                         @click="virarCarta(carta)"
                                         :key="index"
                                        >
                                        <div class="costas"></div>
                                        <div class="frente" v-bind:style="{ backgroundImage: `url(${carta.imagem})` }">
                                        </div>
                                    </div>
<!--                                    <carta v-for="carta in cartas"-->
<!--                                           :key="carta.id"-->
<!--                                           :carta="carta"-->
<!--                                           class="col-md-2"-->
<!--                                           @clickou="virarCarta(carta)"></carta>-->
                                </div>
                            </div>
                            <!-- Final conteúdo da página -->
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col></v-col>
                    </v-row>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
    import HeadPagina from "@/components/shared/HeadPagina";
    import CartasService from "@/services/CartasService";

    import _ from 'lodash'
    export default {
        name: "Jogar",
        components: {HeadPagina},
        data() {
            return {
                cartas: [
                ],
                nome: '',
                pararJogo: true,
                desabilitado: false,
                cronometro: 0,
                tempo: 0,
                rodadas: 0,
                combinacoes: 0,
                desvirarTempo: 0,
                mostrarResultado: false,
                mostrarFinal: false,
                jogadores: []
            }
        },
        methods: {
            embaralhar() {
                let baralho = [].concat(_.cloneDeep(this.cartas), _.cloneDeep(this.cartas));
                return _.shuffle(baralho);
            },

            reiniciar() {
                this.mostrarResultado = false;
                this.mostrarFinal = false;
                this.pararJogo = true;
                this.desabilitado = false;
                this.tempo = 0;
                this.rodadas = 0;
                clearInterval(this.cronometro);
                this.cronometro = 0;
                let cartas = this.embaralhar();
                _.each(cartas, (carta) => {
                    carta.virada = false;
                    carta.correta = false;
                });
                this.cartas = cartas;
            },
            comecar() {
                this.mostrarResultado = false;
                this.mostrarFinal = false;
                this.pararJogo = false;
                this.desabilitado = true;
                this.cronometro = setInterval(() => {
                    this.tempo++;
                }, 1000);
            },
            fim() {
                this.pararJogo = true;
                clearInterval(this.cronometro);
                this.mostrarResultado = true;
                this.mostrarFinal = true;
                let jogador = {
                    nome: this.nome,
                    tempo: this.tempo,
                    rodadas: this.rodadas
                };
                this.jogadores.push(jogador);
            },
            cartasViradas() {
                return _.filter(this.cartas, carta => carta.virada);
            },
            mesmaCartaVirada() {
                let cartasViradas = this.cartasViradas();
                if (cartasViradas.length == 2) {
                    if (cartasViradas[0].name == cartasViradas[1].name) {
                        return true;
                    }
                }
            },
            deixarCartaVirada() {
                _.each(this.cartas, (carta) => {
                    if (carta.virada) {
                        carta.correta = true;
                    }
                });
            },
            verificarTodasCorretas() {
                let cartasEncontradas = _.filter(this.cartas, carta => carta.correta);
                this.combinacoes = cartasEncontradas.length;
                if (cartasEncontradas.length == this.cartas.length) {
                    return true;
                }
            },
            virarCarta(carta) {
                if (carta.correta || carta.virada) return;
                let contador = this.cartasViradas().length;
                if (contador == 0) {
                    carta.virada = !carta.virada;
                } else if (contador == 1) {
                    carta.virada = !carta.virada;
                    this.rodadas++;
                    if (this.mesmaCartaVirada()) {
                        this.flipBackTimer = setTimeout( ()=> {
                            this.limparDesvirarTempo();
                            this.deixarCartaVirada();
                            this.desvirar();
                            if (this.verificarTodasCorretas()) {
                                this.fim();
                            }
                        }, 200);
                    } else {
                        this.desvirarTempo = setTimeout( ()=> {
                            this.limparDesvirarTempo();
                            this.desvirar();
                        }, 1000);
                    }
                }
            },

            limparDesvirarTempo() {
                clearTimeout(this.desvirarTempo);
                this.desvirarTempo = null;
            },

            desvirar() {
                _.map(this.cartas, carta => carta.virada = false);
            },

            async initialize () {
                this.carregando = true;
                this.cartas = [];
                await CartasService
                    .getCartasCadastradas()
                    .then(response => {
                        if (response) {
                            this.cartas = response.data.cartas;
                            this.carregando = false;
                        }
                    }, () => {
                        this.mensagem.text = 'Não foi possível obter os dados do servidor'
                        this.mensagem.visivel = true;
                        this.carregando = false;
                    });
            },
        },
        computed: {
            ordenarResultados: ()=> {
                function compare(a, b) {
                    if (a.rodadas < b.rodadas) {
                        return -1;
                    }
                    if (a.rodadas > b.rodadas) {
                        return 1;
                    }
                    return 0;
                }
                return this.jogadores.sort(compare);
            }
        },
        async created() {
            await this.initialize();
            this.reiniciar();
            this.embaralhar();
        }
    }
</script>

<style scoped>
    .cartas .carta {
        position: relative;
        display: inline-block;
        width: 180px;
        height: 230px;
        margin: 5px;
        transition: opacity 0.3s;
    }

    .cartas .carta .costas {
        background-color: #5a68c4;
        background-image: url('../assets/vue/logo.png');
        background-size: 75%;
        background-position: center;
        background-repeat: no-repeat;
    }

    .cartas .carta .frente {
        transform: rotateY(-180deg);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }

    .cartas .carta.virada .costas, .cartas .carta.correta .costas {
        transform: rotateY(180deg);
    }

    .cartas .carta.virada .frente, .cartas .carta.correta .frente {
        transform: rotateY(0deg);
    }

    .cartas .carta.correta {
        opacity: 0.3;
    }
</style>
