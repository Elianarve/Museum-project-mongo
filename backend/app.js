import connection_db from "./database/connection_db.js";
import express from 'express';
import { PORT } from './config.js';
import SculptureRouter from './routes/SculptureRouter.js';
import chalk from "chalk";
import cors from 'cors';


const app = express(); //esto es indispensable

app.use(cors());

app.use(express.json()); //para q la app soporte formato json()

app.use('/api', SculptureRouter)  //primero la ruta y segundo el enrutado q va a tener

connection_db();

  app.listen(PORT,  () => {
    console.log(chalk.bgGreen(`La API se esta escuchando en el puerto http://localhost:${PORT}`)); //esto es indispensable
});

export default app;