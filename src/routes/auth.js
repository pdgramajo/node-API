import express from 'express';
import sql from 'mssql';
const router = express.Router();

router.post('/', (req, res) => {
    const { credentials } = req.body;
    console.log('****** credentials', credentials);

    const config = {
        user: process.env.USER,
        password: process.env.PASSWORD,
        server: process.env.SERVER,
        database: process.env.database
    };
    const value = 1;

    sql.connect(config).then(() => {
        //return sql.query`select * from Authors where id = ${value}`
        return sql.query`select top 300 * from Users`
    }).then(result => {
        res.status(200).json({ data: result });
    }).catch(err => {
        // ... error checks
        res.status(400).json({ errors: { global: err } })
    })

    sql.on('error', err => {
        // ... error handler
        res.status(400).json({ errors: { global2: err } })
    })


});


export default router;