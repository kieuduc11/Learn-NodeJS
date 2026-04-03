import express, { Express } from "express";
import { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser } from "../controllers/user.controller";
const route = express.Router();

const webRoutes = (app: Express) => {
    route.get("/", getHomePage);
    route.get("/create-user", getCreateUserPage);
    route.post("/handle-create-user", postCreateUser);
    route.post("/handle-delete-user/:id", postDeleteUser);
    route.get("/handle-view-user/:id", getViewUser);
    route.post("/handle-update-user/:id", postUpdateUser);

    app.use("/", route);
};

export default webRoutes;