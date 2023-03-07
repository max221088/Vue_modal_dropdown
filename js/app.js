let API = 'https://pokeapi.co/api/v2/pokemon';
let pokemon = [];
const app = new Vue ({
    el: '#app',
    data: {
        title: "Hello World!!!",
        isRed: false,
        openDrop: false,
    },
    methods: {
        changeColor: function () {
            this.isRed = !this.isRed;
        },
        dropControler: function () {
            this.openDrop = !this.openDrop;
        }
    },
    created: function () {
        fetch(API)
            .then( function (responce) {
                return responce.json();
            })
            .then( function (data) {
                this.pokemon = data.results;
            }.bind(this));
    }
})