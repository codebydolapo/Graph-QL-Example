export const typeDefs = `#graphql
type Game{
    id: ID!;
    title: String!;
    platform: [String!]!
}

type Review{
    id: ID!;
    rating: Int!;
    content: String!;
}

type Author{
    id: ID!;
    name: String!;
    verified: Boolean!;
}

type Query{
    reviews: [Review];
    games: [Game];
    author: [Author];
}
`

//there are five basic data types in graphql.
// we have ints, floats (decimals), strings, booleans, ID
//we can make our own types, but the above are the basic for 99% use cases 