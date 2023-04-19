import { useState } from 'react';
import styles from './styles.module.css'
import { AiFillEdit, AiFillDelete, AiOutlineCheck, AiOutlineClose } from "react-icons/ai";  

const TableItem = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState('Иван');
    const [email, setEmail] = useState('ivan@example.com');
    const [age, setAge] = useState(25);
  
    const handleEditClick = () => {
      setIsEditing(!isEditing);
    }
  
    const handleSaveClick = () => {
      setIsEditing(false);
      
    }
  
    return (
        <tr className={styles.tableItem}>
            <td>{Math.floor(Math.random() * 9000) + 1}</td>
            <td>
                {isEditing ? (
                    <input className={styles.nameInput} value={name} onChange={(e) => setName(e.target.value)} />
                ) : (
                    name
                )}
            </td>
            <td>
                {isEditing ? (
                    <input className={styles.emailInput} value={email} onChange={(e) => setEmail(e.target.value)} />
                ) : (
                    email
                )}
            </td>
            <td>
                {isEditing ? (
                    <input className={styles.ageInput} type='number' value={age} onChange={(e) => setAge(e.target.value)} />
                ) : (
                    age
                )}
            </td>
            <td className={styles.icons}>
                {isEditing ? (
                    <>
                        <AiOutlineCheck className={styles.icon} onClick={handleSaveClick}/>
                        <AiOutlineClose className={styles.icon} onClick={handleEditClick}/>
                    </>
                ) : (
                    <>
                        <AiFillEdit className={styles.icon} onClick={handleEditClick} />
                        <AiFillDelete className={styles.icon} />
                    </>

                )}
            </td>
        </tr>
    );
}
export default TableItem;