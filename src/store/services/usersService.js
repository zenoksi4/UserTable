const editUser = (state, action) => {
    const {id, nameField, emailField, ageField} = action.payload
    let editUser = state.users.find((user) => (user.id === id))

    editUser.name = nameField;
    editUser.email = emailField;
    editUser.age = ageField;

}


const usersService = {
    editUser,
}

export default usersService;