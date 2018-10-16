## ActionSheet
### props
> *value* `[Boolean]` usually use `v-model` to bind it

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]`whether show the ActionSheet   |   No   |  false  |

> *data* `[Array]`  items of ActionSheet, must has structures like `[{label: 'del', content: 'delete the data'}]`

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| content     | `[String]` |   content of the ActionSheet item  |
| label       | `[String | HTML Tag]`|  emit event name of the item while being clicked |

> *cancelMode* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `cancelMode` | `[Boolean]`whether show the cancel item   |   No   |  false  |

> *closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`whether close ActionSheet by clicking the mask modal   |   No   |  false  |


### emit events
* `cancel ` when you click the cancel item (make sure you turn on the cancelMode).
* Other emit events depends on  the label of menu(actionSheet).Such as :
```javascript
 actionSheet: {
    isShow: false,
    menu: [
        {label:'title',content:`<span style=color:blue>Sure？</span><br /><span style=color:#bbb;font-size:12px>You will delete the data...</span>`},
        {label:'remain',content:'No,i wanna remain'},
        {label:'del',content:`<p style=color:red>Yes,delete it!`}
    ]
	/*
	 * ActionSheet has 2 emit evnets like 'remain' and 'del'.Attention! The label 'title' won't return emit event!
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
                {label:'title',content:`<span style=color:blue>Sure？</span><br /><span style=color:#bbb;font-size:12px>You will delete the data...</span>`},
                {label:'remain',content:'No,i wanna remain'},
                {label:'del',content:`<p style=color:red>Yes,delete it!`}
            ]
        }
    },
    methods:{
        del(){
            console.log('I delete the data~')
        },
        remain(){
            console.log('I remain the data~')
        },
        cancel(){
            console.log('I click the cancel item~')
        }
    }
}
```