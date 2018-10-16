## Toast

![toast](../toast.gif)

### props
> *value* `[Boolean]` usually use `v-model` to bind it

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` whether show the Toast   |   No   |  false  |

> *data* `[Object]`

| key         |            value                         |description| required | default |
|:-----------:|:----------------------------------------:|:---------:|:--------:|:-------:|
| time       | `[Number]`  |control the time of the Toast | No | 500 |
| type     | `[String]`| how to show Toast,has 12 types | No | default |
| content    | `[String]` or `[HTML Tag]`|     content of the Toast    | Yes | / |

`type`

| type name |           description                       |
|:---------:|:-----------------------------------------:|
|    top    | slide from the top |
|    bottom | slide from the bottom |
|    default    | show on the window of 30% |
|    middle    | show on the window of 50% |
|    succes    | show with success icon |
|    fail    | show with fail icon |
|    warn    | show with warn icon |
|    text    | show with lots of words |
|    loading-circle    | show with a circle loading |
|    loading-ball    | show with a ball loading |
|    loading-wave    | show with a wave loading |
|    mini-loading    | show with a mini loading |

### DEMO Codes
```javascript
//template
<Toast
    v-model="isShow"
    :data="toast" 
/>

//script
/* not loading mode */
export default {
    data(){
        return{
            isShow: true,
            toast: {
                time:2000,
                content:'you succeed it!',
                type:'top'
            }
        }
    }
}
/* loading mode */
export default {
    data(){
        return{
            isShow: true,
            toast: {
                content:'waiting to delete...',
                type:'mini-loading'
            }
        }
    },
    methods: {
        // for loading mode, you have to turn the value to false !
        delete() {
            this.isShow = false
        }
    }
}
```