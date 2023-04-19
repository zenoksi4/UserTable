import TableItem from '../TableItem';
import styles from './styles.module.css'

const Table = () => {
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
        <TableItem/>
        <TableItem/>
        <TableItem/>



        </tbody>
    </table>
  
  );
}
export default Table;