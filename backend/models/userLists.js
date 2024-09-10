//rudraa
//create adding table schema to the db

//rudraa
//create adding table schema to the db

import pool from "../db/config_db.js";

const createUserLists = async () => {
  try {
    await pool.connect();
    await pool.query(`
    CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
    `);
    await pool.query(`
        CREATE TABLE userlists (
            listId UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
            userId VARCHAR(255) NOT NULL,
            listName VARCHAR(100) NOT NULL,
            senderEmail VARCHAR(100) DEFAULT NULL, 
            createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
    
    `);

    console.log("Table Created");
  } catch (err) {
    console.log(err);
  }
};

const addAuserLIst = async () => {
  await pool.connect();
  await pool.query(`
    INSERT INTO userlists(userId, listName, senderEmail) VALUES('123912','test list', 'rudraapatel@gmail.com');
`);
  console.log("addded a record");
};

addAuserLIst();
