var path = require( "path" );

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "app.js",
        path: path.resolve( __dirname, "dist" )
    },
    module: {
        rules: [ {
            test: /\.css$/,
            use: "style-loader!css-loader!sass-loader"
        }, {
            test: /\.js|jsx$/,
            exclude: /node_modules/,
            use: [ {
                loader: "babel-loader",
                options: {
                    presets: [ [ "react" ], [ "es2015", { modules: false } ] ],
                    plugins: []
                }
            } ]
        } ]
    },
    resolve: {
        modules: [
            path.join( __dirname, "src" ),
            "node_modules"
        ],
        extensions: [ ".js", ".jsx" ],
        alias: {
            components: path.resolve( "src/components/" ),
            actions: path.resolve( "src/actions/" ),
            reducers: path.resolve( "src/reducers/" )
        }
    },
    devServer: {
        contentBase: path.join( __dirname, "" ),
        compress: true,
        port: 8080
    }
}