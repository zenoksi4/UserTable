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


const usersService = {
    editUser,
    deleteUser
}

export default usersService;