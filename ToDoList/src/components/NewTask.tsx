import styles from './NewTask.module.css';
import imgPlus from '../assets/plus.svg';

export function NewTask(){
    return (
        <form className={styles.newtask}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa'
            />
            <button type='submit'>
                Criar
                <img src={imgPlus} alt="" />
            </button>
        </form>
    );
}