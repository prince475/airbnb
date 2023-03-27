import React from 'react';
import star from '../images/star.png';

function Card(props) {
    let badgeText
    if (props.cardData.openSpots === 0){
        badgeText = 'SOLD OUT'
    } else if (props.cardData.location === 'online') {
        badgeText = 'ONLINE'
    }
    return (
    <div className='card'>
                {badgeText && <div className='card--badge'>{badgeText}</div>}
                <img className='card--image' src={props.cardData.coverImg} alt='card'/>
                <div className='card--stats'>
                    <img className='card--star' src={star} alt='star' />
                    <span>{props.cardData.stats.rating}</span>
                    <span className='gray'>({props.cardData.stats.reviewCount})</span>
                    <span className='gray'>{props.cardData.country}</span>
                </div>
                <p className='card--title'>{props.cardData.title}</p>
                <p className='card--price'><span className='bold'>From ${props.cardData.price}/</span> person</p>

    </div>
    )
}

export default Card;
