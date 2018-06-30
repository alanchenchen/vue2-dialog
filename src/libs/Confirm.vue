<template>
	<div class="confirm">
		<transition name="fade">
			<div v-if="confirm.isShow" class="confirm_mask" @click="closeMask"></div>
		</transition>
		<transition name="bounce">
			<div class="confirm-wrap" v-if="confirm.isShow">
				<div class="confirm-title" v-html="confirm.title"></div>
				<div class="confirm-content" v-html="confirm.content"></div>
				<div class="confirm-btn">
					<button @click="fail">{{confirm.cancelBtn}}</button>
					<button @click="ok">{{confirm.confirmBtn}}</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default{
	/**
	 * 使用：
	 * 1.必须传一个props:'confirm'，对象，包括：title，content，cancelBtn，confirmBtn和isShow等键值
	 *   title,content可以是html或者字符串，cancelBtn和confirmBtn必须是字符串,isShow必须是布尔值
	 * 2.可选一个closeOnClickModal，布尔值，默认false。是否通过点击mask关闭弹窗
	 * 3.自定义ok和cancel事件，表示当confirm组件点击确定按钮和取消按钮的操作，组件本身会关闭弹窗然后传递给父组件事件
	 */
	name:'Confirm',
	props:{
		confirm:{
			type:Object,
			required:true
		},
		closeOnClickModal:{
			type:Boolean,
			default:false
		}
	},
	methods:{
		ok(){
			this.$emit('ok');
			this.confirm.isShow = false;
		},
		closeMask(){
			if(this.closeOnClickModal){
				this.alert.isShow = false
			}
		},
		fail(){
			this.$emit('cancel');
			this.confirm.isShow = false;
		}
	}
}
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in .4s;
}
.bounce-leave-active {
  animation: bounce-in .4s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0) translate3d(-55%,-65%,0);
    opacity: 0;
  }
  50% {
    transform: scale(1.1)  translate3d(-45%,-60%,0);
    opacity: .8;
  }
  100% {
    transform: scale(1)  translate3d(-50%,-62%,0);
    opacity: 1;
  }
}
.fade-enter-active,.fade-leave-active {
	transition: all .4s;
}
.fade-enter,.fade-leave-to {
	opacity: 0;
}

.confirm_mask {
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, .6);
}
.confirm-wrap {
	position: fixed;
	top:50%;
	left: 50%;
	z-index: 10;
	transform: translate3d(-50%,-62%,0);
	width: 70%;
	max-height: 70%;
	background: #f8f8f8;
	border-radius: .12rem;
	box-sizing: border-box;
	color: #333;
}

.confirm-title {
	margin: .4rem auto .15rem;
	padding: 0 .3rem;
	width: 100%;
	max-height: 1rem;
	font-size: .4rem;
	font-weight: bold;
	overflow: hidden;
	box-sizing: border-box;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.confirm-content {
	padding: 0 .3rem .2rem;
	width: 100%;
	min-height: 1.6rem;
	max-height: 7rem;
	overflow: hidden;
	font-size: .35rem;
	box-sizing: border-box;
	text-align: center;
}

.confirm-btn {
	display: flex;
	justify-content: center;
	width: 100%;
}

.confirm-btn button:active {
	background: #ddd;
}

.confirm-btn button {
	flex-grow: 1;
	height: .8rem;
	font-size: .35rem;
	border-top: .01rem solid #ddd;
	background: #f8f8f8;
}

.confirm-btn button:nth-child(1){
	border-radius:0 0 0 .12rem;
	border-right: .01rem solid #ddd;
}
.confirm-btn button:nth-child(2){
	border-radius:0 0 .12rem 0; 
	color: #007aff;
}
</style>