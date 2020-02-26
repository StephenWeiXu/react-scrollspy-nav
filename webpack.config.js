const path = require('path'),
    WebpackShellPlugin = require("webpack-shell-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
        filename: "index.html"
    }),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    extractSass = new ExtractTextPlugin({
        filename: "style.css"
    });

module.exports = {
    entry: {
        app: [
            path.join(__dirname, "./src/index.js"),
            path.join(__dirname, "./src/scss/app.scss")
        ],
        ScrollspyNav: [
            path.join(__dirname, "./src/lib/ScrollspyNav.js")
        ]
    },
    output: {
       path: path.join(__dirname, "dist"),
       filename: "[name].js",
       libraryTarget: 'umd'
    },
    devtool: process.env.NODE_ENV === "production" ? "#hidden-source-map" : "#inline-source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: [
                    path.resolve(__dirname, 'src'),
                ],                
                use: "babel-loader",
                exclude: /(node_modules)/,
            },
            {
                test: /\.s?css$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            sassOptions: {
                                outputStyle: 'compressed',
                            },
                        }
                    }],
                    fallback: "style-loader"
                })
            },
            {
                test: /\.md$/,
                loader: "raw-loader",
                options: {}
            }
        ]
    },
    plugins: [
        extractSass,
        htmlWebpackPlugin,
        new WebpackShellPlugin({
            onBuildStart:[
                "echo \033[1;33mMoving files into dist/\033[0m",
                "mkdir -p dist",
                "cp -R markdown dist/"
            ]
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            'node_modules',
            path.join(__dirname, 'src'),
        ],
    },
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        port: 3001
    }
};
