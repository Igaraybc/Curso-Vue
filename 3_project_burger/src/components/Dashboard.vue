<template>
    <div id="burger-table">
        <message :msg="msg" v-show="msg"/>
        <div>
            <div id="burger-table-header">
                <div class="order-id">#:</div>
                <div>Cliente: </div>
                <div>Pão: </div>
                <div>Carne: </div>
                <div>Opcionais: </div>
                <div>Ações: </div>
            </div>
        </div>
        <div id="burger-table-rows">
            <div class="burger-table-row" v-for="pedido in listBurgers" :key="pedido.id">
                <div class="order-number">{{pedido.id}}</div>
                <div>{{pedido.nome}}</div>
                <div>{{pedido.pao}}</div>
                <div>{{pedido.carne}}</div>
                <div>
                    <ul>
                        <li v-for="(opcional, index) in pedido.opcionais" :key="index">{{opcional}}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="statusChange($event, pedido.id)">
                        <option value="">Selecione</option>
                        <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="pedido.status == s.tipo">{{s.tipo}}</option>
                    </select>
                    <button class="delete-btn" @click="deleteBurger(pedido.id)">Cancelar</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Message from './Message.vue';
export default {
  components: { Message },
    name: 'Dashboard',
    data() {
        return {
            listBurgers: [],
            status: [],
            msg: null
        }
    },
    methods: {
        async getBurgers(){
            const req = await fetch('http://localhost:3000/burgers');
            const data = await req.json();
            this.listBurgers = data;

            this.getStatus();
        },
        async getStatus(){
            const req = await fetch('http://localhost:3000/status');
            const data = await req.json();
            this.status = data;
        },
        async statusChange(evento, id){
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status:  evento.target.value})
            })
            const res = await req.json();

            this.msg = `O pedido N° ${res.id} foi atualizado para ${res.status}`

            setTimeout(() => this.msg = '', 3000)

        },
        async deleteBurger(id){
            const req = await fetch(`http://localhost:3000/burgers/${id}`, {method: 'DELETE'})
            const res = await req.json();

            this.msg = 'Pedido removido com sucesso!'

            setTimeout(() => this.msg = '', 3000)

            this.getBurgers();
        }
    },
    mounted(){
        this.getBurgers()
    }

}
</script>

<style scoped>
    #burger-table{
        max-width: 1200px;
        margin: 0 auto;
    }

    #burger-table-header,
    #burger-table-rows,
    .burger-table-row{
        display: flex;
        flex-wrap: wrap;
    }

    #burger-table-header{
        font-weight: bold;
        padding: 12px;
        border-bottom: 2px solid #333;
    }

    #burger-table-header div,
    .burger-table-row div{
        width: 19%;
    }

    .burger-table-row{
        width: 100%;
        padding: 12px;
        border-bottom: 1px solid #CCC;
    }

    .burger-table-row .order-number,
    #burger-table-header .order-id{
        width: 5%;
    }

    select{
        padding: 12px 6px;
        margin-right: 12px;
    }

    .delete-btn{
        background-color: #222;
        color: #FCBA03;
        font-weight: bold;
        border: 2px solid #222;
        padding:10px;
        font-size: 16px;
        margin: 0 auto;
        cursor: pointer;
        transition: .5s;
    }

    .delete-btn:hover{
        background-color: transparent;
        color: #222;
    }
</style>