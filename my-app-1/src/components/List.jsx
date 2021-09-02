import React from 'react';
import Pi, {doublePi, triplePi, add} from './math';

function List() {
    return <ul>
                <li>{Pi}</li>
                <li>{doublePi()}</li>
                <li>{triplePi()}</li>
                <li>{add(1,2)}</li>
           </ul>
}

export default List;