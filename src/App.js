import { useEffect } from 'react';
import './App.css';
import {Route, Switch, Redirect, HashRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from './Redux/Actions/Index';

import Dashboard from './Containers/Dashboard/Dashboard';
import LandingPage from './Containers/LandingPage/LandingPage';
import LoginPage from './Containers/LoginPage/LoginPage';
import Referrals from './Containers/Referrals/Referrals';
import Deposit from './Containers/Deposit/Deposit';
import Withdraw from './Containers/Withdraw/Withdraw';
import HowToInvest from './Containers/HowToInvest/HowToInvest';
import Wallet from './Containers/Wallets/Wallets';
import FAQ from './Containers/FAQ/FAQ';
import AboutUs from './Containers/AboutUs/AboutUs';
import Terms from './Containers/TermsAndConditions/Terms';
import ForgetScreen from './Containers/ForgetScreen/ForgetScreen';
import Dashboard2 from './Containers/Dashboard2/Dashboard2';
import Dashboard3 from './Containers/Dashboard3/Dashboard3';
import Dashboard4 from './Containers/Dashboard4/Dashboard4';
import Portfolio from './Containers/Portfolio/Portfolio';

function App(props) {

  useEffect(() => {
    props.init()
  }, []);

  const auth = (
    <Switch>
        <Route path='/signin' component={LoginPage} />
        <Route path='/FAQs' component={FAQ} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/terms' component={Terms} />
        <Route path='/' exact component={LandingPage}/>
        <Route path='/password_reset' component={ForgetScreen} />
        <Redirect to='/' />
    </Switch>
  )

  const auth2 = (
    <Switch>
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/plan1' component={Dashboard} />
        <Route path='/plan2' component={Dashboard2} />
        <Route path='/plan3' component={Dashboard3} />
        <Route path='/plan4' component={Dashboard4} />
        <Route path='/deposit' component={Deposit} />
        <Route path='/withdraw' component={Withdraw} />
        <Route path='/howToInvest' component={HowToInvest} />
        <Route path='/wallets' component={Wallet} />
        <Route path='/FAQs' component={FAQ} />
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/terms' component={Terms} />
        <Route path='/referrals' component={Referrals} />
        <Route path='/' exact component={LandingPage}/>
        <Redirect to='/portfolio' />
    </Switch>
  )

  return (
    <div className="App">
      {!props.token ? auth : auth2}
    </div>
  );
}

const mapStateToProps = state => {
  return{
    token: state.token
  }
};

const mapDispatchToProps = dispatch => {
  return{
    init: () => dispatch(actions.init())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);