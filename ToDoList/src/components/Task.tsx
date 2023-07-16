import style from './Task.module.css';

import trashImg from '../assets/trash.svg';
import trashHoverImg from '../assets/trash-hover.svg';

import checkImg from '../assets/check.svg';
import checkHoverImg from '../assets/check-hover.svg';

import noCheckImg from '../assets/nocheck.svg';
import noCheckHoverImg from '../assets/nocheck-hover.svg';

import { useState } from 'react';

export function Task() {

    const [checkOver, setCheckOver] = useState(false);
    const [trashOver, setTrashOver] = useState(false);

    return (
        <div className={style.task}>
            <button
                onMouseOver={() => setCheckOver(true)}
                onMouseOut={() => setCheckOver(false)}
                className={style.nocheck}>
                    <img 
                        src={checkOver ? noCheckHoverImg : noCheckImg}
                        alt="" 
                    />
            </button>
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
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