<template>
    <form @submit="enviarForm($event)">
        <input type="text" v-model="name">
        <input type="text" v-model="email">
        <Submit />
    </form>    
</template>

<script>
    import InputText from './Form/InputText.vue'
    import Submit from './Form/Submit.vue'

    export default{
        name: "Form",
        components: {
    InputText,
    Submit
    },
    data(){
        return {
            name: "",
            email: ""
        };
    },
    methods:{
        enviarForm(evento){
            evento.preventDefault();
            console.log(this.name, this.email)
            console.log("Form enviado")
        },
    }
    }
</script>
