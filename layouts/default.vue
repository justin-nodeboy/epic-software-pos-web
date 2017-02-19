<template>
    <div>
        <header>
            <div class="container">
                <div class="row">
                    <div class="col s12 m12 l7">
                        <a class="logo" href="/"><img src="/logo.png" /></a>
                    </div>
                    <div class="col s12 m12 l5">
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
        </header>
        <main>
            <nuxt></nuxt>
        </main>
        <footer class="page-footer">
            <div class="container">
                <div class="row">
                    <div class="col l6 s12">
                        <h5 class="white-text">Footer Content</h5>
                        <p class="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                    </div>
                    <div class="col l4 offset-l2 s12">
                        <h5 class="white-text">Links</h5>
                        <ul>
                            <li><a class="grey-text text-lighten-3" href="/">Home</a></li>
                            <li><a class="grey-text text-lighten-3" href="/products">Products</a></li>
                            <li><a class="grey-text text-lighten-3" href="/services">Services</a></li>
                            <li><a class="grey-text text-lighten-3" href="/about">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <div class="container">
                    © 2017 Epic Software Solutions Ltd
                </div>
            </div>
        </footer>
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

    footer {
        background-color: #AB82FF !important;
    }

</style>

