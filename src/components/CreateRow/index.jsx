import { useState } from 'react';
import styles from './styles.module.css'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createUser } from '../../store/users/usersSlice';

const CreateRow = () => {
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [age, setAge] = useState(0)
    const [isValid, setIsValid] = useState(true);
    const dispatch = useDispatch()

    const toggleForm = () => {
      setShowForm(!showForm);
    };

    const handleCloseForm = () => {
      setName('');
      setEmail('');
      setAge(0)
      setShowForm(!showForm);
      setIsValid(true);
    }

    const handleEmailInput = (e) => {
      setIsValid(e.target.checkValidity());
      setEmail(e.target.value)
    }

    const handleAgeInput = (e) => {
      setAge(e.target.value);
  }

    const handleCreate = () => {
      if (age <= 0) {
        setAge(null);
      }
      isValid && name && email && age && dispatch(createUser({name, email, age}));
    }
    

    return (
      <div className={styles.createWrapper}>

      {showForm ? (
          <>
              <div className={styles.fieldsContainer}>

              <input
                placeholder='Name' 
                type="text" id="name" 
                name="name" 
                onChange={(e) => setName(e.target.value)}
              />
              <br />

              <input placeholder='Email'
                className={!isValid && styles.valid}
                type="email"
                id="email"
                name="email"
                onChange={handleEmailInput}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
              <br />

              <input
                className={age === null && styles.valid}
                placeholder='Age' 
                type="number" 
                id="age" 
                name="age" 
                onChange={handleAgeInput}
              />

              </div>

              <div className={styles.inputIcons}>
                  <AiOutlineClose onClick={handleCloseForm} className={styles.icon}/>
                  <AiOutlineCheck className={styles.icon} onClick={handleCreate}/>
              </div>
          </>
        ):
        <button className={styles.createBtn} onClick={toggleForm}>Create user</button>
          
      }
      </div>
    );
}
export default CreateRow;