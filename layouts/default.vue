<template>
    <div>
        <div class="container pre-nav">
            <a href="/"><img src="/logo.png" /></a>
            <ul class="account-nav">
                <li><a href="/account">My Account</a></li>
                <li><a href="/cart"><i class="material-icons">shopping_cart</i> Cart</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
        <nav>
            <div class="container">
                <ul class="main-nav-ul">
                    <li><a href="/">Home</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/about">About Us</a></li>
                </ul>
            </div>
        </nav>
        <nuxt></nuxt>
    </div>
</template>

<style>
    nav {
        background-color: #AB82FF !important;
    }

    .pre-nav {
        width: 100%;
        background-color: #ffffff !important;
        position: relative;
        height: 100px;
    }

    .pre-nav a img {
        height: 50px;
        top: 25px;
        position: absolute;
    }

    .pre-nav .account-nav {
        position: absolute;
        width: 30%;
        list-style: none;
        bottom: -15px;
        right: 0;
        height: 50px;
    }

    .pre-nav .account-nav li {
        width: 33.3% !important;
        border-right: 1px solid #AB82FF;
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
        color: #AB82FF;
        vertical-align: middle;
    }

    .pre-nav .account-nav li i {
        position: relative;
        vertical-align: bottom;
    }

    .pre-nav .account-nav li a:hover {
        color: #8968CD;
    }

    .main-nav-ul li {
        text-transform: uppercase;
    }

</style>

