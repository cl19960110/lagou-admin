const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  //简单创建 HTML 文件，用于服务器访问
const CopyPlugin = require('copy-webpack-plugin') //拷贝文件
const {CleanWebpackPlugin} = require('clean-webpack-plugin') //打包前删除之前的文件
module.exports = {
  //配置环境
  mode:'development',

  devtool:'source-map',

  //配置入口
  entry:{
    'js/app':'./src/app.js'
  },

  //配置出口
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'[name]-[hash:6].js'
  },

  module:{
    rules:[
      {
        test:/\.art$/,
        use:{
          loader:'art-template-loader'
        }
      },
      {
        test:/\.css$/,
        loaders:['style-loader','css-loader']
      }
    ]
  },

  //配置插件
  plugins:[
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'./public/index.html'),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: "./public/*.ico",
          to: path.join(__dirname,'./dist/favicon.ico')
        },
        {
          from: "./public/libs",
          to: path.join(__dirname,'./dist/libs')
        },
      ],
    }),
    new CleanWebpackPlugin()
  ],

  //配置server
  devServer:{
    contentBase: path.join(__dirname,'./dist'),
    compress: true,
    port: 8080
  }
}
