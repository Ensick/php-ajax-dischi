var app = new Vue({
    el: '#app',
    data: {

        dataBase: []
    },
    mounted() {

        axios.get('http://localhost/php-ajax-dischi/SecondaVersione/api').then((res) =>{

            this.dataBase = res.data

            console.log(this.dataBase)
        })
    },
    beforeUpdate() {

    },
    methods: {

    }
})