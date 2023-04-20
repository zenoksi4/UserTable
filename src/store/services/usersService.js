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


const sortUsers = (state, action) => {
    const {option, isDesc} = action.payload

    if (option === 'id') {
        isDesc ?
            state.users.sort((a, b) => a.id - b.id)
        :
            state.users.sort((a, b) => b.id - a.id)
    } else if (option === 'name') {
        isDesc ?
            state.users.sort((a, b) => a.name.localeCompare(b.name))
        :
            state.users.sort((a, b) => b.name.localeCompare(a.name))
    } else if (option === 'email') {
        isDesc ?
        state.users.sort((a, b) => a.email.localeCompare(b.email))
    :
        state.users.sort((a, b) => b.email.localeCompare(a.email))
    } else if (option === 'age') {
        isDesc ?
        state.users.sort((a, b) => a.age - b.age)
    :
        state.users.sort((a, b) => b.age - a.age)
    }
}

const usersService = {
    editUser,
    deleteUser,
    createUser,
    sortUsers
}

export default usersService;