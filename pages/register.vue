<template>
    <div class="container">
        <div class="row">
            <nav class="nav-breadcrumb">
                <div class="nav-wrapper">
                    <div class="col s12">
                        <a href="/" class="breadcrumb">Home</a>
                        <a href="#!" class="breadcrumb">Register</a>
                    </div>
                </div>
            </nav>
            <div class="col s12">
                <h4 class="intro">Create an account</h4>
            </div>
            <div class="row">
                <div class="input-field col s6">
                    <input id="firstName" type="text" class="validate" v-model="firstName">
                    <label for="firstName">First Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="lastName" type="text" class="validate" v-model="lastName">
                    <label for="lastName">Last Name</label>
                </div>
                <div class="input-field col s6">
                    <input id="phone" type="tel" class="validate" v-model="phone">
                    <label for="phone">Phone</label>
                </div>
                <div class="input-field col s6">
                    <input id="email" type="email" class="validate" v-model="email">
                    <label for="email">Email</label>
                </div>
                <div class="input-field col s6">
                    <input id="username" type="text" class="validate" v-model="username">
                    <label for="username">Username</label>
                </div>
                <div class="input-field col s6">
                    <input id="password" type="password" class="validate" v-model="password">
                    <label for="password">Password</label>
                </div>
                <div class="col s12">
                    <a v-on:click="registerNewUser()" class="waves-effect waves-light btn">Register</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        layout: 'default',
        data: function () {
            return {
                firstName: "",
                lastName: "",
                username: "",
                password: "",
                phone: "",
                email: ""
            };
        },
        methods: {
            registerNewUser: function (){
                console.log("Hello");
                axios.post(`${process.env.baseUrl}/register`, {
                    phone: this.phone,
                    joinDate: new Date(),
                    firstName: this.firstName,
                    lastName: this.lastName,
                    fullName: `${this.firstName} ${this.lastName}`,
                    email: this.email,
                    password: this.password,
                    type: 1
                }).then(result => {
                        console.log(result);
                    }).catch(err => {
                        console.log(err.response.data);
                    })
            }
        }
    }
</script>

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

    input:not([type]), input[type=text], input[type=password], input[type=email], input[type=url], input[type=time], input[type=date], input[type=datetime], input[type=datetime-local], input[type=tel], input[type=number], input[type=search], textarea.materialize-textarea {
        border-bottom: 1px solid #AB82FF !important;
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
        color: #AB82FF;
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
        border-bottom: 1px solid #AB82FF;
        box-shadow: 0 1px 0 0 #AB82FF;
    }

    .btn {
        background-color: #AB82FF;
    }

    .waves-effect.waves-light {
        background-color: #AB82FF;
    }

    .btn:hover {
        background-color: #D15FEE;
    }

</style>