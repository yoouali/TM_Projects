const app = Vue.createApp({
    data(){
        return {
            FirstName: 'youssef',
            LastName: 'ouali',
            EmailAddress: 'youssef1998ouali@gmail.com',
            Gender: 'male',
            Picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    }
})

app.mount('#app')