<template>
    <div class="index-header">
        <div>
            <slider></slider>
        </div>
    </div>
</template>

<script>
    import slider from '../components/slider.vue';

    export default {
        components: {
            slider
        },
        layout: 'default'
    }
</script>

<style>
    .index-header{
        width: 100%;
        height: 400px !important;
    }
</style>