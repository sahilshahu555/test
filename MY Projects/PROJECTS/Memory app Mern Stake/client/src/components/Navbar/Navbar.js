import React from 'react'
import {Link} from 'react-router-dom'
import {  AppBar, Avatar, Button, Toolbar, Typography,  } from "@material-ui/core";
import useStyles from './style';
import logo from "../../images/b.jpeg";

const Navbar = () =>{
  const classes= useStyles();
 const user =null;
return(
  <AppBar className={classes.appBar} position="static" >
    <div className={ classes.brandContainer}>
        <Typography className={classes.heading} component={Link} to="/" variant="h2" align="center "> AWESOME </Typography> 
        <img className={classes.image} src={logo} alt="LOGO" height="60" />
    </div>
    <Toolbar className={classes.toolbar}>
     {user ?(
       <div  className={classes.profile}>
        <Avatar className={classes.purple} src={user.result.imageUrl} alt= {user.result.name}>{user.result.name.charAt(0)}</Avatar>
        <Typography className={classes.userName} variant="h6"> {user.result.name} </Typography>
        <Button  variant= 'contained' className={classes.logout} color='secondary'>Logout </Button>
       </div>
     ):(
      <div>
        <Button  component={Link} to='/auth' variant= 'contained' color='secondary'>Login </Button>
        
      </div>
     )


     }
    </Toolbar>
    
   </AppBar>
)
}

export default Navbar;
