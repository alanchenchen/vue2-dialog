<template>
	<div class="ActionSheet">
		<transition name="fade">
			<div v-if="actionSheet.isShow" @click="closeMask" class="Action_mask"></div>
		</transition>
		<transition name="animation">
			<div v-if="actionSheet.isShow" class="Action_wrap">
				<div 
					class="menu_cell" 
					v-for="item of actionSheet.menu"
					v-html="item.content"
					@click="reaction(item.label)"
					></div>
				<div v-if="cancelMode" @click="hide" class="menu_cell cancel">取消</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default{
	/**
	 * 使用：
	 * 1.必须传一个props:'actionSheet'，对象，包括：isShow，menu等键值
	 *   menu是一个数组,数组项必须是一个对象,必须有两个键值对,label和content。
	 *       1.label必须为字符串，当label为title时，表示是actionSheet的标题，此时不返回emit事件，
	 *         如果不为title，label的值就是返回的emit事件名称
	 *       2.content可以为字符串也可以是html标签，表示actionSheet每一项的内容。
	 * 	 isShow必须是布尔值
	 * 2.可选一个closeOnClickModal，布尔值，默认false，是否通过点击mask关闭弹窗
	 * 3.可选一个cancelMode，布尔值，默认false，是否显示'取消'菜单项
	 * 4.自定义cancel事件，只有在cancelMode为true才有效
	 *   表示当actionSheet组件点击'取消'菜单项的操作，组件本身会关闭弹窗然后传递给父组件事件
	 *   其余菜单项的自定义事件名称由menu中每个对象的label决定,例如：
	 * 		label:'del'，只需要在父组件上添加@del即可接受点击'del'菜单项返回的事件
	 * 
	 */
	name:'ActionSheet',
	props:{
		cancelMode:{
			type:Boolean,
			default:false
		},
		actionSheet:{
			type:Object,
			required:true
		},
		closeOnClickModal:{
			type:Boolean,
			default:false
		}
	},
	methods:{
		hide(){
			this.actionSheet.isShow = false;
			this.$emit('cancel')
		},
		closeMask(){
			if(this.closeOnClickModal){
				this.actionSheet.isShow = false
			}
		},
		reaction(name){
			if(name != 'title'){
				this.actionSheet.isShow = false;
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