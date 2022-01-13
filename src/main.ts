import { GraphQLServer, PubSub } from "graphql-yoga";
import { Database } from "./db/read";
import { resolvers } from "./resolvers/resolver";
import { Context } from "./interface/ctx";

const server: GraphQLServer = new GraphQLServer({
  typeDefs: "./src/query/schema.graphql",
  resolvers,
  context: (request) => {
    return {
      request,
      db: {
        users: Database.User(),
        courses: Database.Courses(),
      },
      pubsub: new PubSub(),
    };
  },
});

server.start(({ port }) => {
  console.log(`server on port :${port}`);
  console.log(`http://localhost:${port}`);
});
