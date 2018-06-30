<template>
	<div ref="container" class="_container">
		<div ref="content" @touchstart="start" @touchmove="move" @touchend="end" :class="{horizonalMode:horizonalMode}" class="_content" :style="{transition:transition,transform:translate}">
			<!--下拉刷新容器只有在垂直滑动，开启下拉刷新才出现-->	
			<div ref="down" v-if="!horizonalMode&&isDownFresh" class="downfresh fresh">
				<div v-if="!downfresh">
					<svg :class="{arrow_active:-y>=downY}" data-v-ecaca2b0="" viewBox="0 0 63.657 63.657" xml:space="preserve" class="arrow"><g><g><g><g><polygon points="31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832" fill="#AAA"></polygon></g></g> <g><g><rect x="29.827" width="4" height="60" fill="#AAA"></rect></g></g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g></svg>
					<p>下拉刷新</p>
				</div>
				<slot v-else name="downrefresh">
					<svg class="spinner" viewBox="0 0 64 64">
				        <g stroke-width="7" stroke-linecap="round"><line x1="10" x2="10" y1="27.3836" y2="36.4931"><animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate></line><line x1="24" x2="24" y1="18.6164" y2="45.3836"><animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate></line><line x1="38" x2="38" y1="16.1233" y2="47.8767"><animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate></line><line x1="52" x2="52" y1="16" y2="48"><animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate><animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate><animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate></line></g>
					</svg>
				</slot>
			</div>
			<!--上拉加载容器只有在垂直滑动,开启上拉加载才出现-->	
			<div ref="up" v-if="!horizonalMode&&isUpLoad" class="upload fresh">
				<slot v-if="!loadFinish&&upload" name="upload">
					<svg class="spinner" viewBox="0 0 64 64">
					 	<g><circle cx="16" cy="32" stroke-width="0" r="3"><animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate></circle><circle cx="32" cy="32" stroke-width="0" r="3.09351"><animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate></circle><circle cx="48" cy="32" stroke-width="0" r="4.09351"><animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate><animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate></circle></g>
					 </svg>
				</slot>
				<slot v-else-if="loadFinish" name="nomore">
					<div class="nomore">没有更多内容了</div>
				</slot>
			</div>
			<slot></slot>
		</div>
		<!--待完成的侧边栏滚动条-->
		<!--<div class="_scrollBar"></div>-->
	</div>
</template>

