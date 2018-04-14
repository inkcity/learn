Vue.component('login',{
    template: `
        <div class="container">
            <form class="form-horizontal" method="post">
                <div class="form-group">
                    <label for="inputEmail3" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-4">
                        <input v-model='username' type="email" class="form-control" id="inputEmail3" name="username" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-lg-2 control-label">Password</label>
                    <div class="col-lg-4">
                        <input v-model='password' type="password" class="form-control" id="inputPassword3" name="password" placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-offset-2 col-lg-2">
                        <div class="checkbox">
                            <label>
                                <input type="checkbox"> Remember me
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-lg-offset-2 col-lg-2">
                        <button v-on:click='submit' type="button" class="btn btn-default">Sign in</button>
                    </div>
                </div>
            </form>
        </div>`,
    data: function() {
        return {
            username: '',
            password: ""
        };
    },
    methods: {
        submit: function() {
            axios.post('http://localhost:8080/Demo2/login', {
                username: this.username,
                password: this.password
            }).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
            })
        }
    }
})

new Vue({
    el: '#index'
})