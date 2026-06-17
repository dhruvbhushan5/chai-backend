import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN
}))
// use is used for middleware

app.use(express.json({
    limit: "16kb"
}))
// express.json means that i am alowing json data on my server and also setting the limit to 16kb this is used when we submit a form

app.use(express.urlencoded())
//express.urlencoded() converts form data sent by a browser (application/x-www-form-urlencoded) into a JavaScript object accessible through req.body.

app.use(express.static("public"))
// this is used to store images videos on my server only in public folder

app.use(cookieParser())
// this is used so that on user browser i can access there cookieparser and use cred opretions

export {app}