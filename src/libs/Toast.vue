<template>
	<transition @after-enter="hide" :name="animation">
		<div v-if="toast.isShow" class="toast" :class="animation">
			<!--success-->
			<svg v-if="toast.type=='success'" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" version="1.1"><path fill="#fff" d="M70.311 551.238c-8.019-8.299-8.851-22.741-2.049-31.995l24.478-33.307c6.887-9.372 20.021-11.181 29.2-4.147l209.93 160.9c9.239 7.082 23.949 6.807 32.899-0.649l538.68-448.764c8.93-7.439 22.834-6.888 31.266 1.438l19.228 18.989c8.337 8.234 8.339 21.558 0.066 29.7L363.612 824.442c-8.301 8.17-21.695 7.893-29.549-0.235L70.311 551.238z"/></svg>
			<!--fail-->
			<svg v-else-if="toast.type=='fail'" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" version="1.1"><path fill="#eee" d="M512 73.841778c-240.981333 0-437.788444 197.518222-437.788444 438.499555 0 240.327111 196.778667 437.845333 437.788444 437.845334 240.981333 0 437.788444-197.489778 437.788444-437.845334C949.788444 271.36 752.981333 73.841778 512 73.841778z m0 821.418666c-211.029333 0-383.601778-172.515556-383.601778-382.919111 0-211.057778 172.572444-383.573333 383.601778-383.573333 211.057778 0 383.601778 172.515556 383.601778 383.573333 0 210.375111-172.544 382.919111-383.601778 382.919111z m-159.004444-467.768888c33.507556 0 60.586667-27.079111 60.586666-59.875556a60.586667 60.586667 0 0 0-60.586666-60.615111c-32.796444 0-60.586667 27.107556-60.586667 60.615111 2.844444 32.796444 27.790222 59.875556 60.586667 59.875556z m315.164444-120.490667a60.558222 60.558222 0 0 0-60.615111 60.615111c0 32.796444 27.079111 59.875556 60.615111 59.875556 32.796444 0 60.586667-27.079111 60.586667-59.875556a60.984889 60.984889 0 0 0-60.586667-60.615111zM512 575.118222c-134.030222 0-196.778667 93.383111-211.029333 142.592-5.717333 13.568 2.844444 29.952 19.228444 32.796445h7.850667c11.406222 0 22.812444-7.822222 27.790222-19.256889 0-5.717333 32.796444-104.078222 158.976-104.078222 125.496889 0 158.293333 98.360889 158.293333 104.078222 2.844444 11.406222 14.250667 19.256889 27.847111 19.256889h7.822223c14.250667-5.660444 22.101333-19.256889 19.939555-32.796445-22.812444-46.307556-85.532444-142.592-216.718222-142.592z"/></svg>
			<!--warn-->
			<svg v-else-if="toast.type=='warn'" xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 1024 1024" version="1.1"><path fill="#eee" d="M512 947C272.1 947 77 751.9 77 512S272.1 77 512 77s435 195.1 435 435-195.1 435-435 435z m0-822.5c-213.7 0-387.5 173.8-387.5 387.5S298.3 899.5 512 899.5 899.5 725.7 899.5 512 725.7 124.5 512 124.5zM347.2 424.9l34.6-34.6c7.3-7.9 7.1-20.2-0.6-27.9-7.6-7.6-19.9-7.9-27.9-0.6l-34.6 34.6-34.6-34.6c-7.9-7.9-20.6-7.9-28.4 0-7.9 7.9-7.8 20.6 0 28.4l34.6 34.6-34.6 34.6c-5.8 5.7-7.5 14.4-4.4 21.9 3.1 7.5 10.5 12.4 18.6 12.4 5.1 0 10.3-2 14.2-5.9l34.6-34.6 34.6 34.6c3.9 3.9 9.1 5.9 14.2 5.9 8.2 0 15.5-4.9 18.6-12.4 3.1-7.5 1.4-16.2-4.4-21.9l-34.5-34.5zM733.7 424.9l34.6-34.6c7.8-7.9 7.8-20.6 0-28.4-7.9-7.8-20.6-7.8-28.4 0l-34.6 34.6-34.6-34.6c-8-7.2-20.2-6.9-27.8 0.7-7.6 7.6-7.9 19.8-0.6 27.8l34.6 34.6-34.6 34.6c-5.8 5.7-7.5 14.4-4.4 21.9 3.1 7.5 10.5 12.4 18.6 12.4 5.3 0 10.4-2.1 14.2-5.9l34.6-34.6 34.6 34.6c3.9 3.9 9.1 5.9 14.2 5.9 8.1 0 15.5-4.9 18.6-12.4 3.1-7.5 1.4-16.2-4.4-21.9l-34.6-34.7zM367.3 726.6c-5 0-10-1.9-13.9-5.6l-36.2-34.6c-5.2-5-7.3-12.3-5.6-19.3 1.7-7 7-12.5 13.9-14.5s14.3-0.2 19.5 4.8l22.3 21.3 58.5-55.9c7.8-7.5 20-7.5 27.8 0l58.4 55.9 58.5-55.9c7.8-7.4 20-7.4 27.8 0l58.5 55.9 22.3-21.3c5.2-5 12.6-6.8 19.5-4.8s12.2 7.6 13.9 14.5c1.7 7-0.5 14.3-5.7 19.3L670.6 721c-7.8 7.4-20 7.4-27.8 0l-58.5-55.9-58.5 55.9c-7.8 7.4-20 7.4-27.8 0l-58.4-55.9-58.4 55.9c-3.8 3.6-8.8 5.6-13.9 5.6z"/></svg>
			<!--mini-loading-->
			<!--loading-circle-->
			<svg :class="{mini:toast.type=='mini-loading'}" 
				v-else-if="toast.type=='loading-circle' || toast.type=='mini-loading'" 
				class="icon loading" 
				version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"><path fill="#000" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"><animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1s" repeatCount="indefinite"/></path>
			</svg>
			<!--loading-ball-->
			<svg v-else-if="toast.type=='loading-ball'" class="icon loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 135 135" style="&#10;&#10;"><path d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z" transform="rotate(-259.701 67 67)"><animateTransform attributeName="transform" type="rotate" from="0 67 67" to="-360 67 67" dur="2.5s" repeatCount="indefinite"/></path><path d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z" transform="rotate(351.156 67.0003 67.0003)"><animateTransform attributeName="transform" type="rotate" from="0 67 67" to="360 67 67" dur="8s" repeatCount="indefinite"/></path></svg>
			<!--loading-wave-->
			<svg v-else-if="toast.type=='loading-wave'" class="icon loading" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" stroke="#fff"><g fill="none" fill-rule="evenodd" transform="translate(1 1)" stroke-width="2"><circle cx="22" cy="22" r="21.106" stroke-opacity="0"><animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="13.106" stroke-opacity="0"><animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear" repeatCount="indefinite"/><animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear" repeatCount="indefinite"/></circle><circle cx="22" cy="22" r="5.3295"><animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear" repeatCount="indefinite"/></circle></g></svg>
			<div class="words" v-html="toast.content"></div>
		</div>
	</transition>
