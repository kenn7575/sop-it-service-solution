const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')

var prisma = new PrismaClient()

prisma.$connect()
    .then(() => console.log('Connected to database'))
    .catch(e => { console.log("Couldn't connect to database"); process.env.DATABASE_URL = "" } )

app.use(cors());
app.use(express.json());
app.set('json spaces', 2);
app.set('trust proxy', true)
app.enable('trust proxy')

var auth_level = 0

app.get("*", (req, res, next) => {
    if (req.url === '/favicon.ico') {return}
    var methodUrl = `${req.method} ${req.url}`
    var ip = `IP: ${req.ip.replace('::ffff:', '')}`
    auth_level = process.env.AUTHORIZATION.split(',').indexOf(req.headers.authorization)
    if ( !(process.env.AUTHORIZATION.split(',').indexOf(req.headers.authorization)) ) {
        return res.send({method: methodUrl, ip: ip, authorization: "Unauthorized"})
    }

    next()
}
    )

app.get("/", async (req, res) => {
    var tabeller = Object.keys(prisma).filter(t => !(t.startsWith('_') || t.startsWith('$')))

    var data = {}

    for (tabel of tabeller) {
        var getData = await prisma[tabel].findMany()
        data[tabel] = getData
        // console.log("Length of " + tabel + ": " + getData.length)
    }

    res.send(data)
})

app.get('/:table', async (req, res) => {
    if (req.params.table === 'favicon.ico') return

    try { res.send( await prisma[req.params.table].findMany() ) }
    catch (err) {
        res.send(`no table named "${req.params.table}"`)
}}
)

app.listen(3000)