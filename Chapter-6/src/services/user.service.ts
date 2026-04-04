import { prisma } from "config/client";
import { getConnection } from "config/database";

const getAllUsers = async() => {
    const users = await prisma.user.findMany();
    return users;
};

const handleCreateUser = async (
    name: string,
    email: string,
    address: string
) => {
    await prisma.user.create({
        data: {
            name,
            email,
            address
        }
    });
};

const handleDeleteUser = async (id: string) => {
    await prisma.user.delete({
        where: {
            id: Number(id)
        }
    });
}

const handleViewUser = async (id: string) => {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id)
        }
    });
    return user;
};

const handleUpdateUser = async (id: string, name: string, email: string, address: string) => {
    await prisma.user.update({
        where: {
            id: Number(id)
        },
        data: {
            name,
            email,
            address
        }
    });
};

export { handleCreateUser, getAllUsers, handleDeleteUser, handleViewUser, handleUpdateUser };