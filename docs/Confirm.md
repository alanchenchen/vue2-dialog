## Confirm
### props
> *value* `[Boolean]` usually use `v-model` to bind it

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` whether show the confirm   |   No   |  false  |

> *data* `[Object]` the confirm data

| key         |            value                         |description|
|:-----------:|:----------------------------------------:|:------:|
| title       | `[String]` or `[HTML Tag]`   |   title of the Confirm   |
| content     | `[String]` or `[HTML Tag]`|   content of the Confirm    |
| cancelBtn    | `[String]`|     cancelBtn of the Confirm    |
| confirmBtn    | `[String]`|     confirmBtn of the Confirm    |

> *closeOnClickModal* `[Boolean]`

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `closeOnClickModal` | `[Boolean]`whether close Confirm by clicking the mask modal   |   No   |  false  |

#### emit events
* `ok ` when you click the confirmBtn,the component will close. 
* `cancel ` when you click the cancelBtn,the component will close.

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
                content:'Are you sure to close the window?'
                confirmBtn:'Yes,please',
                cancelBtn:"No,thanks"
            }
        }
    },
    methods:{
        ok(){
            console.log('I click the confirmBtn~')
        },
        cancel(){
            console.log('I click the cancelBtn~')
        }
    }
}
```