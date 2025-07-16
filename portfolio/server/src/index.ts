import "reflect-metadata";
import express from "express";
import cors from "cors";
import { AppDataSource } from "./ormconfig";
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_, res) => res.send("API funcionando"));

AppDataSource.initialize()
  .then(() => {
    console.log("📦 Base de datos conectada");
    app.listen(process.env.PORT || 5432, () => {
      console.log(`🚀 Servidor corriendo en puerto ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ Error al conectar BD:", err));


