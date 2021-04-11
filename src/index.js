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
        greeting(name: String, position: String): String!
        me: User!
        post: Post!
        add(a: Float!, b: Float!) : Float!
    }

    type User {
        id: ID!
        name: String!
        age: Int
        email: String!
    }

    type Post{
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }

`



//resolvers - set of functions that we can run for the operations we create
// We define one query for every method that we setup.
const resolvers = {
    Query: {
        me(){
            return {
                id: 'abs123',
                name: 'Siddharth',
                email: 'siddharth.landers@gmail.com',
                age: 23
            }
        },

        post(){
            return {
                id: 'abc123',
                title: 'War of the worlds',
                body: 'Book by Stephen Liotti',
                published: true
            }
        },

        greeting(parent,args,ctx,info){
            console.log(args)
            if(args.name && args.position){
                return 'Hello ' + args.name + '. You are my favorite '+ args.position;
            }
            return 'Hello';
            
        },

        add(parent,args,ctx,info){
            console.log(args.a + " "+args.b)
            return args.a + args.b
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