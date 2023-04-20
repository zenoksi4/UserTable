import { useState } from 'react';
import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";  
import { useDispatch } from 'react-redux';
import { deleteUser, editUser } from '../../store/users/usersSlice';
import styles from './styles.module.css'


const TableItem = ({id, name, email, age}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [nameField, setNameField] = useState(name);
    const [emailField, setEmailField] = useState(email);
    const [ageField, setAgeField] = useState(age);
    const [isValidEmail, setIsValidEmail] = useState(true);
    const dispatch = useDispatch()
  
    const handleEdit = () => {
        setIsEditing(!isEditing);
    }

    const handleDelete = () => {
        dispatch(deleteUser({id}))
    }
  
    const handleSave = () => {
        if (isValidEmail && nameField && ageField) {
            dispatch(editUser({id, nameField, emailField, ageField}))
        } else {
            return;
        }

        setIsEditing(false);
      
    }
    const handleEmailInput = (e) => {
        setIsValidEmail(e.target.checkValidity());
        setEmailField(e.target.value)
    } 
    const handleAgeInput = (e) => {
        if (e.target.value <= 0) {
            setAgeField(null);
        } else {
            setAgeField(e.target.value);
        }

    }

    const handleClose = () => {
        setIsEditing(false)
        setNameField(name);
        setEmailField(email);
        setAgeField(age);
    }
  
    return (
        <tr className={styles.tableItem}>
            <td>{id}</td>
            <td>
                {isEditing ? (
                    <input 
                        className={`${styles.nameInput} ${!nameField && styles.valid}`} 
                        value={nameField}  
                        onChange={(e) => setNameField(e.target.value)} 
                    />
                ) : (
                    name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input 
                        className={`${styles.emailInput} ${!isValidEmail && styles.valid}`} 
                        value={emailField} 
                        onChange={handleEmailInput} 
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        required
                    />
                ) : (
                    email
                )}
            </td>
            <td>
                {isEditing ? (
                    <input 
                        className={`${styles.ageInput} ${!ageField && styles.valid}`} 
                        type='number' 
                        value={ageField} 
                        onChange={handleAgeInput} 
                    />
                ) : (
                    age
                )}
            </td>
            <td className={styles.icons}>
                {isEditing ? (
                    <>
                        <AiOutlineCheck className={styles.icon} onClick={handleSave}/>
                        <AiOutlineClose className={styles.icon} onClick={handleClose}/>
                    </>
                ) : (
                    <>
                        <AiFillEdit className={styles.icon} onClick={handleEdit} />
                        <AiFillDelete className={styles.icon}  onClick={handleDelete}/>
                    </>

                )}
            </td>
        </tr>
    );
}
export default TableItem;