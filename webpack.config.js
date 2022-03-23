const path = require("path");
const entryPath = ".";

module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: "./" + path.join(entryPath, "js/app.js"),
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, path.join(entryPath, "build")),
        publicPath: "/build",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
    devServer: {
        port: 3000,
        static: {
            directory: path.resolve(__dirname, entryPath),
        },
        compress: true,
    },
};