import style from './Tasks.module.css';
import imgClipboard from '../assets/clipboard.svg';
import { Task } from './Task';
import { ITasksProps } from '../interfaces/ITasksProps';
import { ITask } from '../interfaces/ITask';
import { useState } from 'react';
import { NewTask } from './NewTask';
import React from 'react';

export function Tasks({ tasks } : ITasksProps){
    const [taskList, setTaskList] = useState<ITask[]>(tasks);
    const [, setState] = React.useState(false);
    function addTask(task : string) {

        let newId = 0;
        if(taskList.length === 0){
            newId = 1;
        }
        else {
            newId = taskList.reduce((max, shot) => {
                return shot.id > max.id ? shot : max
              }).id + 1;
        }
        setTaskList([...taskList, 
        { 
            id: newId,
            task: task,
            created: new Date()
        }]);
    }

    function deleteTask(id : number) {
        setTaskList(taskList.filter(x => x.id !== id));
    }

    function changeTask(id : number) {
        const task = taskList.find(x => x.id === id);
        if(task){
            if(task.finished === undefined){
                task.finished = new Date()
            }
            else {
                task.finished = undefined;
            }
            setState((prev) => !prev)
        }
    }

    return (
        <div>
            <NewTask onAddTask={addTask} />
            <div className={style.tasks}>
                <div className={style.header}>
                    <div>
                        <span>Tarefas criadas</span>
                        <span>{taskList.length}</span>
                    </div>
                    <div>
                        <span>Concluídas</span>
                        <span>{taskList.filter(x => x.finished !== undefined).length} de {taskList.length}</span>
                    </div>
                </div>
                {
                    taskList.length > 0 ? (
                        <div className={style.content}>
                            {taskList.sort((a, b) => {
                                if (!a.finished) return -1;
                                if (!b.finished) return 1;
                                if (a.finished && b.finished) {
                                    return a.finished.getTime() - b.finished.getTime();
                                }
                            return 0;
                            }).map(task => {
                                return <Task 
                                            task={task} 
                                            onDeleteTask={deleteTask} 
                                            onChangeTask={changeTask}
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
        </div>
    );
}