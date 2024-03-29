const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require("path");
 
module.exports = {
   entry: "./src/app.js",
   output: {
       path: path.resolve(__dirname, "dist"),
       filename: "bundle.js"
   },
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                        loader: "style-loader"
                   },
                   {
                        loader: "css-loader"
                    }
           ]
       },
       {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader"
            }
        ]
    }

   ]
},
plugins: [
   new HtmlWebpackPlugin({
       template: "./src/index.html",
       filename: "index.html"
   }),
   new CopyWebpackPlugin({
    patterns: [
        {
            from: path.resolve(__dirname, 'src/Assets'),
            to: path.resolve(__dirname, 'dist/Assets')
        }
    ]
})
]
}