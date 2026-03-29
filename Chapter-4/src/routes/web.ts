import express, { Express } from "express";
import { getHomePage, getCreateUserPage, postCreateUser } from "../controllers/user.controller";
const route = express.Router();

const webRoutes = (app: Express) => {
    route.get("/", getHomePage);
    route.get("/create-user", getCreateUserPage);
    route.post("/handle-create-user", postCreateUser);

    app.use("/", route);
};

export default webRoutes;