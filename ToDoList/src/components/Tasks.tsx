import style from './Tasks.module.css';
import imgClipboard from '../assets/clipboard.svg';
import { Task } from './Task';

export function Tasks(){
    return (
        <div className={style.tasks}>
            <div className={style.header}>
                <div>
                    <span>Tarefas criadas</span>
                    <span>5</span>
                </div>
                <div>
                    <span>Concluídas</span>
                    <span>2 de 5</span>
                </div>
            </div>

            <div className={style.content}>
                <Task />
                <Task />
                <Task />
                <Task />
                <Task />
            </div>

            {/* <div className={style.nocontent}>
                <img src={imgClipboard} alt="" />
                <div>
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
            </div> */}
        </div>
    );
}