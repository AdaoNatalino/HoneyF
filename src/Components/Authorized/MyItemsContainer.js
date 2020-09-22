import React, { useContext, useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { UserContext } from '../../App'
import API from "../../API"



const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MyItemsContainer() {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    API.getMyOrders(userInfo).then(r => setOrders(r.orders))
  },[orders])

  useEffect(() => {
    API.getMyOrders(userInfo).then(r => setOrders(r.orders))
  },[])
  
    const classes = useStyles();
    const { userInfo } = useContext(UserContext)
    
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>CLIENT </StyledTableCell>
              <StyledTableCell align="right">TYPE</StyledTableCell>
              <StyledTableCell align="right">INSTRUMENT</StyledTableCell>
              <StyledTableCell align="right">VOLUME</StyledTableCell>
              <StyledTableCell align="right">PRICE</StyledTableCell>
              <StyledTableCell align="right">TOTAL</StyledTableCell>
              <StyledTableCell align="right">RECEIPT NUMBER</StyledTableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <StyledTableRow key={order.id}>
                <StyledTableCell component="th" scope="row">
                  {userInfo}
                </StyledTableCell>
                <StyledTableCell align="right">{order.trade_Type}</StyledTableCell>
                <StyledTableCell align="right">{order.instrument}</StyledTableCell>
                <StyledTableCell align="right">{order.volume}</StyledTableCell>
                <StyledTableCell align="right">{order.price}</StyledTableCell>
                <StyledTableCell align="right">{order.price * order.volume}</StyledTableCell>
                <StyledTableCell align="right">{order.receipt}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

