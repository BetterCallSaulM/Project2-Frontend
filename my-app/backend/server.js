const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express;
app.use(cors());

const db = mysql.createConnection({
    host: 'dcrhg4kh56j13bnu.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'zdqe4q2ohnsjim17',
    password: 't3dxjsi7y4p5dsrp',
    database: 'bbrose4nmhlw9l3y'
})

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        return;
    }
    console.log('Connected to the database');
});

app.post('/signup', (req, res) => {
    const row = req.body.row; //Row to insert
    const insertRow = "INSERT INTO products (name, email, password) VALUES (?, ?, ?)"; //Insert query

    db.query(insertRow, [row], (err, rows) => { //Insert row into database
        if (err) throw err;
        console.log('inserted: ' + row); //Print row inserted
    });

    console.log(row);
});

// app.post("/signup", async (req, res) => {
//     let name = req.body.name;
//     let email = req.body.email;
//     let password = req.body.password;
//     console.log(name, email, password); // Log received data for debugging

//     let sql = `INSERT INTO users (name, email, passwrd) VALUES (?, ?, ?)`;
//     let params = [name, email, password];

//     db.query(sql, params, (error, results) => {
//         if (error) {
//             console.error('Error inserting data:', error); // Log any error from the query
//             return res.status(500).json({ message: 'Error inserting data' });
//         }
//         console.log('Data inserted:', results); // Log the results of the insertion
//         res.status(201).json({ message: 'User registered successfully' }); // Send a success response
//     });
//   });


app.listen(8081, ()=>{
    console.log("listening");
});