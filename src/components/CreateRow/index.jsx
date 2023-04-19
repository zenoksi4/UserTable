import { useState } from 'react';
import styles from './styles.module.css'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';

const CreateRow = () => {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => {
      setShowForm(!showForm);
    };
  return (
    <div className={styles.createWrapper}>

    {showForm ? (
        <>
            <div className={styles.fieldsContainer}>
            <input placeholder='Name' type="text" id="name" name="name" />
            <br />
            <input placeholder='Email' type="email" id="email" name="email" />
            <br />
            <input placeholder='Age' type="number" id="age" name="age" />
            </div>
            <div className={styles.inputIcons}>
                <AiOutlineClose onClick={toggleForm} className={styles.icon}/>
                <AiOutlineCheck className={styles.icon}/>
            </div>
        </>
      ):
      <button className={styles.createBtn} onClick={toggleForm}>Create</button>
        
    }
    </div>
  );
}
export default CreateRow;