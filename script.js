//localStorage.clear();
let app = new Vue({
    el: '#app',
    data: {
        users: JSON.parse(localStorage.getItem('users')) || [
            { name: 'Ivan', surname: 'Ivanov', phone: '+380349817492', email: 'Ivanov@mail.com' },
            { name: 'Petr', surname: 'Petrov', phone: '+380349543492', email: 'Petrov@mail.com' },
            { name: 'Sidor', surname: 'Sidorov', phone: '+380312817492', email: 'Sidorov@mail.com' },
            { name: 'Semen', surname: 'Semenov', phone: '+380349817443', email: 'Semenov@mail.com' },
            { name: 'Konstantin', surname: 'Konstantinov', phone: '+380349817491', email: 'Konstantinov@mail.com' },
            { name: 'Pavel', surname: 'Pavlov', phone: '+380349817412', email: 'Pavlov@mail.com' },
            { name: 'Evgeniy', surname: 'Jenkov', phone: '+380349817465', email: 'Jenkov@mail.com' },
            { name: 'Alexander', surname: 'Kartoshkin', phone: '+380349817445', email: 'Kartoshkin@mail.com' }
        ],
        newUser: { name: 'Name', surname: 'Surname', phone: 'Phone', email: 'Email' },
        pageFlag: true,
        JSONinput:''
    },
    methods: {
        userDelete(index) {
            const userIndex = index;
            this.users = this.users.filter((elem, index) => index != userIndex);
            localStorage.setItem('users', JSON.stringify(this.users));
        },
        pageChange() {
            this.pageFlag = !this.pageFlag;
            console.log(localStorage.getItem('users'));
            console.log(this.users);
        },
        addUser(e) {
            this.users = [].concat(this.newUser).concat(this.users);
            localStorage.setItem('users', JSON.stringify(this.users));
            console.log(localStorage.getItem('users'));

        },
        editUser() {
            this.users = [].concat(this.newUser).concat(this.users);
            localStorage.setItem('users', JSON.stringify(this.users));
        },
        JSONparse(){
            console.log(this.JSONinput);
            let newJSON = JSON.parse(this.JSONinput);
            this.users = [].concat(newJSON).concat(this.users);
            localStorage.setItem('users', JSON.stringify(this.users));
        }

    }
})