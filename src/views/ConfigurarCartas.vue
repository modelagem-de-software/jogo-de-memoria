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
                                <h1>PÁGINA CONFIGURAR CARTAS</h1>
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
    import HeadPagina from "@/components/head-pagina";
    export default {
        name: "ConfigurarCartas",
        components: {HeadPagina}
    }
</script>

<style scoped>

</style>
