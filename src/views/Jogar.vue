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
                                <div class="row">
                                    <carta v-for="carta in cartas"
                                           :key="carta.id"
                                           :carta="carta"
                                           class="col-md-2"
                                           @clickou="virarCarta(carta)"></carta>
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
    import Carta from '@/components/Jogar/Carta';
    export default {
        name: "Jogar",
        components: {HeadPagina, Carta},
        data() {
            return {
                cartas: [
                    {
                        id: 1,
                        frente: 'carta 1 frente',
                        verso: 'carta 1 trás',
                        visivel: false
                    },
                    {
                        id: 2,
                        frente: 'carta 2 frente',
                        verso: 'carta 2 trás',
                        visivel: false
                    },
                    {
                        id: 3,
                        frente: 'carta 3 frente',
                        verso: 'carta 3 trás',
                        visivel: false
                    },
                    {
                        id: 4,
                        frente: 'carta 4 frente',
                        verso: 'carta 4 trás',
                        visivel: false
                    },
                ],
                viradas: 0
            }
        },
        methods: {
            virarCarta(carta) {
                carta.visivel = !carta.visivel;
                if (this.viradas >= 1) {
                    this.viradas = 0;
                }
                this.viradas += 1;
                this.cartas.forEach(carta => carta.visivel = false)
            }
        }
    }
</script>

<style scoped>

</style>
