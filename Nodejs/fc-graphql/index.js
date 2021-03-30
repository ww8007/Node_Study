const express = require('express');
const bodyParser = require('body-parser');
const {makeExecutableSchema} = require('graphql-tools')
const {graphqlExpress, graphiqlExpress} = require('apollo-server-express')

const typeDefs = `
    type Lang {
     id: Int,
    name: String!
    }
    type Query {
    getLangs(name: String): [Lang]
}
`
const langs = [{
        id: 0,
        name: 'node'
    },{
        id: 1,
        name: 'python'
    }
]

const resolvers = {
    Query: {
        getLangs: () => langs
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})
  
const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));
 
app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql',
}))

 app.listen(PORT, () => console.log(`Runnig server`));