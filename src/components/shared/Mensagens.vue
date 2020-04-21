<template>
    <v-snackbar top="top" v-model="snackbar">
        {{ text }}
        <v-btn
            color="pink"
            text
            @click="snackbar = false"
        >
            Fechar
        </v-btn>
    </v-snackbar>
</template>

<script>
    export default {
        name: "Mensagens",
        props: {
            text: {
                default: '',
            },
            snackbar: {
                default: false
            }
        }
    }
</script>

<style scoped>

</style>
