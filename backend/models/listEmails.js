//rudraa
//create adding table schema to the db

import pool from "../db/config_db.js";

const createListEmail = async () => {
  try {
    await pool.connect();
    await pool.query(`
            CREATE TABLE listEmails (
                listId UUID NOT NULL,
                listEmail VARCHAR(100) NOT NULL,
                senderEmail VARCHAR(100) NOT NULL,
                PRIMARY KEY (listId, listEmail, senderEmail),
                FOREIGN KEY (listId) REFERENCES userlists(listId) ON DELETE CASCADE
            );
            
    `);

    console.log("Table Created");
  } catch (err) {
    console.log(err);
  }
};

createListEmail();
