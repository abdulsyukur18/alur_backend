import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import router from './router/index.js'


const app = express()
const port = 8000

mongoose.connect
  ('mongodb://localhost:27017/alur_backend',
    { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', error => console.log(error))
db.once('open', () => console.log('berhasil terkoneksi ke database'))

app.use(cors())
app.use(express.json())
app.use('/', router)

app.listen(port, () => console.log(`berjalan pada port ${port}`))