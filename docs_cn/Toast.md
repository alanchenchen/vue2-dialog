## Toast

![toast](../toast.gif)

### props
> *value* `[Boolean]` 通常使用 `v-model`来绑定变量

| prop name  |      description                         |required| default |
|:-----------:|:----------------------------------------:|:------:|:-------:|
| `value` | `[Boolean]` 是否显示Toast   |   No   |  false  |

> *data* `[Object]`

| key         |            value                         |description| required | default |
|:-----------:|:----------------------------------------:|:---------:|:--------:|:-------:|
| time       | `[Number]`  |控制Toast显示的时间 | No | 500 |
| type     | `[String]`| Toast显示的类型,有12种类型(见type) | No | default |
| content    | `[String]` or `[HTML Tag]`|     Toast显示的内容    | Yes | / |

`type`

| type name |           description                       |
|:---------:|:-----------------------------------------:|
|    top    | 从顶部滑入 |
|    bottom | 从底部滑入 |
|    default    | 显示在窗体的30%位置 |
|    middle    | 显示在窗体的50%位置 |
|    succes    | 伴有成功样式图标 |
|    fail    | 伴有失败样式图标 |
|    warn    | 伴有警告样式图标 |
|    text    | 显示长文本专用 |
|    loading-circle    | 显示圆圈样式的loading |
|    loading-ball    | 显示小球环绕样式的loading |
|    loading-wave    | 显示波纹样式的loading |
|    mini-loading    | 显示mini样式的loading，loading在左侧，文字在右侧 |

### DEMO Codes
```javascript
//template
<Toast
    v-model="isShow"
    :data="toast" 
/>

//script
/* 非loading状态 */
export default {
    data(){
        return{
            isShow: true,
            toast: {
                time:2000,
                content:'成功!',
                type:'top'
            }
        }
    }
}
/* loading状态 */
export default {
    data(){
        return{
            isShow: true,
            toast: {
                content:'等待删除...',
                type:'mini-loading'
            }
        }
    },
    methods: {
        // 对于非loading状态，你必须手动将value变为false !
        delete() {
            this.isShow = false
        }
    }
}
```