import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortUsers } from '../../store/users/usersSlice';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import styles from './styles.module.css'



const SortSelect = () => {
    const [option, setOption] = useState('');
    const [isDesc, setIsDesc] = useState(true);
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();


    const handleSelectSort = (e) => {
        const option = e.target.value
        setOption(option);
        dispatch(sortUsers({option, isDesc}));

    }


    const handleArrowDown = () => {
        setIsDesc(true);
        dispatch(sortUsers({option, isDesc: true})); 
    }
    
    const handleArrowUp = () => {
        setIsDesc(false);
        dispatch(sortUsers({option, isDesc: false})); 
    }

    return (
        <div className={styles.sort}>
            <select className={styles.sortSelect} onChange={ (e) => {handleSelectSort(e)} }>
                <option  value="">Sort by </option>

                {Object.keys(users[0]).map((key)=> (
                    <option value={key}>
                        {key}
                    </option>
                ))}

            </select>
            {option &&
                <>
                    { isDesc ?
                            <AiOutlineArrowUp onClick={handleArrowUp} className={styles.sortArrow}/>

                        :
                            <AiOutlineArrowDown onClick={handleArrowDown} className={styles.sortArrow}/>
                    }
                </>
            }   
        </div>
    );
    }
export default SortSelect;