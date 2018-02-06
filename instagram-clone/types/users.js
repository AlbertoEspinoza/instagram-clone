// Se describe los tipos de campos a utilzar
export default `

  type User{
    _id: ID!
    username: String!
    password: String!
    fullname: String!
    email: String!
    thumbnail: String
  }

  type Query{
    holaMundo: String
    allUsers: [User]!
    getUser(_id: ID): User!
  }

  type Mutation{
    createUser(username: String!, password: String!, fullname: String!, email: String!): Boolean!
  }
`;
