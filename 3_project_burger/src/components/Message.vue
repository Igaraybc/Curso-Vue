<template>
    <div class="message-container">
        {{ msg }} 
    </div>
</template>

<script>
export default {
    name: "message",
    props: {
        msg: String
    }
}
</script>

<style scoped>
    .message-container{
        color: #004085;
        background-color: #CCE5FF;

        border: 2px solid #B8Daff;
        border-radius: 5px;

        padding: 10px;
        max-width: 400px;
        margin: 30px auto;
    }
</style>