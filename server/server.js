const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');
const corsOptions = {
    origin: function (origin, callback) {
        callback(null, true)
    }
};

// Then pass them to cors:
app.use(cors(corsOptions));

const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const result = excelToJson({
    source: fs.readFileSync('test.xlsx')
});
const table = result.test

app.get('/api/get', (req, res) => {
    const orgn = req.query.orgn
    table.filter((line) => line.A === orgn || line.B === orgn).length > 0 ?
        res.send({res:true})
        :
        res.send({res:false})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
