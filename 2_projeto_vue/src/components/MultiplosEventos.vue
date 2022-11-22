<template>
    <div>
        <button @click="primeiro($event), segundo()">Ativar Múltiplos eventos</button>
        <p>{{multiplos_eventos}}</p>
    </div>

</template>

<script>
export default {
    name: "MultiplosEventos",
    data(){
        return {
            multiplos_eventos: "nada"
        }
    },
    methods: {
        primeiro(e) {
            this.multiplos_eventos = "primeiro"
        },
        segundo(){
            setTimeout(() => {
                this.multiplos_eventos = "segundo"
            }, 500)

        }
    }
}
</script>