const { gql } = require("apollo-server");

module.exports = gql`
  type Trainer {
    id: ID!
    name: String!
    description: String!
    email: String!
    phoneNumber: String!
    createdAt: String!
  }
  type Person {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phoneNumber: String!
    healthNotes: String!
    heardFrom: String!
    status: String!
    createdAt: String!
  }
  type Training {
    id: ID!
    trainingName: String!
    trainingDescription: String!
    trainerName: String
    trainer: ID
    createdAt: String!
  }
  type dayTraining {
    id: ID!
    time: String
    training: ID!
    trainer: ID!
    createdAt: String!
  }
  type Day {
    id: ID!
    date: String
    dayTrainings: [dayTraining]
    createdAt: String!
  }
  type Query {
    getTrainers: [Trainer]
    getTrainer(trainerId: ID!): Trainer
    getTrainings: [Training]
    getTraining(trainingId: ID!): Training
    getDays: [Day]
    getPersons: [Person]
  }

  type Admin {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterAdminInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Mutation {
    register(registerAdminInput: RegisterAdminInput): Admin!
    login(username: String!, password: String!): Admin!

    createTrainer(
      name: String!
      description: String!
      email: String!
      phoneNumber: String!
    ): Trainer!
    deleteTrainer(trainerId: ID!): String!
    editTrainer(
      name: String
      description: String
      email: String
      phoneNumber: String
      trainerId: ID!
    ): Trainer!
    createTraining(
      trainingName: String!
      trainingDescription: String!
      trainerId: ID!
    ): Training!
    deleteTraining(trainingId: ID!): String!
    editTraining(
      trainingName: String
      trainingDescription: String
      trainer: ID
      trainingId: ID!
    ): Training!
    createDay(date: String!): Day!
    createPerson(
      firstName: String!
      lastName: String!
      email: String!
      phoneNumber: String!
      status: String!
      heardFrom: String!
      healthNotes: String
    ): Person!
  }
`;
