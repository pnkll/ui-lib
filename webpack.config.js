const path = require('path')

module.exports = {
    entry: "./src/index.js",
    mode: "production",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        libraryTarget: "umd",
        library: "ui-lib",
        globalObject: 'this'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.jsx?$/,
                use: ["babel-loader"],
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    externals: {
        react: "react"
    }
}