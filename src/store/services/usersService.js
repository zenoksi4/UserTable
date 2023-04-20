const editUser = (state, action) => {
    const {id, nameField, emailField, ageField} = action.payload
    let editUser = state.users.find((user) => (user.id === id))

    editUser.name = nameField;
    editUser.email = emailField;
    editUser.age = ageField;

}

const deleteUser = (state, action) => {
    const {id} = action.payload
    state.users = state.users.filter((user) => (
        user.id !== id
    ))
}

const createUser = (state, action) => {
    const {name, email, age} = action.payload
    const newUser = {
        id: Math.floor(Math.random() * 9000) + 1,
        name: name,
        email: email,
        age: age
    }
    state.users.push(newUser);
}


const usersService = {
    editUser,
    deleteUser,
    createUser
}

export default usersService;