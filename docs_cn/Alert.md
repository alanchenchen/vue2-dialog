## Alert
### props
> *value* `[Boolean]` 通常使用 `v-model`来绑定变量

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` 是否显示Alert,在需要显示的时候让其为true即可   |   No   |  false  |

> *data* `[Object]` alert数据

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| title       | `[String]` or `[HTML Tag]`   |   Alert里显示的标题   |
| content     | `[String]` or `[HTML Tag]`|   Alert里显示的内容    |
| alertBtn    | `[String]`|     Alert里确认按钮的文字    |

*closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`是否通过点击遮罩层来关闭Alert   |   No   |  false  |

### emit events
* `ok ` 点击Alert的确认按钮自定义事件，Alert框会自动关闭. 

### DEMO Codes
```javascript
//template
<Alert 
    v-model="isShow"
    :data="alert" 
    closeOnClickModal 
    @ok="ok" 
/>

//script
export default {
    data(){
        return{
            isShow: false,
            data: {
                title:'tip',
                content:'Hello World!',
                alertBtn:'Happy',
            }
        }
    },
    methods:{
        ok(){
            console.log('我点击确认了~')
        }
    }
}
```