<script>
export default{
	name:'Scroller',
	props:{
		//选择回弹力度大的模式
		snapping:{
			type:Boolean,
			default:false
		},
		//是否开启下拉刷新
		isDownFresh:{
			type:Boolean,
			default:false
		},
		//是否开启上拉加载
		isUpLoad:{
			type:Boolean,
			default:false
		},
		//选择惯性滑动模式
		smooth:{
			type:Boolean,
			default:true
		},
		//选择水平滑动模式同时禁止垂直滑动
		horizonalMode:{
			type:Boolean,
			default:false
		}
	},
	data(){
		return {
			startTime:0,
			miniTime:350,
			translateX:0,
			translateY:0,
			transition:'',
			startX:0,
			startY:0,
			downY:0,
			upY:0,
			maxX:0,
			posi:{x:0,y:0},
			damping:4,
			x:0,
			y:0,
			downfresh:false,
			upload:false,
			loadFinish:false,
			isVertical:null,
			isHorizonal:null
		}
	},
	mounted(){
		this.translateX = `translate3d(0,0,0)`;
		this.translateY = `translate3d(0,0,0)`;
	},
	updated(){
		this.$nextTick(()=>{
			const maxH = Number.parseFloat(getComputedStyle(this.$refs.content)['height']);
			this.upY = maxH - Number.parseFloat(getComputedStyle(this.$refs.container)['height']);
			if(this.upY<0)this.upY=0;
			if(!this.horizonalMode&&this.isDownFresh ){
				this.downY = Number.parseFloat(getComputedStyle(this.$refs.down)['height']);
			}
			else if(!this.horizonalMode&&this.isUpLoad){
				this.downY = Number.parseFloat(getComputedStyle(this.$refs.up)['height']);
			}
			const maxW = Number.parseFloat(getComputedStyle(this.$refs.content)['width']);
			this.maxX = maxW - Number.parseFloat(getComputedStyle(this.$refs.container)['width']);
		})
	},
	computed:{
		translate(){
			return this.horizonalMode?this.translateX:this.translateY
		}
	},
	methods:{
		start(e){
			this.startTime = new Date().getTime();
			this.startX = e.touches[0].clientX;
			this.startY = e.touches[0].clientY;
			this.$emit('beforeScroll')
		},
		move(e){
			let moveX = e.changedTouches[0].clientX - this.startX;
			let moveY = e.changedTouches[0].clientY - this.startY;
			this.transition = 'all 0s';
			if(!this.horizonalMode&&!this.isVertical){
				this.isVertical = {flag:Math.abs(moveY)*2>Math.abs(moveX)};
			}
			if(this.horizonalMode&&!this.isHorizonal){
				this.isHorizonal = {flag:Math.abs(moveX)>Math.abs(moveY)*1.5};
			}
			if(!this.horizonalMode&&this.isVertical.flag){
				let movingY = this.posi.y+moveY;
				let borderH = this.isUpLoad?-this.upY - this.downY:-this.upY;
				let flag = this.isUpLoad?this.loadFinish:true;
				if(movingY>=0){
					var slowMoveY = 0+movingY/this.damping; 
				}
				else if(flag&&movingY<=borderH){
					var slowMoveY = borderH+(movingY - borderH)/this.damping;
				}
				if((movingY>=0) || (flag&&movingY<=borderH)){
					this.translateY = `translate3d(0,${slowMoveY}px,0)`;
				}
				else{
					this.translateY = `translate3d(0,${movingY}px,0)`;
				}
				this.y = -Number.parseInt(this.$refs.content.style.transform.split('(')[1].split(',')[1]);
			}
			else if(this.horizonalMode&&this.isHorizonal.flag){
				let movingX = this.posi.x+moveX;//获取滚动中的x值
				if(movingX>=0){
					var slowMoveX = 0+movingX/this.damping; 
				}
				else if(movingX<=-this.maxX){
					var slowMoveX = -this.maxX+(movingX+this.maxX)/this.damping;
				}
				if((movingX>=0) || (movingX<=-this.maxX)){
					this.translateX = `translate3d(${slowMoveX}px,0,0)`;
				}
				else{
					this.translateX = `translate3d(${movingX}px,0,0)`;
				}
				this.x = -Number.parseInt(this.$refs.content.style.transform.split('(')[1].split(',')[0]);
			}
			this.$emit('scroll')
		},
		end(e){
			const endTime = new Date().getTime();
			let moveTime = endTime - this.startTime;
			let endX = e.changedTouches[0].clientX - this.startX;
			let endY = e.changedTouches[0].clientY - this.startY;
			if(this.smooth&&moveTime<=this.miniTime){
				if(!this.horizonalMode){
					endY = (e.changedTouches[0].clientY - this.startY)*moveTime/60;
				}else{
					endX = (e.changedTouches[0].clientX - this.startX)*moveTime/60;
				}
			}
			if(!this.horizonalMode&&this.isVertical&&this.isVertical.flag){
				this.posi.y += endY;
				this.posi.y = Math.ceil(this.posi.y);
				if(this.posi.y>0){
					this.snapping?this.transition = 'all 0.2s ease-out':this.transition = 'all 0.4s ease-out';
					if(this.isDownFresh){
						if(this.posi.y>0&&this.posi.y/this.damping<this.downY){
							this.posi.y = 0;
							this.translateY = `translate3d(0,${this.posi.y}px,0)`;
							this.y = this.posi.y;
						}
						else if(this.posi.y/this.damping>=this.downY){
							this.translateY = `translate3d(0,${this.downY}px,0)`;
							this.downfresh = true;
							setTimeout(()=>{
								this.downfresh = false;
								this.translateY = `translate3d(0,0,0)`;
								this.posi.y = 0;
								this.y = this.posi.y;
								this.$emit('downFresh')
								this.$emit('afterScroll')
							},1500)
						}
					}
					else{
						this.posi.y = 0;
						this.translateY = `translate3d(0,${this.posi.y}px,0)`;
						this.y = this.posi.y;
					}
				}
				else if(this.posi.y<=-this.upY){
					this.snapping?this.transition = 'all 0.2s ease-out':this.transition = 'all 0.4s ease-out';
					this.posi.y = this.isUpLoad?-this.upY - this.downY:-this.upY;
					this.translateY = `translate3d(0,${this.posi.y}px,0)`;
					if(this.isUpLoad&&!this.loadFinish){
						this.upload = true;
						setTimeout(()=>{
							this.upload = false;
							this.$emit('upLoad');
							this.$emit('afterScroll')
							this.y = -this.posi.y;
						},1500)
					}
					else{
						this.y = this.upY;
					}
				}
				else{
					this.transition = 'all 0.4s ease-out';
					this.translateY = `translate3d(0,${this.posi.y}px,0)`;
					this.y = -this.posi.y;
				}
				this.$emit('afterScroll')
			}
			else if(this.horizonalMode&&this.isHorizonal&&this.isHorizonal.flag){
				this.posi.x += endX;
				this.posi.x = Math.ceil(this.posi.x);
				if(this.posi.x>0){
					this.snapping?this.transition = 'all 0.2s ease-out':this.transition = 'all 0.4s ease-out';
					this.posi.x = 0;
					this.translateX = `translate3d(${this.posi.x}px,0,0)`;
					this.x= this.posi.x;
				}
				else if(this.posi.x<=-this.maxX){
					this.snapping?this.transition = 'all 0.2s ease-out':this.transition = 'all 0.4s ease-out';
					this.posi.x = -this.maxX;
					this.translateX = `translate3d(${this.posi.x}px,0,0)`;
					if(this.isUpLoad){
						this.$emit('upLoad');
						this.x = -this.posi.x;
						this.$emit('afterScroll')
					}
				}
				else{
					this.transition = 'all 0.4s ease-out';
					this.translateX = `translate3d(${this.posi.x}px,0,0)`;
					this.x = -this.posi.x;
				}
				this.$emit('afterScroll')
			}
			this.isVertical = null;
			this.isHorizonal = null;
		},
		//上拉加载完毕，禁止加载动画
		closeLoad(){
			this.loadFinish = true;
		},
		//重置上拉加载开关为true
		refreshLoad(){
			this.loadFinish = false;
		},
		//获取当前滑动的x和y值
		getPosition(){
			return {x:this.x,y:this.y}
		},
		//滚动到指定坐标位置，自动判断x位移还是y位移，并选择是否开启动画
		scrollTo(val,animate=false){
			animate?this.transition = 'all 0.3s ease-out':this.transition = 'all 0s';
			if(this.horizonalMode){
				this.posi.x = -val;
				this.translateX = `translate3d(${this.posi.x}px,0,0)`;
				this.x = -this.posi.x;
			}else{
				this.posi.y = -val;
				this.translateY = `translate3d(${this.posi.y}px,0,0)`;
				this.y = -this.posi.y;
			}
		}
	}
}
</script>

