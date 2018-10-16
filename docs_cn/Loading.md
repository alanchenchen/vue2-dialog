## Loading
### props
| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `loading` | `[Boolean]`是否开启 Loading  |   Yes   |  /  |

### DEMO Codes
```javascript
//template
    <Loading :loading="loading" />

//script
export default {
    data(){
        return{
            loading:false
        }
    },
    created(){
        this.loading = true;
        // 请求数据
        this.$http.post('test/productDetail',{})
            .then(res => {
                // 如果数据加载完毕，就让loading消失
                ...
                this.loading = false
            })
            .catch(err => {
                console.log(err)
            })
    }
}
```
