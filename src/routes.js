import React from 'react';
import {Router, Route} from 'react-router-dom';
import {Redirect, Switch} from "react-router";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {history} from "./managers/history";
import BaseComponent from "./modules/baseComponent";
import PrepaidMaintaince from "./modules/prepaidMaintaince"
import CreatePasswordIndex from './modules/createPassword'
import ResetPasswordIndex from './modules/resetPassword'
import ResetSuccessIndex from './modules/passSuccessful'
import TransactionIndex from './modules/transactions';
import WalletIndex from './modules/wallet';

class Routes extends BaseComponent {
    componentDidMount() {
   
    }
    
    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme()}>
                <Router history={history}>
                    <Switch>
                    <Route exact path={'/'} component={TransactionIndex} />
                        <Route exact path={'/prepaid-maintaince'} component={PrepaidMaintaince}/>
                        <Route exact path={'/create-password'} component={CreatePasswordIndex} />
                        <Route exact path={'/reset-success'} component={ResetSuccessIndex} />
                        <Route exact path={'/reset-password'} component={ResetPasswordIndex} />
                        <Route exact path={'/wallet'} component={WalletIndex} />



                        <Redirect exact from='*' to="/"/>
                    </Switch>
                </Router>
            </MuiThemeProvider>);
    }
}

export default Routes;
