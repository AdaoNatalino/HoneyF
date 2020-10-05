import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import CSVReader from "react-csv-reader";
import { UserContext } from "../../App";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import API from "../../API";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function NewItemForm() {
  const classes = useStyles();

  const [newOrders, setNewOrders] = useState([]);
  const { userInfo } = useContext(UserContext);

  let history = useHistory();

  const handleForce = (data, fileInfo) => {
    setNewOrders(data);
    console.log(data, fileInfo);
  };

  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
  };

  const processOrders = () => {
    API.processNewOrders(newOrders, userInfo);
    history.push("/profile");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <CloudUploadIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Upload your Order CSV File!
        </Typography>

        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>

              <CSVReader
                cssClass="react-csv-input"
                onFileLoaded={handleForce}
                parserOptions={papaparseOptions}
              />

              
            </Grid>
          </Grid>

          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={processOrders}
          >
            Upload Order to Process!
          </Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button
                variant="contained"
                style={{ color: "green" }}
                onClick={() => history.goBack()}
              >
                Back to Dashboard
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