</template>

<script>
export default{
	/**
	 * 使用：
	 * 必须传一个props:'toast'，对象，包含所有的toast参数
	 * toast对象包含content,isShow,time和type四个属性
	 * 	1. time,可选,数字,默认500ms,控制toast停留的时间，单位是毫秒
	 * 	2. type,可选,字符串,默认default,控制toast显示的方式
	 * 			 有middle,top，bottom，default,success,fail,warn和text，和loading状态
	 * 			 text为显示长文本
	 *           success,fail和warn表示成功、失败和警告三种状态
	 * 			 loading有四种状态，分别是loading-circle，loading-ball，loading-wave和mini-loading(loading在左侧)
	 * 	3. isShow,必选,布尔值,控制toast显示与否
	 * 	4. content,可选,字符串，html或者文字，显示在toast里的内容
	 * 注意：
	 * toast组件为了只关注组件本身的逻辑，所以对于非loading的情况，会自动关闭。对于loading，则只需要开发者自行调用
	 * toast.isShow = false即可关闭。
	 */
	name:'Toast',
	props:{
		toast:{
			type:Object,
			required:true
		}
	},
	computed:{
		animation(){
			const type = this.toast.type;
			if(!type || type=='success'|| type=='fail'|| type=='warn' || type.indexOf('loading')==0){
				return 'default'
			}
			else{
				return type
			}
		}
	},
	methods:{
		hide(){
			const interval = this.toast.time || 500 
			if(!this.toast.type || this.toast.type.indexOf('loading') < 0){
				setTimeout(()=>this.toast.isShow = false,interval)
			}
		}
	}
}
</script>

<style scoped>
.toast{
	position: fixed;
	z-index: 1000;
	left: 50%;
	margin-left: -4em;
	width: 8em;
	font-size: .35rem;
	border-radius: .1rem;
	background: rgba(17, 17, 17, 0.7);
	color: #fff;
	padding: .25rem;
	box-sizing: border-box;
}
.words{
	overflow: hidden;
}
.icon{
	width:1.5rem !important;
	height:1.5rem !important;
}
.loading path{
	fill:#fff;
}

/*top*/
.top{
	top:10%;
}
.top-enter-active,.top-leave-active  {
  transition: all .3s ease;
}
.top-enter, .top-leave-to {
  opacity: 0;
  transform: translateY(-130%);
}
/*middle*/
.middle{
	top: 50%;
	transform: translateY(-50%);
}
.middle-enter-active,.middle-leave-active  {
  transition: all .4s ease;
}
.middle-enter, .middle-leave-to {
  opacity: 0;
}
/*bottom*/
.bottom{
	bottom:10%;
}
.bottom-enter-active,.bottom-leave-active  {
  transition: all .3s ease;
}
.bottom-enter, .bottom-leave-to {
  opacity: 0;
  transform: translateY(130%);
}
/*default*/
.default{
	top: 30%;
}
.default-enter-active,.default-leave-active  {
  transition: opacity .4s ease;
}
.default-enter, .default-leave-to {
  opacity: 0;
}
/*text*/
.text{
	top: 30%;
	width: 18em !important;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin-left: -9em !important;
}
.text-enter-active,.text-leave-active  {
  transition: opacity .4s ease;
}
.text-enter, .text-leave-to {
  opacity: 0;
}
/*mini-loading*/
.mini-loading{
	display: -webkit-box;
	-moz-box-pack: justify;
	width:fit-content !important;
	top: 40%;
	transform: translateX(-50%) !important;
	margin: 0 !important;
}
.mini{
	width:.5rem !important;
	height:.5rem !important;
	margin-right: .1rem;
}
</style>