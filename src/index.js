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
const typeDefs = `
    type Query {
        hello: String! 
        name : String!
        location : String!
        bio: String!
    }
`



//resolvers - set of functions that we can run for the operations we create
// We define one query for every method that we setup.
const resolvers = {
    Query: {
        hello() {
            return 'This is my first query'
        },
        name(){
            return 'My name is Harsha'
        },
        location(){
            return 'Charlotte'
        },
        bio(){
            return 'Full Stack Developer'
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