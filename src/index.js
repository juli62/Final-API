/**
 * Basic user login and register
 * task upload , delete and completed. Saved in the db
 */

import app from './app';
import {config} from 'dotenv'
import './database'
config()

const port = process.env.PORT

app.listen(port)
console.log(`Servidor live en ${port}`)
