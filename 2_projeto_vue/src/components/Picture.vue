<template>
    <!-- :src equivale a v-bind:src -->
    <div>
        <img class="img" :src="avatar" :alt="descricao">
        <mudar-imagem @mudar-imagem="trocarImagem()"/>
    </div>
</template>

<script>
import MudarImagem from './MudarImagem.vue'
export default {
  components: { MudarImagem },
    name: "Picture",
    data(){
        return{
            avatar: "/img/logo.png",
            descricao: "logo"
        }
    },
    methods: {
        trocarImagem(){
            this.avatar = this.avatar == '/img/logo.png'? 
                this.avatar = '/img/simpsons.png':
                this.avatar = '/img/logo.png'

        }
    }
}
</script>

<style>
.img{
    width: 50px;
    height: 50px;
}
</style>