一、编辑器的配置：.editorconfig
包括了缩进方式等
# https://editorconfig.org/
root : true
[*]
charset = utf-8
indent_style = space
indext_size = 3
end_of_line = 1f
insert_final_newline = true


二、git的忽略文件配置：.gitignore
这里的配置决定了哪些文件会被git版本控制忽略
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.
.DS_Store
node_modules/
/dist/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/test/unit/coverage/

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln


三、eslint的配置：.eslintrc.js .eslintignore.js
(复习后补充)

四、PostCss 配置：postcss.config.js
这个文件自动生成，里面的内容就是指定autoprefixer兼容配置
module.exports = {
  plugins:[
    require('autoprefixer')
  ]
}

五、babel配置：babel.config.js
主要是配置Babel的plugins、presets和parse等








