import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const {SERVER_PORT} = process.env

const HOST = '0.0.0.0'

app.listen(SERVER_PORT, HOST);