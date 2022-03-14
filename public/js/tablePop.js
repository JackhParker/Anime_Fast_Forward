const mysql = require(`mysql`);
const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
    fetchData(res);
    console.log(`done. displayed data!!`);
})

const db = mysql.createConnection({
    host: `localhost`,
    user: `root`,
    password: `BigPassWord!??69`,
    database: `animePList_db`,
});

db.connect((err) => {
    if (err) {throw err;}
    console.log(`connected to the database!!`);
});

executeQuery((sql, cb) => {
    db.query(sql, (err, result, fields) =>{
        if (err) {throw err;}
        cb(result);
    });
});

fetchData((res) => {
    executeQuery(`select * from animePList_db`, (result) => {
        console.log(result);
        res.write(`<table><tr>`);
        for(const column in result[0]) {
            res.write(`<tb><label>` + column + `</lable></tb>`);
            res.write(`</tr>`);
        }
        for(const row in result) {
            res.write(`<tr>`);
            for(const column in result[row]) {
                res.write(`<td><label>`, + result[row][column] + `</label></td>`);
            }
            res.write(`</tr>`);
        }
        res.end(`</table>`);
    });
});

app.listen(3001, () => {
    console.log(`listening to port 3001`);
});