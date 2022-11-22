<template>
    <ul>
        <li><a href=""> Home </a></li>
        <li><a href=""> Projetos </a></li>
        <li><a href=""> Contato </a></li>
        <li v-if="estar_logado"><a href=""> Meu Perfil </a></li>
    </ul>    
</template>

<script>
export default {
    name:"Header",
    props: ["estar_logado"]
}
</script>

<style scoped>
    ul{
        list-style: none;
        display: flex;
        padding:24px;
        background-color: white;
    }
    li{
        margin-right: 10px;
    }
    a {
        color: rgb(129, 129, 129);
        text-decoration: none;
        transition: .5s;
    }

    a:hover{
        color: turquoise;
    }
</style>