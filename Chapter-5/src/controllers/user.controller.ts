import { Request, Response } from "express";
import { getAllUsers, handleCreateUser, handleDeleteUser, handleUpdateUser, handleViewUser } from "../services/user.service";

const getHomePage = async (req: Request, res: Response) => {
    const users = await getAllUsers();
    return res.render("home.ejs", {
        users: users
    });
};

const getCreateUserPage = (req: Request, res: Response) => {
    return res.render("create.user.ejs");
};

const postCreateUser = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    await handleCreateUser(name, email, address);
    return res.redirect("/");
};

const postDeleteUser = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    await handleDeleteUser(id);
    return res.redirect("/");
};

const getViewUser = async (req: Request, res: Response) => {
    const id = req.params.id as string;
    const user = await handleViewUser(id);
    return res.render("view.user.ejs", {
        id: id,
        user: user
    });
};

const postUpdateUser = async (req: Request, res: Response) => {
    const { name, email, address } = req.body;
    const id = req.params.id as string;
    await handleUpdateUser(id, name, email, address);
    return res.redirect("/");
};

export { getHomePage, getCreateUserPage, postCreateUser, postDeleteUser, getViewUser, postUpdateUser };