import * as path from "path";
import * as webpack from "webpack";

// eslint-disable-next-line import/no-default-export
export default ({ mode }): webpack.Configuration => {
    return {
        mode: mode,
        entry: path.join(__dirname, "./api/src/index.ts"),
        target: "node",
        resolve: {
            extensions: [".ts", ".js"],
        },
        optimization: {
            minimize: true,
        },
        output: {
            path: path.join(__dirname, "./dist"),
            filename: "api.js",
        },
        module: {
            rules: [
                {
                    test: /\.(ts|js)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-typescript"],
                            plugins: ["@babel/plugin-proposal-class-properties"],
                        },
                    },
                },
                {
                    test: /\.ts$/,
                    loader: "ts-loader",
                },
            ],
        },
        plugins: [
            new webpack.ContextReplacementPlugin(
                // fixes WARNING Critical dependency: the request of a dependency is an expression
                /(.+)?express(\\|\/)(.+)?/,
                path.join(__dirname, "src"),
                {},
            ),
        ],
    };
};
