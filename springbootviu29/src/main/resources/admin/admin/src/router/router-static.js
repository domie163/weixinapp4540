import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import liuyangshipinxiaohui from '@/views/modules/liuyangshipinxiaohui/list'
    import jiaoyuxuanchuan from '@/views/modules/jiaoyuxuanchuan/list'
    import chuangkoufuzeren from '@/views/modules/chuangkoufuzeren/list'
    import paibanxinxi from '@/views/modules/paibanxinxi/list'
    import liuyangshipin from '@/views/modules/liuyangshipin/list'
    import chufagonggao from '@/views/modules/chufagonggao/list'
    import chuangkouyuangong from '@/views/modules/chuangkouyuangong/list'
    import bingju from '@/views/modules/bingju/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/liuyangshipinxiaohui',
        name: '留样食品销毁',
        component: liuyangshipinxiaohui
      }
      ,{
	path: '/jiaoyuxuanchuan',
        name: '教育宣传',
        component: jiaoyuxuanchuan
      }
      ,{
	path: '/chuangkoufuzeren',
        name: '窗口负责人',
        component: chuangkoufuzeren
      }
      ,{
	path: '/paibanxinxi',
        name: '排班信息',
        component: paibanxinxi
      }
      ,{
	path: '/liuyangshipin',
        name: '留样食品',
        component: liuyangshipin
      }
      ,{
	path: '/chufagonggao',
        name: '处罚公告',
        component: chufagonggao
      }
      ,{
	path: '/chuangkouyuangong',
        name: '窗口员工',
        component: chuangkouyuangong
      }
      ,{
	path: '/bingju',
        name: '冰柜',
        component: bingju
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
