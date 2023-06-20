<template>
    <div>
        <h2>Registro de usuário</h2>
        <hr>

        <div class="columns  is-centered">
            <div class="column is-half">
                <div v-if="error != undefined">
                    <div class="notification is-danger">
                <p>{{ error }}</p>
                </div>
                </div>
                <p>Nome</p>
                <input type="text" placeholder="Nome de usuário" class="input" v-model="name">
                <p>Email</p>
                <input type="text" placeholder="email@email.com" class="input"  v-model="email">
                <p>Senha</p>
                <input type="password" placeholder="******" class="input"  v-model="password">
                <hr>
                <button class="button is-primary" @click="register">Cadastrar</button>
                
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            name: '',
            email: '',
            password: '',
            error: undefined
        }
    },
    methods: {
        register(){
            axios.post("http://localhost:8080/user", {
                name: this.name,
                email: this.email,
                password: this.password,
            }).then(res => {
                console.log(res) 
                this.$router.push({name: 'home'})
            }).catch(err => {
                var msgErro = err.response.data.err
                this.error = msgErro
            })
        }
    }
}
</script>

<style scoped>
</style>