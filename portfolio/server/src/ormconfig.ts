import { DataSource } from "typeorm";
import { User } from "./models/User";
import * as dotenv from 'dotenv';
dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USER,
  password: "bombon",
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [User],

});

