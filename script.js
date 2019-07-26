const users = [
    { name: 'Ivan', surname: 'Ivanov', phone: '+380349817492', email: 'Ivanov@mail.com' },
    { name: 'Petr', surname: 'Petrov', phone: '+380349543492', email: 'Petrov@mail.com' },
    { name: 'Sidor', surname: 'Sidorov', phone: '+380312817492', email: 'Sidorov@mail.com' },
    { name: 'Semen', surname: 'Semenov', phone: '+380349817443', email: 'Semenov@mail.com' },
    { name: 'Konstantin', surname: 'Konstantinov', phone: '+380349817491', email: 'Konstantinov@mail.com' },
    { name: 'Pavel', surname: 'Pavlov', phone: '+380349817412', email: 'Pavlov@mail.com' },
    { name: 'Evgeniy', surname: 'Jenkov', phone: '+380349817465', email: 'Jenkov@mail.com' },
    { name: 'Alexander', surname: 'Kartoshkin', phone: '+380349817445', email: 'Kartoshkin@mail.com' }
];
    

let app = new Vue({
    el: '#app',
    data: {
        users: (JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : users),
        newUser: { name: '', surname: '', phone: '', email: '' },
        pageFlag: true,
        JSONinput: ''
    },
    methods: {
        deleteUser(index) {
            const userIndex = index;
            this.users = this.users.filter((elem, index) => index != userIndex);
            localStorage.setItem('users', JSON.stringify(this.users));
        },
        pageChange() {
            this.pageFlag = !this.pageFlag;
            console.log(localStorage.getItem('users'));
        },
        addUser(e) {
            if (this.newUser.name && this.newUser.phone && this.newUser.surname && this.newUser.email) {
                this.users = [].concat(this.newUser).concat(this.users);
                localStorage.setItem('users', JSON.stringify(this.users));
                this.newUser = { name: '', surname: '', phone: '', email: '' };
            }
            else alert('All fields required!')

        },
        editUser() {
            localStorage.setItem('users', JSON.stringify(this.users));
            alert('Data Changed')
        },
        JSONparse() {
            const regexp = new RegExp('\[\{.*\:\{.*\:.*\}\}\]','g');

            if (regexp.test(this.JSONinput)) {
                let newJSON = JSON.parse(this.JSONinput);
                this.users = [].concat(newJSON).concat(this.users);
                localStorage.setItem('users', JSON.stringify(this.users));
            }
            else alert('It`s not a JSON object');
        }


    }
})