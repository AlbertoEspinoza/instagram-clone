import bcrypt from 'bcrypt';

export default{
  Query: {
    holaMundo: (parent, args, context, info) => "Hola Mundo!!!",
    allUsers: (parent, args, {models}) => models.User.find(),
    getUser: (parent, args, {models}) => models.User.findOne(args)
  },
  Mutation: {
    createUser: async (parent, {password, ...args}, {models}) => {
      // models.User.create(args)
      try {
          const hashPassword = await bcrypt.hash(password, 10);
          const user = await models.User.create({...args, password: hashPassword });
          return (user && user._id)
      } catch (e) {
          return false;
      }
    }
  }
}
