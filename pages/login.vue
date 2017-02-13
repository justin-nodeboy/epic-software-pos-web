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
                    <div class="card small deep-purple lighten-4 custom-skin">
                        <div class="card-content white-text">
                            <span class="card-title">New to us?</span>
                            <p>Fill in our simple registration form and you could have an account setup in minutes.
                                Register to save time at checkout and to receive special discounts.</p><br>
                            <p>We send out our products by first class, order by 3pm to ensure your order is dispatched same day.</p><br>
                            <p>We look forward to selling you all the things.</p>
                        </div>
                        <div class="card-action">
                            <a href="#">Register now</a>
                        </div>
                    </div>
                </div>
                <div class="col s12 m12 l6 account-border">
                    <div class="card small deep-purple lighten-4 custom-skin">
                        <form class="card-content white-text">
                            <span class="card-title">Already have an account?</span>
                            <div class="row">
                                <div class="input-field col s12">
                                    <input id="username" type="text" class="validate white-text">
                                    <label for="username">Username</label>
                                </div>
                                <div class="input-field col s12">
                                    <input id="password" type="password" class="validate white-text">
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </form>
                        <div class="card-action">
                            <a href="#">Login</a>
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

    input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {
        border-bottom: 1px solid #ffffff !important;
    }

    input:not([type]).validate+label, input[type=text].validate+label, input[type=password].validate+label, input[type=email].validate+label, input[type=url].validate+label, input[type=time].validate+label, input[type=date].validate+label, input[type=datetime].validate+label, input[type=datetime-local].validate+label, input[type=tel].validate+label, input[type=number].validate+label, input[type=search].validate+label, textarea.materialize-textarea.validate+label {
        color: white;
    }

    input:not([type]):focus:not([readonly]) + label,
    input[type=text]:focus:not([readonly]) + label,
    input[type=password]:focus:not([readonly]) + label,
    input[type=email]:focus:not([readonly]) + label,
    input[type=url]:focus:not([readonly]) + label,
    input[type=time]:focus:not([readonly]) + label,
    input[type=date]:focus:not([readonly]) + label,
    input[type=datetime]:focus:not([readonly]) + label,
    input[type=datetime-local]:focus:not([readonly]) + label,
    input[type=tel]:focus:not([readonly]) + label,
    input[type=number]:focus:not([readonly]) + label,
    input[type=search]:focus:not([readonly]) + label,
    textarea.materialize-textarea:focus:not([readonly]) + label {
        color: #ffffff;
    }

    input:not([type]):focus:not([readonly]),
    input[type=text]:focus:not([readonly]),
    input[type=password]:focus:not([readonly]),
    input[type=email]:focus:not([readonly]),
    input[type=url]:focus:not([readonly]),
    input[type=time]:focus:not([readonly]),
    input[type=date]:focus:not([readonly]),
    input[type=datetime]:focus:not([readonly]),
    input[type=datetime-local]:focus:not([readonly]),
    input[type=tel]:focus:not([readonly]),
    input[type=number]:focus:not([readonly]),
    input[type=search]:focus:not([readonly]),
    textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid #ffffff;
        box-shadow: 0 1px 0 0 #ffffff;
    }

</style>
<script>

</script>
