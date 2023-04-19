import { useState } from 'react';
import styles from './styles.module.css'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';

const SortSelect = () => {
    const [isSelect, setIsSelect] = useState(false);
    const [isDesc, setIsDesc] = useState(true);

    const handleSelectSort = (e) => {
        e.target.value ? setIsSelect(true): setIsSelect(false)
    }

    return (
        <div className={styles.sort}>
            <select className={styles.sortSelect} onChange={ (e) => {handleSelectSort(e)} }>
                <option  value="">Sort by </option>

                <option value='id'>
                            id
                </option>
            </select>
            {isSelect &&
                <>
                    { isDesc ?
                            <AiOutlineArrowDown onClick={() => setIsDesc(!isDesc)} className={styles.sortArrow}/>
                        :
                            <AiOutlineArrowUp onClick={() => setIsDesc(!isDesc)} className={styles.sortArrow}/>

                    }
                </>
            }   
        </div>
    );
    }
export default SortSelect;