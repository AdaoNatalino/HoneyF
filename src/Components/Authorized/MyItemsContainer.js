import React, { useContext, useState, useEffect } from "react";
import {
  withStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { UserContext } from "../../App";
import API from "../../API";

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
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function MyItemsContainer({ setUserToShow }) {
  const [users, setUsers] = useState([]);
  const { userInfo } = useContext(UserContext);


  const getDataAndSetUsers = async () => {
    const resp = await API.getAllUsers(userInfo);
    setUsers(resp.users);
  };

  useEffect(() => {
    getDataAndSetUsers();
  }, []);

  

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">USER</StyledTableCell>
            <StyledTableCell align="right">USERNAME</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id} onClick={() => setUserToShow(user)} >
              <StyledTableCell align="right" >
                {user.username}
              </StyledTableCell>
              <StyledTableCell align="right">
                {user.name}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
