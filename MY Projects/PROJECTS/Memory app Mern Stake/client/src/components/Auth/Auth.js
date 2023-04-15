import React, {useState} from 'react'
import { Container, Avatar, Button , Paper, Grid, Typography} from "@material-ui/core";
import LockOutlineIcon from '@material-ui/icons/LockOutlined';
import Icon from './icon'
import useStyles from './style';
import Input from './Input';
import {GoogleLogin} from 'react-google-login';
import {useDispatch} from 'react-redux'
 const Auth=()=> {
    const [showPassword,setShowPassword] = useState (false);
     const classes =useStyles();
     const [isSingup,setIsSingup] = useState (false);
    const dispatch = useDispatch();
  const handleShowPassword =()=> setShowPassword((preShowPassword)=>!preShowPassword);
  const handleSubmit =()=>{

  };
  const handleChange =()=>{

  };
  const switchMode =()=>{ 
   setIsSingup((preIsSingup)=> !preIsSingup);
   handleShowPassword(false);
  };
  const googleSuccess =async(res)=>{
     const result = res?.profileObj; 
     const token = res?.tokenId; 

     try {
       dispatch( {type:'AUTH', data: { result, token}});
     } catch (error) {
      console.log(error);
     }
  };
  // const googleFailure = (error)=>{
  //   console.log(error);
  //   console.log('Google Sing In was unsuccessful. Try Again Later');
  // };

  return (
    <Container component='main' maxwidth='xs' className={classes.container}>
      <Paper className={classes.paper} elevation={2}>
        <Avatar className={classes.avatar}><LockOutlineIcon/></Avatar>
        <Typography variant= 'h3'>{isSingup ? 'Sign Up' : 'Sign In'}</Typography>
        <form className={classes.form} onSubmit={handleSubmit()}>
         <Grid container spacing={2}>
             {
               isSingup && (
                <>
                    <Input name='firstName' label ='First Name' handleChange={handleChange()}autoFocus half></Input>     
                    <Input name='lastName' label ='Last Name' handleChange={handleChange()}  half></Input>
                </>
             )}
              <Input name='email' label ='Email Address' handleChange={handleChange} type='email'/>
              <Input name='password' label ='password' handleChange={handleChange} type={showPassword ? 'text': "password"} handleShowPassword ={handleShowPassword}/>
             {isSingup && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password' />}
         </Grid>
         <Button type='submit' fullWidth variant='contained'color='secondary' className={classes.submit}>
          {isSingup ?'Sing Up':'Sing In'}
         </Button>
         <GoogleLogin
             clientId='979670202778-07p0ci20gssmc5vnki25ltt816mhfiis.apps.googleusercontent.com'  
             render={(renderProps) => (
                  <Button className={classes.googleButton} color='primary' fullWidth onClick={renderProps.onClick} disabled ={renderProps.disabled} startIcon={<Icon/>}variant='contained'>
                    Google Login</Button>
             )}
             onSuccess={googleSuccess} 
            //  onFailure={googleFailure}
            //  cookiePolicy='single_host_origin'
         />
         <Grid container justify='flex-end'>
         <Grid item>
           <Button onClick={switchMode}variant='h3'>
            {isSingup ? 'Already have an account ? Sing In': "Don't have an account ? Sing Up" }
           </Button>
         </Grid>
         </Grid>
          </form>
      </Paper>
    </Container>
  )
}

export default Auth;
