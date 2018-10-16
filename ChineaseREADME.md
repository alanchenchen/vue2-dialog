# vue2-dialog
> A mobile Vue plugin for Dialog

> pluginName:  vue2-dialog

> version: 1.1.0

> author:	Alan Chen

> github:	alanchenchen@github.com

> date:	2018/10/15

#### 此插件只适配了移动端，必须使用rem布局，否则在某些组件中会无法使用。有问题请直接提issue.

## 插件能做什么
* 你可以用插件来做`Alert`,`Confirm`,`ActionSheet(类似微信的上拉通知栏)`,`Toast`等弹窗组件，也可以使用插件内置的`CascadingPicker(三级联动选择器)`,`Loading(全屏loading动画)` and `Scroller(集成上拉加载，下拉刷新和嵌到滚动多种功能)`

![dialog](./dialog.gif)

## 使用方法
* 通过NPM下载安装插件
```node
	yarn add vue2-dialog or npm install vue2-dialog --save
```

#### 1.在vue单文件里使用(vue-cli)
* 通过import或者require 导入插件,手动调用Vue.use() ,全局调用(直接加载所有的组件)

``` javascript 
import VueDialog from 'vue2-dialog'
import 'vue2-dialog/dist/VueDialog.css'

Vue.use(VueDialog)
```

* 通过import或者require 导入插件,手动调用Vue.component() ,按需加载(只会加载你需要的组件)

``` javascript 
import { Scroller, Alert, Confirm } from 'vue2-dialog'
import 'vue2-dialog/dist/VueDialog.css'

Vue.component(Scroller.name, Scroller)
Vue.component(Alert.name, Alert)
Vue.component(Confirm.name, Confirm)
```

#### 2.在script标签里使用
* 直接在script标签里通过src引入，但你必须先引入vuejs的script  

``` html 
<link href="node_modules/vue2-dialog/dist/VueDialog.css"></link>
<script src="node_modules/vue2-dialog/dist/VueDialog.js"></script>
```

* 直接在vue单文件组件里使用或者在html里使用组件

``` html 
<Alert />
<Confirm />
<Toast />
<Scroller />
...
```

## Components Docs
* [Alert](./docs_cn/Alert.md)
* [Confirm](./docs_cn/Confirm.md)
* [ActionSheet](./docs_cn/ActionSheet.md)
* [Toast](./docs_cn/Toast.md)
* [Loading](./docs_cn/Loading.md)
* `CascadingPicker`  **请前往[CascadingPicker](https://github.com/alanchenchen/CascadingPicker) 查看详细用法.**
* `Scroller`  **请前往 [v-scroller](https://github.com/alanchenchen/v-scroller) 查看详细用法.**