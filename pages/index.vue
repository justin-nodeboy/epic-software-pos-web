<template>
    <div class="container">
        <h1>Hello {{ name }}!</h1>
    </div>
</template>

<script>
    export default {
        layout: 'default',
        data: () => {
            return { name: 'Justin' }
        }
    }
</script>

<style>
    h1 {
        color: coral;
    }
</style>