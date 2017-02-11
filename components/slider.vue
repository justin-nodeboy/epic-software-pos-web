<template>
    <div id="slick">
        <div class="div-img" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg')"></div>
        <div class="div-img" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg')"></div>
        <div class="div-img" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg')"></div>
        <div class="div-img" style="background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg')"></div>
    </div>
</template>
<script>
    import jquery from 'jquery';

    export default{
        mounted: function () {
           setTimeout(() => {
                const slick = require("slick-carousel");
                jquery('#slick').slick({
                  dots: true,
                  speed: 500
                });
            }, 0);
        }
    }
</script>

<style rel="stylesheet">

    .slick-slide {
        width: 100%;
        height:600px;
    }

    .div-img{
        width: 100%;
        height: 500px;
        overflow: hidden;
        background-size: cover;
    }


</style>
