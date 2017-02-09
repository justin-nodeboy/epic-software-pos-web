<template>
    <div>
        <div class="pre-nav">
            <a href="/"><img src="/logo.png" /></a>
            <ul class="account-nav">
                <li><a href="/register">Register</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/cart"><i class="material-icons">shopping_cart</i> Cart</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <nav>

        </nav>
        <div class="index-header"></div>
        <nuxt></nuxt>
    </div>
</template>

<style>
    .index-header{
        width: 100%;
        height: 400px;
        background-image: url("/index-bg.jpg");
        overflow: hidden;
        background-size: cover;
    }

    nav {
        height: 50px !important;
        background-color: #ffffff;
    }

    .pre-nav {
        width: 100%;
        background-color: #FFB6C1;
        position: relative;
        height: 100px;
    }

    .pre-nav a img {
        height: 50px;
        left: 5%;
        top: 25px;
        position: absolute;
    }

    .pre-nav .account-nav {
        position: absolute;
        width: 50%;
        list-style: none;
        bottom: -15px;
        right: 0;
        height: 50px;
    }

    .pre-nav .account-nav li {
        width: 25% !important;
        border-right: 1px solid #ffffff;
        float: left;
        height: 70%;
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
    }

    .pre-nav .account-nav li:last-child {
        border-right: none;
    }

    .pre-nav .account-nav li a {
        color: #ffffff;
        vertical-align: middle;
    }

    .pre-nav .account-nav li i {
        position: relative;
        vertical-align: bottom;
    }
</style>

