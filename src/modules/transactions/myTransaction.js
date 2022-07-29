import React from 'react'
import styled from 'styled-components';

const MainDiv= styled.div`
padding-bottom: 6rem;`;
const InnerDiv= styled.div`
padding: 3rem 100px 0 100px;`;
const TransactionHead = styled.div`
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #959393;`;
const DrpdownFlex = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-top: 3rem;`;
const Div1 = styled.div`
display: flex;
flex-direction: column;`;
const Date = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #000000;`;
const DateInput = styled.input`
max-width: 196px;
width: 100%;
height: 50px;
background: rgba(181, 193, 204, 0.43);
border-radius: 5px;
padding-right: 10px;`;
const Select = styled.select`
  width: 100%;
  max-width: 196px;
  height: 50px;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #959595;
`;
const Option = styled.option`
width: 100%;
max-width: 196px;
  &&[value=""][disabled] {
    display: none;
  }
`;
const SearchDiv = styled.div`
padding-top: 25px;`;
const SearchBtn = styled.button`
width: 100%;
max-width: 156px;
height: 50px;
background: #3AADE1;
border-radius: 10px;
ont-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
color: #FFFFFF;
padding: 0 3rem;
`;
const Table = styled.table`
max-width: 144rem;
    width: 100%;
    margin-top: 3rem;
    border-collapse: collapse;`;
const Tr = styled.tr`
border: 1px solid #dddddd;
height: 50px;`;
const Th = styled.th`
max-width: 1293px;
height: 50px;
background: #002E5B;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #FFFFFF; `;
const Td =styled.td`
border: 1px solid #dddddd;`;
const PaginationDiv = styled.div`
display:flex;
flex-direction: row;
float: right;
margin-top: 1rem;
`;
const Div2 = styled.a`
width: 29px;
height: 29px;
background: #FFFFFF;
border: 1px solid #DDDDDD;
text-align: center;
`;
const Div3 = styled.a`
background: #002E5B;
border: 1px solid #002E5B;
width: 29px;
height: 29px;
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
// font-size: 20px;
line-height: 23px;
text-align: center;
color: #FFFFFF;`;
const Transaction = () => {
  return (
       <MainDiv>
        <InnerDiv>
           <TransactionHead>&gt;&nbsp;&gt;&nbsp;My Transactions</TransactionHead>
           <DrpdownFlex>
             <Div1>
                <Date>Date From</Date>
                <DateInput placeholder='dd-mm-yyyy' type="date"/>
             </Div1>
             <Div1>
                <Date>Date To</Date>
                <DateInput placeholder='dd-mm-yyyy' type="date"/>
             </Div1>
             <Div1>
               <Date>Transaction ID</Date>
               <DateInput  type="number"/>
             </Div1>
             <Div1>
               <Date>Transaction ID</Date>
               <Select>
               <Option value="" disabled selected>
                 ---Select---
               </Option>
               <Option value="India">India</Option>
               <Option value="Africa">Africa</Option>
               <Option value="China">China</Option>
               <Option value="Japan">Japan</Option>
             </Select>
             </Div1>
             <Div1>
             <Date>Operation Type</Date>
             <Select>
             <Option value="" disabled selected>
               ---Select---
             </Option>
             <Option value="India">India</Option>
             <Option value="Africa">Africa</Option>
             <Option value="China">China</Option>
             <Option value="Japan">Japan</Option>
           </Select>
           </Div1>
           <SearchDiv> 
             <SearchBtn>Search</SearchBtn>
           </SearchDiv>
           </DrpdownFlex>

           <Table>
             <Tr>
              <Th>ID</Th>
              <Th>Date</Th>
              <Th>Description</Th>
              <Th>Incoming</Th>
              <Th>Outgoing</Th>
              <Th>Balance</Th>
             </Tr>
             <Tr>
              <Td></Td>
             </Tr>
             <Tr>
             <Td></Td>
             </Tr>
             <Tr>
             <Td></Td>
             </Tr>
             <Tr>
             <Td></Td>
             </Tr>
             <Tr>
             <Td></Td>
             </Tr>
             <Tr>
             <Td></Td>
             </Tr>
           </Table>
           <PaginationDiv>
             <Div2>&lt;</Div2>
             <Div3>1</Div3>
             <Div2>2</Div2>
             <Div2>&gt;</Div2>
           </PaginationDiv>
        </InnerDiv>
       </MainDiv>
  )
}

export default Transaction
