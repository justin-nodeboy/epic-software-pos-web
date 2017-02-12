<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col s12 m12 l8">
                    <a class="logo" href="/"><img src="/logo.png" /></a>
                </div>
                <div class="col s12 m12 l4">
                    <ul class="account-nav">
                        <li v-if="isLoggedIn"><a href="/account">My Account</a></li>
                        <li v-if="!isLoggedIn"><a href="/login">Login/Register</a></li>
                        <li><a href="/cart"><i class="material-icons">shopping_cart</i> Cart</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </div>
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

<script>
    const currentUser = {};

    export default {
        props: {
            currentUser: currentUser
        },
        beforeMount: function (){
            if (this.currentUser){
                this.isLoggedIn = this.currentUser.token ? true: false;
            }
        },
        data: function(){
            return {
                isLoggedIn: false,
            }
        }
    }

</script>

<style>
    nav {
        background-color: #AB82FF !important;
    }

    .logo {
        height: 50px;
    }

    .account-nav {
        list-style: none;
        height: 50px;
    }

    .account-nav li {
        width: 33.3% !important;
        border-right: 1px solid #AB82FF;
        height: 70%;
        justify-content: center;
        text-align: center;
        align-items: center;
        display: flex;
        float: left;
    }

    .account-nav li:last-child {
        border-right: none;
    }

    .account-nav li a {
        color: #AB82FF;
        vertical-align: middle;
    }

    .account-nav li i {
        position: relative;
        vertical-align: bottom;
    }

    .account-nav li a:hover {
        color: #8968CD;
    }

    .main-nav-ul li {
        text-transform: uppercase;
    }
</style>

