import { createSlice } from "@reduxjs/toolkit";
import usersService from "../services/usersService";

const initialUsers = [{
        id: Math.floor(Math.random() * 9000) + 1,
        name: 'Ivan',
        email: 'ivan@example.com',
        age: 25
    },
    {
        id: Math.floor(Math.random() * 9000) + 1,
        name: 'Sasha',
        email: 'sasha@example.com',
        age: 32
    },
    {
        id: Math.floor(Math.random() * 9000) + 1,
        name: 'John',
        email: 'john@example.com',
        age: 29
    },
    {
        id: Math.floor(Math.random() * 9000) + 1,
        name: 'Amanda',
        email: 'amanda@example.com',
        age: 39
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: initialUsers,
    },
    reducers: {
        editUser: usersService.editUser,
        deleteUser: usersService.deleteUser,
        createUser: usersService.createUser,
        sortUsers: usersService.sortUsers
    }
})  

export const { editUser, deleteUser, createUser, sortUsers } = usersSlice.actions;

export default usersSlice.reducer;