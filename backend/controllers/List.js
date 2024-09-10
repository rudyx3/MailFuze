import pool from "../db/config_db.js";

//Rudraa
//Backend request for list adding or using one

//GET REQ for all the list items inside the db

export const getUserLists = async (req, res) => {
  const dbClient = await pool.connect();

  try {
  
    const userId = req.userId;
    const userLists = await pool.query(
      `SELECT * FROM userlists WHERE userId = $1`,
      [userId]
    );

    if (userLists.rows.length === 0) {
      return res.status(200).json({ message: "No Lists Found" });
    }

    return res
      .status(200)
      .json({ userLists: userLists.rows, message: "User Email Lists Found" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    dbClient.release();
  }
};

//POST REQ for creating a new Email List

export const addNewList = async (req, res) => {
  const dbClient = await pool.connect();

  try {
    const userId = req.userId;
    const { listName, senderEmail } = req.body;

    const result = await pool.query(
      `
            INSERT INTO userLists(userId, listName, senderEmail) VALUES ($1, $2 ,$3) RETURNING *`,
      [userId, listName, senderEmail]
    );

    const newList = await result.rows[0];
    return res.status(200).json({ message: "New List Created", List: newList });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  } finally {
    dbClient.release();
  }
};

//Rajat
//Backend Request for Adding emails to the list
