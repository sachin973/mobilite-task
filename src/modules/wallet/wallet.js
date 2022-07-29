import React,{useState} from 'react'
import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    alignSelf: "center",
    fontFamily: 'Roboto',
fontStyle: "normal",
fontWeight: 500,
fontSize: "40px",
lineHeight: "47px",
/* identical to box height */


color: "#002E5B",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

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
margin-top: 3rem;
margin-bottom: 3rem;`;
const Div1 = styled.div`
display: flex;
flex-direction: column;
align-items: center;`;
const Details = styled.label`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 46px;
line-height: 54px;
color: #3AADE1;`;

const FundDiv = styled.div`
padding-top: 25px;`;
const FundBtn = styled.button`
width: 100%;
max-width: 256px;
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
border:none
`;
const Table = styled.table`
max-width: 144rem;
    width: 100%;
    margin-top: 2rem;
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
const BalancePara = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 23px;

color: #000000;
`;
const DivInput = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputField = styled.input`
  width: 469px;
  height: 50px;
  background: rgba(181, 193, 204, 0.43);
  border-radius: 5px;
  border: none;
  padding-left: 18px;
`;
const RoomBtn = styled.button`
  width: 469px;
  height: 50px;
  background: #3aade1;
  border-radius: 10px;
  border: none;
  color: #fff;
  margin-top:58px;
`;
const SpanText = styled.span`
  color: red;
  font-size: 14px;
  font-family: "Roboto";
  font-style: normal;
`;
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <img src="crossIcon.svg" />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: "65px 61px 0px 61px",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const WalletComponent = () => {
  const [amount, setAmount] = useState("");
const [amountError, setAmountError] = useState("");
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = () => {
    const amountError = !amount ? "Please add Fund" : "";
  
  setAmountError(amountError)
  }

  const handleClick = () => {
    if(!amount) {
      return onSubmit();
    } else
    handleClose();
  
  }
  return (
    <>
       <MainDiv>
        <InnerDiv>
           <TransactionHead>&gt;&nbsp;&gt;&nbsp;Withdraw Funds</TransactionHead>
           <DrpdownFlex>
             <Div1>
                <Details>$ 0.000000
</Details>
                <BalancePara>Total Balance
</BalancePara>
             </Div1>
             <Div1>
                <Details>$ 0.000000
</Details>
                <BalancePara>Withdrawable Balance

</BalancePara>
             </Div1>
             <Div1>
               <Details>$ 0.000000
</Details>
               <BalancePara>Withdrawable Balance

</BalancePara>
             </Div1>
           <FundDiv> 
             <FundBtn onClick={handleClickOpen}>Withdraw Funds
</FundBtn>
           </FundDiv>
           </DrpdownFlex>
           <TransactionHead>&gt;&nbsp;&gt;&nbsp;Withdraw History</TransactionHead>
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
       <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
          className="fund-dialog"
        >
          <DialogTitle id="customized-dialog-title" className="fund-title" onClose={handleClose}>
          Withdraw Funds
          </DialogTitle>
          <DialogContent>
            <DivInput>
              <InputField
                placeholder="Amount"
                value={amount}
                name="amount"
                onChange={(e)=> setAmount(e.target.value)}
              />
              <SpanText>{amountError}</SpanText>
              <RoomBtn onClick={handleClick}>Withdraw Funds

</RoomBtn>
            </DivInput>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </div>
       </>
  )
}

export default WalletComponent;
