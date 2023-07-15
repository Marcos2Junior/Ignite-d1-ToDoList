import styles from './Header.module.css';
import logo from '../assets/rocket.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="logotipo da ToDoList" />
            <h1>todo</h1>
        </header>
    );
}