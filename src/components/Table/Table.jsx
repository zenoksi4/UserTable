import { useSelector } from 'react-redux';
import TableItem from '../TableItem';
import styles from './styles.module.css'

const Table = () => {
  const { users } = useSelector((state) => state.users);

  return (
    <table className={styles.contentTable}>
        <thead className={styles.headerTable}>
            <tr>
                <th>id</th>
                <th>name</th>
                <th>email</th>
                <th>age</th>
                <th>icons</th>
            </tr>
        </thead>

        <tbody>
          {users.map((user)=> (
              <TableItem id={user.id} name={user.name} email={user.email} age={user.age}/>
          ))}

        </tbody>
    </table>
  
  );
}
export default Table;