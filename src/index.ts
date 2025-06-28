import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';


const server = new ApolloServer({
typeDefs
})


const url = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log("server ready at port", 4000)
