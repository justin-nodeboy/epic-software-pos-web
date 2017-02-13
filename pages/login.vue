<template>
    <div class="container">
        <div class="row">
            <nav class="nav-breadcrumb">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="/" class="breadcrumb">Home</a>
                        <a href="#!" class="breadcrumb">Account</a>
                    </div>
                </div>
            </nav>
            <div class="col s12">
                <h4 class="intro">Login or Create an account</h4>
            </div>
            <div class="row">
                <div class="col s12 m12 l6 account-border">
                    <div class="card deep-purple lighten-4 custom-skin">
                        <div class="card-content white-text">
                            <span class="card-title">New to us?</span>
                            <p>Fill in our simple registration form and you could have an account setup in minutes.
                                Register to save time at checkout and to receive special discounts.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Register now</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 m12 l6 account-border">
                    <div class="card deep-purple lighten-4 custom-skin">
                        <div class="card-content white-text">
                            <span class="card-title">Card Title</span>
                            <p>I am a very simple card. I am good at containing small bits of information.
                                I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">This is a link</a>
                            <a href="#">This is a link</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
    .nav-breadcrumb {
        margin-top: 30px !important;
        background-color: #9E9E9E !important;
    }

    .intro {
        text-align: center;
        margin-top: 50px;
        color: #AB82FF;
    }

    .account-border {
        margin-top: 30px;
    }

    .deep-purple.lighten-4.custom-skin {
        background-color: #AB82FF !important;
    }

    .card .card-action a:not(.btn):not(.btn-large):not(.btn-large):not(.btn-floating) {
        color: #ffffff;
        margin-right: 24px;
        transition: color .3s ease;
        text-transform: uppercase;
    }
</style>
<script>

</script>
