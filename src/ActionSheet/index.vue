<template>
	<div class="ActionSheet">
		<transition name="fade">
			<div v-if="value" @click="closeMask" class="Action_mask"></div>
		</transition>
		<transition name="animation">
			<div v-if="value" class="Action_wrap">
				<div 
					class="menu_cell" 
					v-for="menu of data"
					v-html="menu.content"
					@click="reaction(menu.label)"
					></div>
				<div v-if="cancelMode" @click="hide" class="menu_cell cancel">取消</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	/**
	* comoponent: ActionSheet 上拉窗提示
	* author： Alan Chen
	* contact：739709491@qq.com
	* lastDate: 2018/10/15
	* 使用：
	*	props: 
	*  		1. value， 布尔值，控制上拉窗显示与否,可以使用v-model绑定变量，默认为false
	*		2. data，数组，上拉窗显示内容，数组项必须为Object。包括：label和content键值。
	*				* label必须为字符串，当label为title时，表示是actionSheet的标题，此时不返回emit事件。如果不为title，label的值就是返回的emit事件名称
	*				* content可以为字符串也可以是html标签，表示actionSheet每一项的内容。
	*		3. closeOnClickModal，布尔值。是否能够点击遮罩层来关闭，默认为false
	*		4. cancelMode，布尔值，默认false，是否显示'取消'菜单项
	*	emit events：
	*		1. 自定义事件，其余菜单项的自定义事件名称由data中每个对象的label决定。
	* 				* 例如：label:'del'，只需要在父组件上添加@del即可接受点击'del'菜单项返回的事件
	*		2. cancel，只有当cancelMode为true时点击取消的菜单项才出发，无参数返回值
	*/
	name:'ActionSheet',
	props: {
		value: {
			type: Boolean,
			default: false
		},
		data: {
			type: Array,
			required: true
		},
		cancelMode: {
			type: Boolean,
			default: false
		},
		closeOnClickModal: {
			type: Boolean,
			default: false
		}
	},
	methods: {
		hide() {
			this.$emit('input', false)
			this.$emit('cancel')
		},
		closeMask() {
			if(this.closeOnClickModal) {
				this.$emit('input', false)
			}
		},
		reaction(name) {
			if(name != 'title'){
				this.$emit('input', false)
				this.$emit(name)
			}
		}
	}
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active {
	transition: all .35s;
}
.fade-enter,.fade-leave-to {
	opacity: 0;
}
.animation-enter-active,.animation-leave-active {
	transition: all .35s;
}
.animation-enter,.animation-leave-to {
	transform: translate3d(0,100%,0);
}

.Action_mask {
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, .7);
}
.Action_wrap {
	position: fixed;
	left: 0;
	bottom:0;
	z-index: 100;
	width: 100%;
	background: #fff;
	box-sizing: border-box;
}
.menu_cell{
    padding: .22rem 0;
    text-align: center;
    font-size: .35rem;
    color: #000;
    border-top: .04rem solid #EFEFF4;
}
.cancel{
	border-top: .12rem solid #EFEFF4;
}
</style>