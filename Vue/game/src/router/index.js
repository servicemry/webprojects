import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Game from '@/components/Lottery/Game'
import BeginPay from '@/components/Cash/BeginPay'
import BeginPay2 from '@/components/Cash/BeginPay2'
import Withdraw from '@/components/Cash/Withdraw'
import Withdraw2 from '@/components/Cash/Withdraw2'
import StateMessage from '@/components/Report/StateMessage'
import Notice from '@/components/Report/Notice'
import SafeCenter from '@/components/Report/SafeCenter'
import MyBetRecord from '@/components/Report/MyBetRecord'
import AccountChangeDetails from '@/components/Report/AccountChangeDetails'
import BankOrder from '@/components/Report/BankOrder'
import MemberCenter from '@/components/Report/MemberCenter'
import BankInfo from '@/components/Report/BankInfo'
import MyApendBetRecord from '@/components/Report/MyApendBetRecord'
import PayRecord from '@/components/Report/PayRecord'
import PepoleReport from '@/components/Report/PepoleReport'
import MemberManage from '@/components/Report/MemberManage'
import AutoRegisterAddress from '@/components/Report/AutoRegisterAddress'
import WagesManage from '@/components/Report/WagesManage'
import TeamReport from '@/components/Report/TeamReport'
import TeamPay from '@/components/Report/TeamPay'
import TeamBet from '@/components/Report/TeamBet'
import TeamCalc from '@/components/Report/TeamCalc'
import JJInfo from '@/components/Report/JJInfo'
import AutoBetInterface from '@/components/Report/AutoBetInterface'
import Login from '@/components/Login'
Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {path: '/',name: 'login',component: Login},
    {path: '/main',name: 'main',component: Main},
    {path: '/game',name: 'game',component: Game},
    {path: '/beginpay',name: 'beginpay',component: BeginPay},
    {path: '/beginpay2',name: 'beginpay2',component: BeginPay2},
    {path: '/withdraw',name: 'withdraw',component: Withdraw},
    {path: '/withdraw2',name: 'withdraw2',component: Withdraw2},
    {path: '/statemessage',name: 'statemessage',component: StateMessage},
    {path: '/notice',name: 'notice',component: Notice},
    {path: '/safecenter',name: 'safecenter',component: SafeCenter},
    {path: '/mybetrecord',name: 'mybetrecord',component: MyBetRecord},
    {path: '/accountchangedetails',name: 'accountchangedetails',component: AccountChangeDetails},
    {path: '/bankorder',name: 'bankorder',component: BankOrder},
    {path: '/membercenter',name: 'membercenter',component: MemberCenter},
    {path: '/bankinfo',name: 'bankinfo',component: BankInfo},
    {path: '/myapendbetrecord',name: 'myapendbetrecord',component: MyApendBetRecord},
    {path: '/payrecord',name: 'payrecord',component: PayRecord},
    {path: '/pepolereport',name: 'pepolereport',component: PepoleReport},
    {path: '/membermanage',name: 'membermanage',component: MemberManage},
    {path: '/autoregisteraddress',name: 'autoregisteraddress',component: AutoRegisterAddress},
    {path: '/wagesManage',name: 'wagesmanage',component: WagesManage},
    {path: '/teamreport',name: 'teamreport',component: TeamReport},
    {path: '/teampay',name: 'teampay',component: TeamPay},
    {path: '/teambet',name: 'teambet',component: TeamBet},
    {path: '/teamcalc',name: 'teamcalc',component: TeamCalc},
    {path: '/jjinfo',name: 'jjinfo',component: JJInfo},
    {path: '/autobetinterface',name: 'autobetinterface',component: AutoBetInterface},
  ]
})
