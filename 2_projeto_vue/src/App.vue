<template>
    <div>
        <!--:estar_logado="true" aparece "Meu perfil" no header 
            quando colocamos :estar_logado="false" não aparece-->
        <Header :estar_logado="true"/>
        <div class="container">
            <Component1 />
            <LifeCycle/>
            <Pessoa />
        </div>
    </div>
</template>

<script>
    import LifeCycle from './components/LifeCycle.vue'
    import Component1 from './components/Component1.vue';
    import Pessoa from './components/Pessoa.vue';
    import Header from './components/Header.vue';

    export default {
        name: "App",
        //lista de componentes que serão utilizados aqui
        components: {
        Component1,
        LifeCycle,
        Pessoa,
        Header
}
    }
</script>

<!--
    styles => Global: Definido geralmente no App e se aplica a todos os elementos
           => Scoped: Cada componente tem seu estilo, usado para estilizar os componentes individualmente
-->

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        background-color:  #333;
        color: #fff;
    }

    a{
        color:rgb(78, 170, 250);
    }

    .container {
        margin: 10px;
    }

    button {
        border: none;
        border-radius: 5px;
        padding: 5px 15px;

        margin: 8px 0px;
    }
</style>