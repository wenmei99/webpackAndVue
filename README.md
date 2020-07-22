一、初始化项目
1、初始化项目，生成一个package.json : mkdir webpack-vue && cd webpack-vue && npm init -y
2、创建一些必要的文件夹：mkdir src src/components dist build -p
3、创建入口文件index.js : touch ./src/index.js
4、在根目录下创建index.html文件。   <div id='app'></div>

二、安装webpack
1、npm i webpack webpack-cli  -D     这一步你可以看见你项目中多了一个node_modules文件夹，然后package.json中多了一个devDependencies属性

三、配置基本的webpack文件
cd ./build && touch webpack.dev.conf.js webpack.prod.conf.js webpack.base.conf.js build.js
webpack.prod.conf.js :生产环境使用的配置
webpack.dev.conf.js  :开发环境使用的配置
webpack.base.conf.js   :最基本的打包配置，开发环境和生产环境都要用到的打包配置
build.js: 通过node接口进行打包的脚步


npm scripts：
"build":"node build/build.js"
"dev":"webpack-dev-server --inline --progress --config build/wepback.dev.conf.js"


四、引入一些基础的loader
babel：一个工具链，用于加es2015+代码转化为当前和旧版浏览器或环境中向后兼容的js代码
1、babel-loader:
首先要安装babel-loader babel-preset-env babel-core.需要注意版本，参考webpack官网
npm i babel-loader@7 babel-preset-env babel-core -D
在rules里面添加相应的对象   babel-core是babel的核心代码

然后我们还需要添加一个.babelrc 在根目录下.这就是babel-preset-env的作用，帮助我们配置babel.我们需要告诉他我们需要兼容的情况，他会自动把代码转化为对应的环境所能兼容的代码

2、file-loader:用于将字体文件、图片文件模块化
npm i file-loader -D
在rules里添加相应的配置


3、vue-loader ： 为了使用vue页面，我们需要对.vue文件进行处理，所以需要vue-loader
首先应该安装vue-loader css-loader vue-template-compiler  vue-style-loader sass-loader  node-sass
style-loader 主要把css解析到html标签上
css-loader 用来解析css  
注意：css-loader要先于style-loader先执行，不然会报错
vue-template-compiler  编译渲染函数
使用postcss 的autoprefixe插件为我们的css代码自动添加前缀以适应不同的浏览器

npm i vue-loader css-loader style-loader vue-style-loader vue-template-compiler sass-loader node-sass -D
然后在rules中进行相应的配置

配置以后，vue-loader的配置和其他loader的配置不一样，还需要参考vue-loader官网，进行其他配置  https://vue-loader.vuejs.org/zh/guide/

然后配置解析模块
resolve.alias: 创建import 或require 的别名，来确保模块引入更加简单
resolve.extensions:尝试按照顺序解析这些后缀名，也方便我们引入依赖或者文件可以省略后缀名


一切准备就绪以后，开始验证vue组件是否可用
npm i vue --save


六、开启热更新
热更新：浏览器无刷新更新，（即webpack里的HMR-hot module replacement模块热替换）。允许在运行时添加、删除、替换各个模块。
无需进行完全刷新重载整个页面，适合开发环境，加快开发速度

热重载：开发阶段，如果文件每次变更后，都要手动去打包，很不方便。

现在devServe中配置hot为true,然后在开发环境的plugin中添加：new webpack.NamedModulesPlugin        
new webpack.HtModuleReplacementPlugin()
这两步开启了css的热更新，但是js的热更新还是不能用，所以我们还需要继续配置。在入口文件index.js中添加如下代码：
if(module.hot){
  module.hot.accept()
}

七、第三方库单独打包
每次我们打包的时候都会把第三方的库重新打包一次，但是这些库的代码基本不会变。我们没必要每次打包都构建一次。所以我们最好把这些第三方库提取出来单独打包
官方的插件是DllPlugin ，但是这个插件的配置比较繁琐。推荐：autodll-webpack-plugin
DllPlugin ： 查分bundles,大大的提供打包效率

八、提取共同代码
使用splitChunksPlugin插件

九、使用stylus预处理器
首先先下载stylus  和stylus-loader依赖
然后在module.rules中进行相应的配置
{
  test:/\.styl(us)$/,
  use:['vue-style-loader',css-loader','stylus-loader','postcss-loader']
}

接下来只要你在.vue 的style文件上加上lang='stylus',就可以使用stylusl来写css了

十、抽取css到单文件
使用mini-css-extract-plugin
这个插件提取css到一个特殊的文件中，它创建css文件对于每个含有css 的js文件，相当于分包css
首先安装：
npm i mini-css-extract-plugin  -D

然后在配置文件的头部引入：
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
new MiniCssExtractPlugin()


然后当你需要抽取css的时候（比如生产环境），就把原来的用到vue-style-loader替换为MiniCssExtractPlugin.loader,其他不动





















