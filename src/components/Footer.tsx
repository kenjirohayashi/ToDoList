import React, { useContext } from "react";
import Box from '@material-ui/core/Box';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles(() => ({
  footer:{
    width: "100%",
    height: 56,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#FFF",
    backgroundColor:"#6fb5e1",
    position: "fixed",
    bottom: 0,
  }
}))


const Footer = () => {

  const classes = useStyles();

  return(
    <Box className={classes.footer}>copy rights 林賢二郎</Box>
  )
}

export default Footer;