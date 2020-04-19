module.exports = {
  presets: ["@babel/preset-react", ["@babel/preset-env", { modules: false }]],
  plugins: [
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-class-properties",
    [
      "import",
      {
        libraryName: "antd",
        style: "css",
      },
    ],
  ],
  env: {
    development: {
      plugins: ["react-hot-loader/babel"],
    },
  },
};
