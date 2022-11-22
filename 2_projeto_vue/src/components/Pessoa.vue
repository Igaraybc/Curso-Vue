<template>
    <div class="container">
        <h2>Esta é a descrição da pessoa: {{nome}}</h2>
        <Info :email="email"/>
        <Form />
    </div>
</template>

<script>
import Info from './Info.vue'
import Form from './form.vue';
export default {
    name: "Pessoa",
    components: { Info, Form },
    data() {
        return {
            nome: "Fulano",
            email: "fulano@email.com"
        };
    }
}
</script>