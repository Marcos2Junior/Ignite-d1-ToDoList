import styles from './NewTask.module.css';
import imgPlus from '../assets/plus.svg';

import { useState } from 'react';
import { INewTaskProps } from '../interfaces/INewTaskProps';

export function NewTask( { onAddTask } : INewTaskProps ){

const [newTask, setNewTask] = useState('');

function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onAddTask(newTask);
    setNewTask('');
}

function handleNewTaskChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTask(event.target.value);
}

function handleNewTaskInvalid(event: React.ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('Esse campo é obrigatório!');
}

    return (
        <form
            onSubmit={handleCreateNewTask}
            className={styles.newtask}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa'
                value = {newTask}
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                required
            />
            <button type='submit'>
                Criar
                <img src={imgPlus} alt="" />
            </button>
        </form>
    );
}