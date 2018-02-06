import React from 'react';
import {Grid} from 'semantic-ui-react';
import {graphql} from 'react-apollo';
import gpl from 'graphql-tag';

import Signin from './login/Signin';
import Signup from './login/Signup';
import LostPassword from './login/LostPassword';

const styles = {
  grid: {
    height: '100%',
    width: '900px',
    margin: '0 auto',
  },
  box: {
    backgroundColor: 'white',
    border: '1px solid #e6e6e6',
    textAlign: 'center',
    marginBottom: '1em',
    padding: '1em',
  }
}

class Login extends React.Component{
  state={
    showLogin:true,
    showRegister:false,
    showPassword:false,
  }

  showRegister = (ev) => {
    ev.preventDefault()
    this.setState({showLogin:false,
    showRegister:true,
    showPassword:false,})
  }

  showLogin = (ev) => {
    ev.preventDefault()
    this.setState({showLogin:true,
    showRegister:false,
    showPassword:false,})
  }

  handleLogin = (env, args) => {
    console.log(args);
  }

  handleRegister = async (env, args) => {
    console.log(args);
    const response = await this.props.mutate({
      variables: args
    })
    console.log("Response de graphql", response);
  }

  render(){
    const {showLogin, showRegister, showPassword} = this.state;

    return(
      <Grid columns={2} centered verticalAlign='middle' style={styles.grid}>
       <Grid.Row>
         <Grid.Column>
           <img src="images/react.png" alt="react"/>
         </Grid.Column>
         <Grid.Column>
            {showLogin && <Signin styles={styles} handleClick={this.showRegister} handleSubmit={this.handleLogin}/> }
            {showRegister && <Signup styles={styles} handleClick={this.showLogin} handleSubmit={this.handleRegister}/> }
            {/*showPassword && <LostPassword styles={styles} />*/ }
         </Grid.Column>
       </Grid.Row>
     </Grid>
   )
  }
}

const mutation = gpl`
    mutation($username:String!, $password:String!, $fullname:String!, $email:String!){
      createUser(username:$username, password:$password, fullname:$fullname, email:$email)
    }`;
export default graphql(mutation)(Login)
