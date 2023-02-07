import { buildSchema } from "graphql";

const schema = buildSchema(
    `
    type Product {
        id: ID!,
        name: String!,
        description: String!,
        code: Int!,
        price: Int!,
        stock: Int!,
    }

    input ProductInput {
        name: String!,
        description: String!,
        code: Int!,
        price: Int!,
        stock: Int!,
    }

    type Query {
        getById (id: ID!): Product,
        getAll: [Product]
    }

    type Mutation {
        saveProduct (data: ProductInput): Product,
        updateProduct (id: ID!, data: ProductInput): Product,
        deleteProduct (id: ID!):Product
    }
    `
)

export default schema;