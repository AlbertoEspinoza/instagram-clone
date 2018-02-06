import React from 'react';
import { Divider, Form, Button, Icon } from 'semantic-ui-react'

const args={};

const handleChange = (ev, input) => {
  args[input.name] = input.value;
}

export default ({styles, handleClick, handleSubmit}) => {
  return (
    <div>
      <div style={styles.box}>
        <img src="images/login.png" alt="login"/>
        <Form onSubmit={(env) => handleSubmit(env, args)}>
           <Form.Field>
             <label>Email o usuario</label>
             <Form.Input name="email" onChange={handleChange} placeholder='Email o nombre de usuario' />
           </Form.Field>
           <Form.Field>
             <label>Password</label>
             <Form.Input name="password" onChange={handleChange} type="Password" placeholder='Password' />
           </Form.Field>
           <Button color="instagram" fluid type='submit'>Iniciar sesión</Button>
        </Form>
        <Divider horizontal>Login</Divider>
        <Button color='facebook'>
            <Icon name='facebook'/> Iniciar sesión con facebook
        </Button>
      </div>
      <div style={styles.box}>
        ¿No tienes una cuenta? <a href="" onClick={handleClick}> registrate </a>
      </div>
    </div>
  )
}
