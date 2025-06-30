export const typeDefs = `#graphql
type Game{
    id: ID!,
    title: String!,
    platform: [String!]!,
    reviews: [Review!]
}

type Review{
    id: ID!,
    rating: Int!,
    content: String!,
    game: Game!,
    author: Author,
}

type Author{
    id: ID!,
    name: String!,
    verified: Boolean!,
    reviews: [Review]!z
}

type Query{
    reviews: [Review],
    review(id: ID!): Review
    games: [Game],
    game(id: ID!): Game
    authors: [Author],
    author(id: ID!): Author
}
`

//there are five basic data types in graphql.
// we have ints, floats (decimals), strings, booleans, ID
//we can make our own types, but the above are the basic for 99% use cases 