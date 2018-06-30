<template>
	<div class="alert">
		<transition name="fade">
			<div v-if="alert.isShow" class="alert_mask" @click="closeMask"></div>
		</transition>
		<transition name="bounce">
			<div class="alert-wrap" v-if="alert.isShow">
				<div class="alert-title" v-html="alert.title"></div>
				<div class="alert-content" v-html="alert.content"></div>
				<div class="alert-btn">
					<button @click="ok">{{alert.alertBtn}}</button>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
	export default {
		/**
		 * 使用：
		 * 1.必须传一个props:'alert'，对象，包括：title，content，alertBtn和isShow等键值,
		 *   title,content可以是html或者字符串，alertBtn必须是字符串,isShow必须是布尔值
		 * 2.可选一个closeOnClickModal，布尔值，默认false。是否通过点击mask关闭弹窗
		 * 3.自定义ok事件，表示当alert组件点击确定按钮的操作，组件本身会关闭弹窗然后传递给父组件事件
		 * 4.可选一个closeOnClickModal，布尔值，默认false，是否通过点击mask关闭弹窗
		 */
		name:'Alert',
		props: {
			alert: {
				type: Object,
				required: true,
			},
			closeOnClickModal:{
				type:Boolean,
				default:false
			}
		},
		methods: {
			ok() {
				this.alert.isShow = false;
				this.$emit('ok');
			},
			closeMask(){
				if(this.closeOnClickModal){
					this.alert.isShow = false
				}
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
.alert_mask {
	position: fixed;
	z-index: 3;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, .6);
}
.alert-wrap {
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

.alert-title {
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

.alert-content {
	padding: 0 .3rem .2rem;
	width: 100%;
	min-height: 1.6rem;
	max-height: 7rem;
	overflow: hidden;
	font-size: .35rem;
	box-sizing: border-box;
	text-align: center;
}

.alert-btn {
	display: flex;
	justify-content: center;
	width: 100%;
}

.alert-btn button:active {
	background: #ddd;
}

.alert-btn button {
	flex-grow: 1;
	height: .8rem;
	border-radius: .12rem;
	font-size: .35rem;
	border-top: .01rem solid #ddd;
	background: #f8f8f8;
	color: #007aff;
}
</style>