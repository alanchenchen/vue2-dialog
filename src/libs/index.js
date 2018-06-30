/*
 *document:
 * 	pluginName:  VueDialog
 * 	version: 1.0.0
 * 	author:	Alan Chen
 * 	github:	alanchenchen@github.com
 * 	date:	2017/12/13
 * */
import Scroller from './Scroller.vue'
import ActionSheet from './ActionSheet.vue'
import AddressPicker from './AddressPicker.vue'
import Alert from './Alert.vue'
import Confirm from './Confirm.vue'
import Loading from './Loading.vue'
import Toast from './Toast.vue'

const templates = [Scroller,ActionSheet,AddressPicker,Alert,Confirm,Loading,Toast]
const VueDialog = {
	install(Vue,opt){
		templates.forEach(item => {
			Vue.component(item.name,item)
		})
	}
}
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(VueDialog); 
}

export {
	VueDialog,
	Scroller,
	ActionSheet,
	AddressPicker,
	Alert,
	Confirm,
	Loading,
	Toast
}