<template>
    <div class="container">
        <Picture />
        <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
        <!--O v-else deve estar logo abaixo do v-if-->
        <p v-else>Estou em busca de novas oportunidades.</p>
        <p class="list-title">Utilizo as seguintes tecnologias para backend:</p>
        <ul v-for="(item, index) in backend_technologies" v-bind:key="index">
            <!--Para usar o v-for precisamos definir o v-bind com uma chave que nesse caso selecionamos o index da lista -->
            <li>{{ item }}</li>
        </ul>
        <p class="list-title">Utilizo as seguintes tecnologias para frontend:</p>
        <ul v-for="item in frontend_technologies" v-bind:key="item.id">
            <li>{{ item.language }}</li>
        </ul>
        <div>
            <button @click="showEmail">{{texto_botao}}</button>
        </div>
        <p v-show="mostrar_email">Mande uma mensagem para: {{ email }}</p>
        <!--O v-bind transforma o atributo html em dinâmico, nesse caso, o href-->
        <p>Para acessar o portfólio <a v-bind:href="meu_link" target="_blank" rel="noopener noreferrer">clique aqui!</a></p>
    </div>
</template>

<script>
import Picture from './Picture.vue'
export default {
    name: "Info",
    props:{
      email: String  
    },
    data() {
        return {
            esta_trabalhando: false,
            mostrar_email: false,
            meu_link: "https://google.com",
            texto_botao: 'Mostrar email',
            backend_technologies: ['Node.js', 'PHP', 'Java'],
            frontend_technologies: [
                {id: 1, language: "HTML"},
                {id: 2, language: "CSS"},
                {id:3, language: "Vue"},
                {id: 4, language: "React.js"}
            ]
        };
    },
    components: { Picture },
    methods:{
        showEmail(){
            this.mostrar_email = !this.mostrar_email;
            if(this.mostrar_email){
                this.texto_botao = 'Esconder email'
            }
            else{
                this.texto_botao = 'Mostrar email'
            }
        }
    }
}
</script>

<style scoped>
    li {
        list-style: none;
        margin: 5px 0;
    }

    .list-title{
        margin: 20px 0px;
        font-size: 20px;
    }
</style>