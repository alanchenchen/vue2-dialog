<template>
	<div class="loading" v-if="loading">
		<div class="loading-wrap">
			<span v-for="index of 5"></span>
		</div>
	</div>
</template>

<script>
export default {
	/**
	* comoponent: loading全屏加载
	* author： Alan Chen
	* contact：739709491@qq.com
	* lastDate: 2018/10/15
	* 使用：
	*	props: 
	*  		1. loading 布尔值，控制loading显示与否，默认为false
	*/
	name:'Loading',
	props: {
		loading: {
			type:Boolean,
			default: false
		}
	}
}
</script>

<style scoped>
.loading{
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 10;
	background: #fff;
}
.loading-wrap{
	position: absolute;
	width: 100%;
	top:40%;
}
.loading span{
	display: inline-block;
	width: .3rem;
	height: .3rem;
	border-radius: 50%;
	background: red;
	margin-right: .1rem;
	animation: rotate 1s ease-in-out infinite;
}
.loading span:nth-child(1){
	animation-delay: .2s;
}
.loading span:nth-child(2){
	animation-delay: .4s;
}
.loading span:nth-child(3){
	animation-delay: .6s;
}
.loading span:nth-child(4){
	animation-delay: .8s;
}
.loading span:nth-child(5){
	animation-delay: 1s;
}
@keyframes rotate{
	0%{transform: scale(.6);}
	25%{transform: scale(1);}
	50%{transform: scale(1.8);}
	75%{transform: scale(1);}
	100%{transform: scale(.6);}
}
</style>