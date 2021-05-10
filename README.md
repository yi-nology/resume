# resume 超级简历1。0

该项目采用vue 目前版本为github版本
访问地址：

0.[访问跳转连接](https://yi-nology.github.io/resume/#/info)

1.[示例用户w](https://yi-nology.github.io/resume/#/preview/w)

2.[示例用户wangxiaowu](https://yi-nology.github.io/resume/#/preview/w)
   
    https://yi-nology.github.io/resume/#/preview/wangxiaowu
后端项目为beego https://github.com/yi-nology/resume-go

如需更改请改 src下 api resume.ts 文件 
### 功能前端
    1.前端完成简单跳转
    2.根据人名跳转到指定人物信息
    3.创建二维码
### 功能后端
    1. 完成简历CURD
    2. 二维码创建
    3. 技能树 工作树 等单独CURD

```access transformers

// 后端为真实
// export function getInfoByKeyword(data: any): any {
//     return request({
//         url: getUri() + 'getInfoByKeyword',
//         method: 'get',
//         params: data
//     })
// }

export function getInfoByKeyword(data: any): any {
    const {keyword} = data
    return request({
        url: getUri() + 'getInfoByKeyword'+"%3Fkeyword%3D"+keyword,
        method: 'get',
        // params: data
    })
}

// 后端为真实
// export function createQrcode(data: any): any {
//     return request({
//         url: getUri() + 'createQrcode',
//         method: 'post',
//         data
//     })
// }
// 后端为github
export function createQrcode(data: any): any {
    return request({
        url: getUri() + 'createQrcode',
        method: 'get'
    })
}
```

## 项目启动
```
yarn install


#Compiles and hot-reloads for development

yarn serve


# Compiles and minifies for production

yarn build


# Lints and fixes files

yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
