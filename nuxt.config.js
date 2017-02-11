module.exports = {
    css: [
        // Load a node.js module
        'materialize-css/dist/css/materialize.min.css'
    ],
    head: {
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' }
        ],
        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins' },
            { rel: 'stylesheet', href: '/style.css' },
            { rel: 'stylesheet', href: '/slick.css' },
            { rel: 'stylesheet', href: '/slick-theme.css' }
        ]
    },
    env: {
        baseUrl: process.env.BASE_URL || 'http://localhost:3000'
    },
    build: {
        vendor: ['jquery','slick-carousel']
    }
};