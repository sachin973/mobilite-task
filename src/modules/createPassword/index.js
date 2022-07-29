import React, { Component } from 'react';
import CreatePasswordComponent from './createPasswordComponent';
import Header from '../../common/components/header';
import FooterBar from '../../common/footerStrip';
class CreatePasswordIndex extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }


    render() {
        return (
              <>
              <Header/>
              <CreatePasswordComponent/>
              <FooterBar/>
              </>
        );
    }
}


export default CreatePasswordIndex;