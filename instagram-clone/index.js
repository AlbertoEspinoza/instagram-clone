import express from 'express';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import mongoose from 'mongoose';
import cors from 'cors';

import models from './models'
//import typeDefs from './schemas'
//import resolvers from './resolvers'
//Se realiza cambio - prueba git

//Mezclar todos los archivos de carpeta types y resolvers
import path from 'path';
import { fileLoader, mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './types')));
const resolvers = mergeResolvers(fileLoader(path.join(__dirname, './resolvers')));

const app = express();
app.use(cors({
  origin:["http://localhost:3000"]
}))

const PORT = 3001;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});// ... define or import your schema here!

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  context: {
    models,
    user: {
      _id: 1, username: "userPrueba"
    }
  }
 }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' })); // if you want GraphiQL enabled

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Curso3').then(() => {

    console.log('La conexion a mongodb se ah realizado de forma correcta');
    app.listen(PORT, () => {
      console.log("El servidor GRAPHQL esta corriendo");
    })//Se crea el servidor de express especificando el puerto

}).catch( err => console.log(err));
