// import { Sequelize } from 'sequelize';

// async function connectToDB(dbURI) {
//   console.log(`Connecting to DB: ${dbURI}`);

//   const sequelize = new Sequelize(dbURI, {
//     logging: console.log, // set logging: false to disable outputting SQL queries to console
//     define: {
//       underscored: true,
//       timestamps: false,
//     },
//   });

//   try {
//     await sequelize.authenticate();
//     console.log('Connected to DB successfully!');
//   } catch (error) {
//     console.error('Unable to connect to DB:', error);
//   }

//   return sequelize;
// }

// export default connectToDB;

import {Sequelize} from 'sequelize'

async function connectTODB(dbURI) {
  console.log('Connecting to DB: ', dbURI);

  const sequelize = new Sequelize(dbURI, {
    logging: console.log,
    define: {
      timestamps:false,
      underscored: true,
    },
  });

  try {
    await sequelize.authenticate();
    console.log(`Connected to ${dbURI} successfully`);
  } catch (error) {
    console.error(`Connection failed`, error);
  }

  return sequelize;
} 

export default connectTODB;


