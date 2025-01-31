const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { rspack } = require("@rspack/core");

const isProduction = process.env.NODE_ENV === "production";

/** @type {import('@rspack/core').Configuration} */
module.exports = {
    entry: "./src/index.js",
    context: __dirname,
    output: {
        uniqueName: "app",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src"),
                use: {
                    loader: "builtin:swc-loader",
                    options: {
                        jsc: {
                            parser: {
                                syntax: "ecmascript",
                                jsx: true,
                            },
                            transform: {
                                react: {
                                    runtime: "automatic",
                                    refresh: !isProduction,
                                },
                            },
                        },
                    },
                },
            },
        ],
    },
    watch: true,
    cache: true,
    experiments: {
        cache: {
            type: "persistent",
            buildDependencies: [
                __filename,
                path.join(__dirname, "./package.json"),
            ],
        },
    },
    optimization: {
        runtimeChunk: {
            name: "runtime",
        },
        splitChunks: {
            cacheGroups: {
                vendors: {
                    name: "vendors",
                    test: /node_modules/,
                    chunks: "all",
                    enforce: true,
                },
            },
        },
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new rspack.container.ModuleFederationPlugin({
            shared: {
                react: {
                    requiredVersion: "^19.0.0",
                    version: "19.0.0",
                    singleton: true,
                    eager: true,
                },
                "react-dom": {
                    requiredVersion: "^19.0.0",
                    version: "19.0.0",
                    singleton: true,
                    eager: true,
                },
            },
        }),
    ],
};
