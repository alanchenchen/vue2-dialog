# vue2-dialog

![](https://img.shields.io/npm/v/vue2-dialog.svg)
![](https://img.shields.io/npm/dt/vue2-dialog.svg)
![](https://img.shields.io/github/license/alanchenchen/vue2-dialog.svg)

> A mobile Vue plugin for Dialog

> pluginName:  vue2-dialog

> version: 1.1.0

> author:	Alan Chen

> github:	alanchenchen@github.com

> date:	2018/10/15

#### This plugin is just only adapted for mobile.Please use the rem layout

> Please go to the release to see version logs.

## What you can do with the plugin
* You can use it to make several kinds of dialog components such as `Alert`,`Confirm`,`ActionSheet`,`Toast`.And you can also use the components like `CascadingPicker`,`Loading` and `Scroller`

![dialog](./dialog.gif) 

[中文文档](./ChineaseREADME.md)
## How to use
* NPM install the vue2-dialog plugin
```node
	yarn add vue2-dialog or npm install vue2-dialog --save
```

#### 1.vue spa
* import the plugin and use **(global use)**

``` javascript 
import VueDialog from 'vue2-dialog'
import 'vue2-dialog/dist/VueDialog.css'

Vue.use(VueDialog)
```

* import some components that you need and use **(local use)**

``` javascript 
import { Scroller, Alert, Confirm } from 'vue2-dialog'
import 'vue2-dialog/dist/VueDialog.css'

Vue.component(Scroller.name, Scroller)
Vue.component(Alert.name, Alert)
Vue.component(Confirm.name, Confirm)
```

#### 2.script html
* directly write the script,in deed you have to `insert the vue.js` script firstly  

``` html 
<link href="node_modules/vue2-dialog/dist/VueDialog.css"></link>
<script src="node_modules/vue2-dialog/dist/VueDialog.js"></script>
```

* use the components directly in your vue spa file or the Vue instance ,like

``` html 
<Alert />
<Confirm />
<Toast />
<Scroller />
...
```

## Components Docs
* [Alert](./docs/Alert.md)
* [Confirm](./docs/Confirm.md)
* [ActionSheet](./docs/ActionSheet.md)
* [Toast](./docs/Toast.md)
* [Loading](./docs/Loading.md)
* `CascadingPicker`  **Please go the [CascadingPicker](https://github.com/alanchenchen/CascadingPicker) to see the details.**
* `Scroller`  **Please go the [v-scroller](https://github.com/alanchenchen/v-scroller) to see the details.**
