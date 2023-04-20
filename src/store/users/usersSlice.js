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
    }
]

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: initialUsers,
    },
    reducers: {
        editUser: usersService.editUser
    }
})  

export const { editUser } = usersSlice.actions;

export default usersSlice.reducer;