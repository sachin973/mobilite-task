import React from 'react'
import { useHistory } from 'react-router';
import styled from 'styled-components';
const Nav = styled.div`
  background: white;
  overflow: hidden;
  height: 109px;
  padding: 43px 46px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
const Logo = styled.div`
  float: left;
`;
const Section = styled.div`
  float: right;
  display: flex;
`;
const NavTag = styled.p`
  padding: 0px 12px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  /* identical to box height */
  color: #707070;
`;
const SearchImg = styled.img`
  padding: 0px 20px;
`;
const HamImg = styled.img`
  padding: 0px 20px;
`;
function MainHeader() {
  const history = useHistory();
  const handleTrans = () => {
    history.push("/")
  }
  const handleWallet = () => {
    history.push("/wallet")
  }
  const handlePrepaid = () => {
    history.push("/prepaid-maintaince")
  }
  const handleChange = () => {
    history.push("/create-password")
  }
  const handleReset = () => {
    history.push("/reset-password")
  }
  return (
    <div>  <Nav>
    <Logo>CompanyLogo</Logo>
    <Section>
      <NavTag onClick={handleTrans}>Transactions</NavTag>
      <NavTag onClick={handleWallet}>Wallet</NavTag>
      <NavTag onClick={handlePrepaid}>Prepaid Maintaince</NavTag>
      <NavTag onClick={handleChange}>Change Password</NavTag>
      <NavTag onClick={handleReset}>Reset Password</NavTag>
      <SearchImg src="# "></SearchImg>
      <HamImg src="#"></HamImg>
    </Section>
  </Nav></div>
  )
}

export default MainHeader