const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
    type Product {
        id: ID!
        name: String
        price: Int
        description: String
    }
    type Query{
        getProduct( id : ID! ) : Product
    }
`);

const products = [
  {
    id: 1,
    name: "첫번째 데이터",
    price: 2000,
    description: "hi",
  },
  {
    id: 2,
    name: "두번째 데이터",
    price: 4000,
    description: "bye",
  },
];

const root = {
  getProduct: ({ id }) =>
    products.find((proudct) => proudct.id === parseInt(id)),
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("running server port 4000");
});
