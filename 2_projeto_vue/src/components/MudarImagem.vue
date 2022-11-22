<template>
    <div>
        <!-- Com esse click queremos emitir um evento para isso utilizaremos o $emit-->
        <button @click="$emit('mudarImagem')">Trocar imagem do perfil</button>
    </div>
</template>

<script>
export default {
    name: "MudarImagem",
    emits: ['mudarImagem']

}
</script>