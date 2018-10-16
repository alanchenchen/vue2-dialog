## Confirm
### props
> *value* `[Boolean]` 通常使用 `v-model`来绑定变量

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` 是否显示Confirm,在需要显示的时候让其为true即可   |   No   |  false  |

> *data* `[Object]` confirm数据

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| title       | `[String]` or `[HTML Tag]`   |   Confirm里的标题   |
| content     | `[String]` or `[HTML Tag]`|   Confirm里的内容    |
| cancelBtn    | `[String]`|     Confirm里取消按钮的文字    |
| confirmBtn    | `[String]`|     Confirm里确认按钮的文字    |

> *closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`是否通过点击遮罩层来关闭Confirm   |   No   |  false  |

#### emit events
* `ok ` 点击Confirm的确认按钮自定义事件，Confirm框会自动关闭. 
* `cancel ` 点击Confirm的取消按钮自定义事件，Confirm框会自动关闭. 

#### DEMO Codes
```javascript
//template
<Confirm 
    v-model="isShow"
    :data="confirm" :
    closeOnClickModal
    @ok="ok" 
    @cancel="cancel" 
/>

//script
export default {
    data(){
        return{
            isShow:false,
            confirm:{
                title:'tip',
                content:'确定要关闭浏览器嘛?'
                confirmBtn:'确定',
                cancelBtn:"取消"
            }
        }
    },
    methods:{
        ok(){
            console.log('我关闭了~')
        },
        cancel(){
            console.log('我取消了~')
        }
    }
}
```