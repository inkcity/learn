new Vue({
    el: '#index',
    data: {
            username: '',
            password: '',
            seen: true
    },
    methods: {
        submit: function() {
            var params = new URLSearchParams();
            params.append('username', this.username);
            params.append('password', this.password)
            var vm = this
            axios.post('http://localhost:8080/demo/login', params
            ).then(function (response) {
                vm.seen = !response.data.msg;
            }).catch(function (error) {
                console.log(error);
            });
        }
    }
})