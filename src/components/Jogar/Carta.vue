<template>
    <div @click.prevent.stop="flippar">
        <vue-flip width="200px" height="250px" v-model="flip">
            <template v-slot:front class="front">
                <div>
                    {{ carta.frente }}
                </div>
            </template>
            <template v-slot:back class="back">
                <div>
                    {{ carta.verso }}
                </div>
            </template>
        </vue-flip>
    </div>
</template>

<script>
import VueFlip from 'vue-flip';
export default {
    props: {
        carta: {
            id: Number,
            frente: String,
            verso: String,
            visivel: Boolean
        }
    },
    data() {
        return {
            localFlip: false,
            flip: false,
        }
    },
    components: {
        'vue-flip': VueFlip,
    },
    name: "Carta",
    methods: {
        flippar() {
            return this.$emit('clickou', this.flip);
        }
    },
}
</script>

<style scoped>

</style>
