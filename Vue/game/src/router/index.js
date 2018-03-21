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
    {path: '/',component: Login},
    {path: '/main',component: Main},
    {path: '/game',component: Game},
    {path: '/beginpay',component: BeginPay},
    {path: '/beginpay2',component: BeginPay2},
    {path: '/withdraw',component: Withdraw},
    {path: '/withdraw2',component: Withdraw2},
    {path: '/statemessage',component: StateMessage},
    {path: '/notice',component: Notice},
    {path: '/safecenter',component: SafeCenter},
    {path: '/mybetrecord',component: MyBetRecord},
    {path: '/accountchangedetails',component: AccountChangeDetails},
    {path: '/bankorder',component: BankOrder},
    {path: '/membercenter',component: MemberCenter},
    {path: '/bankinfo',component: BankInfo},
    {path: '/myapendbetrecord',component: MyApendBetRecord},
    {path: '/payrecord',component: PayRecord},
    {path: '/pepolereport',component: PepoleReport},
    {path: '/membermanage',component: MemberManage},
    {path: '/autoregisteraddress',component: AutoRegisterAddress},
    {path: '/wagesManage',component: WagesManage},
    {path: '/teamreport',component: TeamReport},
    {path: '/teampay',component: TeamPay},
    {path: '/teambet',component: TeamBet},
    {path: '/teamcalc',component: TeamCalc},
    {path: '/jjinfo',component: JJInfo},
    {path: '/autobetinterface',component: AutoBetInterface},
  ]
})
