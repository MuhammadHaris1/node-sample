import express from 'express'
import {Model} from 'objection'
//import knexFile from './database/knexfile.js'
import bodyParser from 'body-parser'
import knex from 'knex'
import users from './routes/users.js'


const nx = knex(/*knexFile.developent*/
{
    client: 'mysql',
    connection: {
      database: 'my_knex',
      user:'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  })
Model.knex(nx)
const app = express()
app.use(bodyParser.json())
app.use('/api',users)

await app.listen(3000,()=>{

    console.log("App Now Running")
})