import style from './Tasks.module.css';
import imgClipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { ITaskList } from '../interfaces/ITaskList';

export function Tasks({tasks} : ITaskList){
    return (
        <div className={style.tasks}>
            <div className={style.header}>
                <div>
                    <span>Tarefas criadas</span>
                    <span>{tasks.length}</span>
                </div>
                <div>
                    <span>Concluídas</span>
                    <span>{tasks.filter(x => x.finished !== undefined).length} de {tasks.length}</span>
                </div>
            </div>
            {
                tasks?.length > 0 ? (
                    <div className={style.content}>
                        {tasks.map(task => {
                            return <Task 
                                        task={task.task} 
                                        id={task.id} 
                                        created={task.created} 
                                        finished={task.finished} 
                                        key={task.id} 
                                    />
                        })}
                    </div>                  
                ) :
                    <div className={style.nocontent}>
                        <img src={imgClipboard} alt="" />
                        <div>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
            }
        </div>
    );
}