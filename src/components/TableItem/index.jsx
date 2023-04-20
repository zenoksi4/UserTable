import { useState } from 'react';
import styles from './styles.module.css'
import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";  

const TableItem = ({id, name, email, age}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [nameField, setNameField] = useState(name);
    const [emailField, setEmailField] = useState(email);
    const [ageField, setAgeField] = useState(age);
  
    const handleEdit = () => {
      setIsEditing(!isEditing);
    }
  
    const handleSave = () => {
      setIsEditing(false);
      
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
                    <input className={styles.nameInput} value={nameField} onChange={(e) => setNameField(e.target.value)} />
                ) : (
                    name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input className={styles.emailInput} value={emailField} onChange={(e) => setEmailField(e.target.value)} />
                ) : (
                    email
                )}
            </td>
            <td>
                {isEditing ? (
                    <input className={styles.ageInput} type='number' value={ageField} onChange={(e) => setAgeField(e.target.value)} />
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
                        <AiFillDelete className={styles.icon}  />
                    </>

                )}
            </td>
        </tr>
    );
}
export default TableItem;