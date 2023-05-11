const express = require('express');
const app = express();
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcrypt');

var prisma = new PrismaClient()

prisma.$connect()
    .then(() => console.log('Connected to database'))
    .catch(e => { console.log("Couldn't connect to database"); process.env.DATABASE_URL = "" } )

app.use(cors({ origin: true }))
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.set('json spaces', 2);
app.set('trust proxy', true)
app.enable('trust proxy')

var auth_level = 0

app.get("*", (req, res, next) => {
    if (req.url === '/favicon.ico') {return}
    var methodUrl = `${req.method} ${req.url}`
    var ip = `IP: ${req.ip.replace('::ffff:', '')}`
    auth_level = process.env.AUTHORIZATION.split(',').indexOf(req.headers.authorization)
    // if ( auth_level === -1 ) {return res.send({method: methodUrl, ip: ip, authorization: "Unauthorized"})}

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

const salt = 10;

app.get('/test', (req, res) => {
    const password = '$2y$10$WiHx.zshe1ngYPHNVZcGj.OAUPAK2phWDELzCLEet4ZOySfrFvNcy'
    const password2 = '$2y$10$hA2PFMOfqGQICg83J8UYDOCntSx9IOu1YnLDOsHbwfnXzlmsUWt1e'
    const password3 = '$2y$10$.kmLO4lsi0NvuxNukbVUMeF.su0BcrQTjxE6eXoU/NI/zAgzwP0v2'

    const users = require('./users.json')

    const user = users.find(u => u.username === req.body.username)

    if (user === undefined) return res.send("User not found")

    bcrypt.hash(user.password, salt, (err, hash) => {
        res.send(hash)
    })

    bcrypt.compare(req.body.password, user.password.replace("$2y$", "$2b$"), (err, result) => {
        console.log(result)
    })
})

app.get('/:table', async (req, res) => {
    if (req.params.table === 'favicon.ico') return

    try { res.send( await prisma[req.params.table].findMany() ) }
    catch (err) {
        res.send(`no table named "${req.params.table}"`)
}}
)

app.listen(3000)