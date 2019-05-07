new Vue({
    el: '#desafio',
    data: {
        nome: 'Mario de Moraes Barros Neto',
        idade: 30,
        imagem: 'https://dotsconnected.files.wordpress.com/2010/07/macaco_vt.jpg'
    },
    methods: {
        idadeTres: function() {
            return this.idade * 3;
        },
        numeroAleatorio: function() {
            return Math.random();
        }
    },
})