import mongoose from 'mongoose'
import {config} from 'dotenv'
config()
// mongodb+srv://juli62:<password>
console.log(process.env.DB_USER)
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.r7ddxni.mongodb.net/demo`,
)
.then((res) => console.log(`Conexion exitosa a DB ${res.connection[0]}`))
.catch(console.error)