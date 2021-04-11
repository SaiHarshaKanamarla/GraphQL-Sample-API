// import  { message,name, getGreeting } from './mymodule';
// import myCurrentLocation from './mymodule';
// import {subtract} from './math';
// import add from './math';

// console.log(message+" "+name);
// console.log(myCurrentLocation);

// console.log(getGreeting('Harsha'))

// console.log(subtract(6,5));
// console.log(add(6,5));

import { GraphQLServer } from 'graphql-yoga';


// type definitions - (schema) - this defines the operation we can perform on the API and custom data types
//graphQL code runs in the typeDefs - the schema
// ! ensures that we always get that return type
// Scalar types in GraphQL - String, Boolean, ID, Float and Int
const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float!
    }
`



//resolvers - set of functions that we can run for the operations we create
// We define one query for every method that we setup.
const resolvers = {
    Query: {
        id(){
            return 'abc123'
        },
        name(){
            return 'Harsha'
        },
        age(){
            return 23
        },
        employed(){
            return true
        },
        gpa(){
            return 3.8
        }
    }
}

const server = new GraphQLServer({
    typeDefs: typeDefs,
    resolvers: resolvers
});

server.start(()=>{
    console.log("The server is up")
});