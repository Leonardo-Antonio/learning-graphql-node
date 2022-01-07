import { GraphQLServer } from "graphql-yoga";
import { Database } from "./db/read";
import { resolvers } from "./resolvers/resolver";


const server: GraphQLServer = new GraphQLServer({
  typeDefs: "./src/query/schema.graphql",
  resolvers,
  context: {
    users: Database.User(),
    courses: Database.Courses()
  },
});

server.start(({ port }) => {
  console.log(`server on port :${port}`);
  console.log(`http://localhost:${port}`);
});
