const MyNameApp = {
    //propriedades e elementos usados no componente
    data() {
        return {
            name: "fulano",
            idade: 20,
            input_name: "",
            input_idade: ""
        }
    },
    //funções da aplicação
    methods: {
        submit(e){
            e.preventDefault();
            this.name = this.input_name
            this.idade = this.input_idade
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");