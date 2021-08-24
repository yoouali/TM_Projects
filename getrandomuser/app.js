const app = Vue.createApp({
    data(){
        return {
            FirstName: 'youssef',
            LastName: 'ouali',
            EmailAddress: 'youssef1998ouali@gmail.com',
            Gender: 'male',
            Picture: 'https://randomuser.me/api/portraits/men/75.jpg'
        }
    },
    methods: {
        async getuser(){
            const res = await fetch('https://randomuser.me/api/')

            const { results } = await res.json()

            console.log(results)
            this.FirstName = results[0].name.first,
            this.LastName = results[0].name.last,
            this.EmailAddress = results[0].email,
            this.Gender = results[0].gender,
            this.Picture = results[0].picture.large
        }
    }
})

app.mount('#app')