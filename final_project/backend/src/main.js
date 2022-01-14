import { GraphQLServer, PubSub } from 'graphql-yoga';
import mongo from './mongo.js';
import db from './db';
import Query from './resolvers/Query';
import Mutation from './resolvers/Mutation'



const pubsub = new PubSub();

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Query,
        Mutation,
    },
    context: {
        db,
        pubsub
    }
});

mongo();

server.start({ port: process.env.PORT | 5000 }, () => {
    console.log(`The server is up on port ${process.env.PORT | 5000}!`);
});
