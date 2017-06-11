var path = require('path');

module.exports = {
    entry : "./src/index.ts",
    output : {
        path : __dirname + "/build",
        filename : 'bundle.js'
    },
    // Awesome typescript loader stores errors in webpack stats
    // Print full error
    stats : {
        colors : true,
        modules : true,
        reasons : true,
        errorDetails : true
    },
    resolve : {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions : [".ts", ".tsx", ".js"]
    },

    module : {
        rules : [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test : /\.tsx?$/,
                loader : "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce : "pre",
                test : /\.js$/,
                loader : "source-map-loader"
            },
            {
                test : /\.ts$/,
                enforce : 'pre',
                loader : 'tslint-loader',
                options : { /* Loader options go here */ }
            }
        ],
    },
    plugins : []
};
