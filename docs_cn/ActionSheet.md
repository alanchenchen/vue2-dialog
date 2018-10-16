## ActionSheet
### props
> *value* `[Boolean]` 通常使用 `v-model`来绑定变量

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]`是否显示ActionSheet   |   No   |  false  |

> *data* `[Array]` ActionSheet的菜单项，必须要有label和content两个键名，比如 `[{label: 'del', content: 'delete the data'}]`

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| content     | `[String]` |   ActionSheet菜单项的内容  |
| label       | `[String | HTML Tag]`|  当菜单项被点击触发的事件名 |

> *cancelMode* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `cancelMode` | `[Boolean]`是否显示取消的菜单项   |   No   |  false  |

> *closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`是否通过点击遮罩层来关闭ActionSheet   |   No   |  false  |


### emit events
* `cancel ` 点击取消菜单项的自定义事件 (必须保证cancelMode为true).
* 其余自定义事件取决于menu的label的值，例如：
```javascript
 actionSheet: {
    isShow: false,
    menu: [
        {label:'title',content:`<span style=color:blue>确定咩？</span><br /><span style=color:#bbb;font-size:12px>删除后就没了...</span>`},
        {label:'remain',content:'我要保留'},
        {label:'del',content:`<p style=color:red>不了，删除`}
    ]
	/*
	 * ActionSheet有 2个自定义事件： 'remain' and 'del'。请注意! title不会返回自定义事件，因为title项不可点击！
	 */
}
```


### DEMO Codes
```javascript
//template
    <ActionSheet 
        v-model="isShow"
        :data="menu" 
        cancelMode 
        @del="del"
        @remain="remain"
        @cancel="cancel"
    />

//script
export default {
    data() {
        return{
            isShow: false,
            menu: [
                {label:'title',content:`<span style=color:blue>确定咩？</span><br /><span style=color:#bbb;font-size:12px>删除后就没了...</span>`},
                {label:'remain',content:'我要保留'},
                {label:'del',content:`<p style=color:red>不了，删除`}
            ]
        }
    },
    methods:{
        del(){
            console.log('我要删除~')
        },
        remain(){
            console.log('不，我要保留~')
        },
        cancel(){
            console.log('我取消了~')
        }
    }
}
```