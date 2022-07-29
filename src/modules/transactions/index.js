import React, { Component } from 'react';
import SecondHeader from '../../common/components/secondHeader';
import Footer from '../../common/components/footer';
import Transaction from './myTransaction';

class TransactionIndex extends Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {

    }

    render() {
        return (
             <>
             <SecondHeader/>
             <Transaction/>
             <Footer/>
             </>
        );
    }
}

export default TransactionIndex;