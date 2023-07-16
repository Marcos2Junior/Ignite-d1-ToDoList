import styles from './Header.module.css';
import logo from '../assets/rocket.svg';

export function Header(){
    return (
        <header className={styles.header}>
            <img src={logo} alt="logotipo da ToDoList" />
            <div>
                <span>to</span>
                <span>do</span> 
            </div>
        </header>
    );
}