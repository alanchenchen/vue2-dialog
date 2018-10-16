## Alert
### props
> *value* `[Boolean]` usually use `v-model` to bind it

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` whether show the alert   |   No   |  false  |

> *data* `[Object]` the alert data

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| title       | `[String]` or `[HTML Tag]`   |   title of the alert   |
| content     | `[String]` or `[HTML Tag]`|   content of the alert    |
| alertBtn    | `[String]`|     alertBtn of the alert    |

*closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`whether close alert by clicking the mask modal   |   No   |  false  |

### emit events
* `ok ` when you click the alertBtn,the component will close. 

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
            console.log('I click the alertBtn~')
        }
    }
}
```
