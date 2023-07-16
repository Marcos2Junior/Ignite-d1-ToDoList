import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import style from './Task.module.css';

import trashImg from '../assets/trash.svg';
import trashHoverImg from '../assets/trash-hover.svg';

import checkImg from '../assets/check.svg';
import checkHoverImg from '../assets/check-hover.svg';

import noCheckImg from '../assets/nocheck.svg';
import noCheckHoverImg from '../assets/nocheck-hover.svg';

import { useState } from 'react';
import { ITaskProps } from '../interfaces/ITaskProps';

export function Task({ task, onChangeTask, onDeleteTask } : ITaskProps) {
    const [checkOver, setCheckOver] = useState(false);
    const [trashOver, setTrashOver] = useState(false);

    const selectedImgCheckHover = task.finished !== undefined ? checkHoverImg : noCheckHoverImg;
    const selectedImgCheck = task.finished !== undefined ? checkImg : noCheckImg;

    function showInfo() {
        let msg = `Tarefa #${task.id}\n\nCriada em: ${dateFormatted(task.created)}`;
        if(task.finished !== undefined){
            msg += `\nFinalizada: ${dateFormatted(task.finished)}`;
        }
        else {
            msg += '\nNão finalizada';
        }
        msg += `\n\nDetalhes: ${task.task}`;

        alert(msg);
    }

    function dateFormatted(date: Date){
        return format(date, "d 'de' LLLL 'às' HH:mm'h' 'de' yyyy", {
            locale: ptBR
        });
    }

    return (
        <div className={style.task} onDoubleClick={showInfo} title='Duplo clique para mais detalhes sobre a tarefa'>
            <button
                onMouseOver={() => setCheckOver(true)}
                onMouseOut={() => setCheckOver(false)}
                onClick={() => onChangeTask(task.id)}
            >
                    <img 
                        src={checkOver ? selectedImgCheckHover : selectedImgCheck}
                        alt="" 
                    />
            </button>
            <span className={task.finished !== undefined ? style.checked : ''} >{task.task}</span>
            <button 
                onMouseOver={() => setTrashOver(true)}
                onMouseOut={() => setTrashOver(false)}
                onClick={() => onDeleteTask(task.id)}
                className={style.trash}
            >
                <img 
                    src={trashOver ? trashHoverImg : trashImg} 
                />
            </button>
        </div>
    );
}