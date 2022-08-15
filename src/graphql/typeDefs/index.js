import {gql} from 'apollo-server-express'

export const typeDefs = gql`
  type Query {
    hello: String
    users: [User!]!
  }

  type User {
    username: String!
    email: String!
    firstName: String!
    lastName: String!
    companyName: String!
    phoneNumber: String!
    country: String!
    avatarId: String!
    isDeleted: Boolean!
  }
`

export default typeDefs
