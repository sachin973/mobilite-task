import React, { Component } from 'react';
import ResetPasswordComponent from './createPasswordComponent';
import Header from '../../common/components/header';
import FooterBar from '../../common/footerStrip';
class ResetPasswordIndex extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }


    render() {
        return (
              <>
              <Header/>
              <ResetPasswordComponent/>
              <FooterBar/>
              </>
        );
    }
}


export default ResetPasswordIndex;