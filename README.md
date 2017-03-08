##项目必备
`node v6.9 以上`
`npm v3.10 以上`
在具备上述条件下，在cmd命令行中输入`npm install`

## 开发模式
在cmd命令行输入`npm start`启动项目,前往`http://localhost:4200/`.如果更改任何源代码文件,应用程序会自动重新加载,不用手动刷新!

## 打包发布版本
在cmd命令行输入`npm run build`打包项目, 生成工件将被存储在`dist`目录.

##文件介绍
根据文件后缀名可以分成一下种类
`ts` 写法类似JavaScript,是TypeScript为JavaScript的超集。
`html` 组件的HTML模版,就是常规理解的HTML
`css` 组件的样式文件,就是常规理解的CSS
`spec.ts` 组件的单元测试文件.一般不用管
`json` 一般用于存储数据

##目录结构
`src/app` 该目录是网站开发目录
`src/app/common` 用于放置公共服务文件,方便各组件调用
`src/app/footer` 网站的页尾组件
`src/app/header` 网站的页头组件
`src/app/about/, src/app/bbs/ ...` 都是二级链接组件
`src/assets` 这个文件夹下可以放图片等任何东西，在构建应用时，它们全都会拷贝到发布包中。
`src/favicon.ico` 用于更改网站tab标签页图标