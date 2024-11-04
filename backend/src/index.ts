import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const server: Express = express();
const port = process.env.PORT || 3000;


server.listen(port, () => {
    console.log(`\n *** SERVER RUNNING ON PORT ${port} *** \n`)
})