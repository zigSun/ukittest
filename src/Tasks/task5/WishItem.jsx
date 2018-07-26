import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const WishItem = (props) => {
    return (
        <div className="wish-item">
            {props.isDone ? 
                <span className="text"><s>{props.text}</s></span>
                :
                <span className="text">{props.text}</span>
            }
            <span>
                {!props.isDone && <FontAwesomeIcon onClick={e => props.wishDone(props.id)} icon={['fas','check']}/>}
                <FontAwesomeIcon onClick={e => props.deleteWish(props.id)} icon={['fas', 'trash']}/>
            </span>
        </div>
    )
}

export default WishItem;