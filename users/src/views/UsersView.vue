<template>
    <div>
        <h1>Painel adm</h1>
        <div v-for="user in users" :key="user.id">
            <p>User</p>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default{
    created(){
        var req = {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }

        axios.get("http://localhost:8081/user", req).then(res => {
            console.log(res)
            this.users = req.data
        }).catch(err => {
            console.log(err)
        })
    },

    data(){
        return{
            users: [

            ]
        }
    }
}
</script>
 
<style scoped>
</style>