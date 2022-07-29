import React, { Component } from 'react';
import SecondHeader from '../../common/components/secondHeader';
import Footer from '../../common/components/footer';
import WalletComponent from './wallet';

class WalletIndex extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {
        return (
             <>
             <SecondHeader/>
             <WalletComponent/>
             <Footer/>
             </>
        );
    }
}

export default WalletIndex;