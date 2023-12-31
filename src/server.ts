import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDefs from "./gql/typeDefs";
import resolvers from "./gql/resolvers"

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
