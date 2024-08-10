import express, { Express } from "express";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const server: Express = express();

const PORT = process.env.PORT || 9000;

server.use(helmet());
server.use(express.json());


server.listen(PORT, () => {
    console.log(`\n *** SERVER RUNNING ON PORT ${PORT} *** \n`);
})