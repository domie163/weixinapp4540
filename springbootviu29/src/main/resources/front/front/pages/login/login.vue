<template>
	<view class="content">
		<view class="box" :style='{"padding":"48rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0 10%","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 1)","borderRadius":"0","borderWidth":"0","width":"80%","borderStyle":"solid","height":"auto"}'>
			<view class="logo" :style='{"padding":"0","boxShadow":"0 2rpx 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<image :style='{"padding":"0","boxShadow":"0 0 0px #59f43e","margin":"0 auto","borderColor":"#ccc","borderRadius":"50%","borderWidth":"2rpx","width":"160rpx","borderStyle":"solid","url":"http://codegen.caihongy.cn/20220220/c2a71f808bf8433db91d8986979c0dc9.jpg","isShow":false,"height":"160rpx"}' src='http://codegen.caihongy.cn/20220220/c2a71f808bf8433db91d8986979c0dc9.jpg' mode="aspectFill"></image>
			</view>
			<view class="uni-form-item uni-column" :style='{"padding":"0","boxShadow":"0 2rpx 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<input v-model="username" :style='{"padding":"0 24rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(54, 111, 112, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="text" class="uni-input" name="" placeholder="请输入账号" />
			</view>
			<view class="uni-form-item uni-column" :style='{"padding":"0","boxShadow":"0 2rpx 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<input v-model="password" :style='{"padding":"0 24rpx","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(54, 111, 112, 1)","backgroundColor":"#fff","color":"#333","textAlign":"left","borderRadius":"40rpx","borderWidth":"2rpx","width":"100%","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' type="password" class="uni-input" name="" placeholder="请输入密码" />
			</view>
			<view class="uni-form-item uni-column" v-if="roleNum>1" :style='{"padding":"0","boxShadow":"0 2rpx 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
				<picker @change="optionsChange" :value="index" :range="options">
					<view class="uni-picker-type" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"rgba(54, 111, 112, 1)","backgroundColor":"rgba(0,0,0,0)","color":"#333","textAlign":"center","borderRadius":"40rpx","borderWidth":"2rpx 6rpx","width":"100%","lineHeight":"80rpx","fontSize":"28rpx","borderStyle":"solid"}'>{{options[index]}}</view>
				</picker>
			</view>
			<button class="btn-submit" @tap="onLoginTap" type="primary" :style='{"padding":"0","boxShadow":"-28rpx 0px 0px 0px rgba(54,111,112,0.49)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(54, 111, 112, 1)","borderRadius":"180rpx 40rpx 40rpx 40rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"2rpx","width":"208rpx","fontSize":"32rpx","borderStyle":"solid","height":"208rpx"}'>登录</button>
			<view class="links" :style='{"padding":"0","boxShadow":"0 2rpx 0px rgba(0,0,0,0)","margin":"0 0 24rpx","borderColor":"#ccc","backgroundColor":"rgba(255, 255, 255, 0)","borderRadius":"0","borderWidth":"0","width":"100%","borderStyle":"solid","height":"auto"}'>
												<view class="link-highlight" @tap="onRegisterTap('chuangkoufuzeren')" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"10rpx 0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"#b49950","textAlign":"left","borderRadius":"0","borderWidth":"0","width":"55%","lineHeight":"36rpx","fontSize":"24rpx","borderStyle":"solid"}'>注册窗口负责人</view>
				<!-- <view>|</view> -->
																																																																				<view @tap="onForgetTap" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"#999","textAlign":"right","borderRadius":"0","borderWidth":"0","width":"45%","lineHeight":"36rpx","fontSize":"24rpx","borderStyle":"solid"}'>忘记密码？</view>
			</view>
			<!-- <view class="links">
				<view @tap="onForgetTap" :style='{"padding":"0","boxShadow":"0 2rpx 12rpx rgba(0,0,0,0)","margin":"0","borderColor":"#ccc","backgroundColor":"rgba(0,0,0,0)","color":"#999","textAlign":"right","borderRadius":"0","borderWidth":"0","width":"45%","lineHeight":"36rpx","fontSize":"24rpx","borderStyle":"solid"}'>忘记密码？</view>
			</view> -->
		</view>
	</view>
</template>

<style>
	.btn-submit {
		height: auto !important;
		line-height: 208rpx;
	}
</style>

<script>
	import menu from '@/utils/menu'
	export default {
		data() {
			return {
				username: '',
				password: '',
				codes: [{
				  num: 1,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 2,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 3,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}, {
				  num: 4,
				  color: '#000',
				  rotate: '10deg',
				  size: '16px'
				}],
				options: [
					'请选择登录用户类型'
				],
                		optionsValues: [
					'',
                    			'chuangkoufuzeren',
                    			'chuangkouyuangong',
				],
				index: 0,
				roleNum:0
			}
		},
		onLoad() {
			let options = ['请选择登录用户类型'];
			let menus = menu.list();
			this.menuList = menus;
			for(let i=0;i<this.menuList.length;i++){
				if(this.menuList[i].hasFrontLogin=='是'){
					options.push(this.menuList[i].roleName);
					this.roleNum++;
				}
			}
			if(this.roleNum==1) {
				this.index = 1;
			}	
			this.options = options;
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.uni-input .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.loginFrom.content.input.backgroundColor
					// })
				})
			},
			onRegisterTap(tableName) {
                uni.setStorageSync("loginTable", tableName);
				this.$utils.jump('../register/register')
			},
			onForgetTap() {
				this.$utils.jump('../forget/forget')
			},
			async onLoginTap() {
                if (!this.username) {
					this.$utils.msg('请输入用户名')
					return
				}
                if (!this.password) {
					this.$utils.msg('请输入用户密码')
					return
				}
                if (!this.optionsValues[this.index]) {
					this.$utils.msg('请选择登陆用户类型')
					return
				}
				let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
					username: this.username,
					password: this.password
				});
                uni.removeStorageSync("useridTag");
				uni.setStorageSync("token", res.token);
				uni.setStorageSync("nickname",this.username);
				uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
				res = await this.$api.session(`${this.optionsValues[this.index]}`);
				// 保存用户id
				uni.setStorageSync("userid", res.data.id);
				if(res.data.vip) {
					uni.setStorageSync("vip", res.data.vip);
				}
				uni.setStorageSync("role", `${this.options[this.index]}`);
				this.$utils.tab('../index/index');
			},
			optionsChange(e) {
				this.index = e.target.value
			}
		}
	}
</script>

<style lang="scss" scoped>
	$color-primary: #b49950;

	.content {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: calc(100vh - 44px);
		box-sizing: border-box;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
				background-image: url(http://codegen.caihongy.cn/20220220/1eb2101d8722485d9fa930e666d84444.png);
				background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	.logo {
		text-align: center;

		image {
			height: 200upx;
			width: 200upx;
			margin: 0 0 60upx;
		}
	}

	.uni-form-item {
		margin-bottom: 40upx;
		padding: 0;

		.uni-input {
			font-size: 30upx;
			padding: 7px 0;
		}
	}

	button[type="primary"] {
		background-color: $color-primary;
		border-radius: 0;
		font-size: 34upx;
		margin-top: 60upx;
	}

	.links {
		margin-top: 40upx;
		font-size: 26upx;
		color: #999;

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			margin: 0;
			color: $color-primary
		}
	}
	
	
</style>