<style scoped>
._container{
	position: relative;
	overflow: hidden;
	width:100%;
	height:100%;
}
._container .horizonalMode{
	position: absolute;
	width: auto;
	height: 100%;
}
._scrollBar{
	position: absolute;
	right: 0;
	width:.1rem;
	height: 4rem;
	border-radius: 1rem;
	background: rgba(0,0,0,.55);
}
._content{
	position: absolute;
	width: 100%;
}
.fresh{
	position: absolute;
	left: 0;
	width: 100%;
	height: 1.1rem;
	text-align: center;
	color: #4b8bf4;
	font-size: .3rem;
}
.downfresh{
	top:-1.1rem;
}
.upload{
	bottom: -.8rem;
	height:.8rem !important ;
}
.upload .nomore{
	line-height: .8rem;
}
.arrow{
	stroke: #4b8bf4;
    height: .4rem;
    margin: .15rem auto 0;
    transform: translateZ(0) rotate(0deg);
    transition: transform .2s linear;
}
.arrow_active{
	transform: translateZ(0) rotate(180deg);
}
.spinner{
	stroke: #4b8bf4;
	width: .7rem;
	height: .6rem;
	margin: .3rem auto 0;
}
.upload .spinner{
	margin: .1rem auto 0;
	width: .6rem;
	height: .6rem;
	fill: #ec4949;
}
</style>