<!--Life cycle hooks => eventos que ocorre em determinada etapa da aplicação -->
<template>
    <h1 class="container">Meu nome é: {{nome}}</h1>
</template>

<script>
export default {
    name: "LifeCycle",
    data() {
        return {
            nome: "Ainda não sei"
        }
    },
    //ngOnInit() 
    //Método que ocorre assim que for criado o componente na view
    created() { //primeiro
        this.nome = "Fulano"
    },
    mounted() { //segundo
        this.nome = "Pedro"
        this.lifeCycle()
    },
    methods:{
        lifeCycle(){
            console.log("Podemos executar a partir do life cycle hooks")
        }
    }
    
}
</script>