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
        <h4>Registrate para ver fotos y videos de tus amigos</h4>
        <Form onSubmit={(env) => handleSubmit(env, args)}>
          <Button color='facebook'>
              <Icon name='facebook'/> Iniciar sesión con facebook
          </Button>
          <Divider horizontal>Registrar</Divider>
          <Form.Field>
            <Form.Input name="email" onChange={handleChange} placeholder='Email' icon={<Icon name="remove circle outline" color="red" size="large"/>} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="fullname" onChange={handleChange} placeholder='Nombre completo' icon={<Icon name="remove circle outline" color="red" size="large"/>} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="username" onChange={handleChange} placeholder='Nombre de usuario' icon={<Icon name="remove circle outline" color="red" size="large"/>} />
          </Form.Field>
          <Form.Field>
            <Form.Input name="password" onChange={handleChange} type="Password" placeholder="Password" icon={<Icon name="remove circle outline" color="red" size="large"/>}/>
          </Form.Field>
          <Button color="instagram" fluid type='submit'>Registrarte</Button>
        </Form>
      </div>
      <div style={styles.box}>
        ¿Ya tienes una cuenta? <a href="" onClick={handleClick}>Inicia sesion</a>
      </div>
    </div>
  )
}
