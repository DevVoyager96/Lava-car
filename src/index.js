import e from "express";
import "dotenv/config";
import "./db.js"

import cliente_router from "./routes/cliente_route.js"

const app = e();

app.use(e.json())

app.use("/cliente", cliente_router)

app.listen(process.env.API_PORT, () => console.log("servidor rodando"))