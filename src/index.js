/**
 * @name VueDialog
 * @description 集成Scroller、ActionSheet、CascadingPicker、Alert、Confirm、Loading和Toast的vue插件
 * @version 1.1.0
 * @author Alan Chen
 *  */

import Scroller from './Scroller/index.vue'
import ActionSheet from './ActionSheet/index.vue'
import CascadingPicker from './CascadingPicker/index.vue'
import Alert from './Alert/index.vue'
import Confirm from './Confirm/index.vue'
import Loading from './Loading/index.vue'
import Toast from './Toast/index.vue'

const compoList = [Scroller, ActionSheet, CascadingPicker, Alert, Confirm, Loading, Toast]
const VueDialog = {
	install(Vue, opt) {
		compoList.forEach(item => {
			Vue.component(item.name, item)
		})
	}
}

export default VueDialog

export {
	Scroller,
	ActionSheet,
	CascadingPicker,
	Alert,
	Confirm,
	Loading,
	Toast
}