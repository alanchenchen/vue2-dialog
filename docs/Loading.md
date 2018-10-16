## Loading
### props
| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `loading` | `[Boolean]`whether show the Loading   |   Yes   |  /  |

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
        //request for data
        this.$http.post('test/productDetail',{})
            .then(res => {
                //if the data has been loaded. make the loading false
                ...
                this.loading = false
            })
            .catch(err => {
                console.log(err)
            })
    }
}
```
