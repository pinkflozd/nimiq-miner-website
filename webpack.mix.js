let mix = require('laravel-mix');

mix.webpackConfig({  
    module: {
        rules: [{
            test: /\.svg$/,
            use: [{ loader: 'html-loader' }]
        }]
    }
});

mix
    .js('./src/main.js','./docs/app.js')
    .sass('./src/main.sass','./docs/app.css')
    .copy('./src/index.html','./docs/index.html')
    .copyDirectory('./src/img', './docs/img')
    .copy('./benchmarks/edit-me.json',"./docs/benchmarks.json")
    .options({
        processCssUrls: false,
        uglify: true,
    })
    .sourceMaps();