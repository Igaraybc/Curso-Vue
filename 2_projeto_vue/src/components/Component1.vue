<template>
    <!--Tags html que pertencem ao componente e tem que estar encapsulado igual no react retornando apenas uma tag-->
    <div class="container">
        <h1>Component1 Works!</h1>
        <p>Meu nome é {{nome}}</p>
        <p>Trabalho: {{profissao}}</p>
        <MultiplosEventos />
        <Reutilizacao />
        <Reutilizacao />
        <Reutilizacao />
        <Reutilizacao />
    </div>
</template>

<script>
    import MultiplosEventos from './MultiplosEventos.vue';
    import Reutilizacao from './Reutilizacao.vue';
    //Códigos JS
    export default {
        //exporta o componente para ser usado em outro local e o name define como o componente deve ser chamado por outro
    name: "Component1",
    components: {
    MultiplosEventos,
    Reutilizacao
},
    //dados que serão utlizados dentro desse componente
    data() {
        return {
            nome: "Fulano",
            profissao: "Desenvolvedor"
        }
    }
}

</script>