import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import db from "./_db"



const resolvers = {
    Query: {
        games() {
            return db.games
        },
        game(_: any, args: { id: string; }) {
            return db.games.find((game) => game.id === args.id)
        },
        reviews() {
            return db.reviews
        },
        review(_: any, args: { id: string; }) {
            return db.reviews.find((item) => item.id === args.id)
        },
        authors() {
            return db.authors
        },
        author(_: any, args: { id: string; }) {
            return db.authors.find((author) => author.id === args.id)
        }
    },
    Game: {
        reviews(parent: { id: string; }) {
            return db.reviews.filter((review)=> review.game_id == parent.id)
        }
    },
    Author: {
        reviews(parent: { id: string; }){
            return db.reviews.filter(author => author.author_id === parent.id)
        }
    },
    Review: {
        author(parent: { author_id: string; }){
            return db.authors.find(author => author.id === parent.author_id)
        },
        games(parent: { game_id: string; }){
            return db.authors.find(game => game.id === parent.game_id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

const url = await startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log("server ready at port", 4000)
console.log(`visit http://localhost:${4000} to access your project`)
