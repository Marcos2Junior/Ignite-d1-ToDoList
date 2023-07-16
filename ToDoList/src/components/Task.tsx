import style from './Task.module.css';

import trashImg from '../assets/trash.svg';
import trashHoverImg from '../assets/trash-hover.svg';

import checkImg from '../assets/check.svg';
import checkHoverImg from '../assets/check-hover.svg';

import noCheckImg from '../assets/nocheck.svg';
import noCheckHoverImg from '../assets/nocheck-hover.svg';

import { useState } from 'react';
import { ITask } from '../interfaces/ITask';

export function Task({ ...Task } : ITask) {

    const [checkOver, setCheckOver] = useState(false);
    const [trashOver, setTrashOver] = useState(false);

    const selectedImgCheckHover = Task.finished !== undefined ? checkHoverImg : noCheckHoverImg;
    const selectedImgCheck = Task.finished !== undefined ? checkImg : noCheckImg;

    return (
        <div className={style.task}>
            <button
                onMouseOver={() => setCheckOver(true)}
                onMouseOut={() => setCheckOver(false)}
                className={style.nocheck}>
                    <img 
                        src={checkOver ? selectedImgCheckHover : selectedImgCheck}
                        alt="" 
                    />
            </button>
            <span>{Task.task}</span>
            <button 
                onMouseOver={() => setTrashOver(true)}
                onMouseOut={() => setTrashOver(false)}
                className={style.trash}
            >
                <img 
                    src={trashOver ? trashHoverImg : trashImg} 
                />
            </button>
        </div>
    );
}