const path = require('path'),
    webpack = require('webpack'),
    WebpackShellPluginNext = require("webpack-shell-plugin-next"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    htmlWebpackPlugin = new HtmlWebpackPlugin({
        template: path.join(__dirname, "src/index.html"),
        filename: "index.html"
    })

module.exports = {
    entry: {
        app: [
            path.join(__dirname, "./src/index.js")
        ],
        ScrollspyNav: [
            path.join(__dirname, "./src/lib/ScrollspyNav.js")
        ]
    },
    output: {
       path: path.join(__dirname, "dist"),
       filename: "[name].js",
       libraryTarget: 'umd',
       globalObject: 'this'
    },
    devtool: "hidden-source-map",
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
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
                test: /\.md$/,
                loader: "raw-loader",
                options: {}
            }
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        new webpack.ProvidePlugin({
             process: 'process/browser',
        }),
        new WebpackShellPluginNext({
            onBuildStart:{
                scripts: [
                    "echo Moving files into dist folder",
                    "mkdir -p dist",
                    "cp -R markdown dist/"
                ]
            }
        })
    ],
    resolve: {
        extensions: [".js", ".jsx"],
        modules: [
            'node_modules',
            path.join(__dirname, 'src'),
        ],
        fallback: {
            "path": false
        }
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 3000
    }
};
