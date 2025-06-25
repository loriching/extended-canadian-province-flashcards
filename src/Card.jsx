import './Card.css';

const Card = ({direction, flashcardInfo, onClick}) => {
    return (
        <div className="Card" onClick={onClick}>
            <h2>
                {direction === 0 ? flashcardInfo.province : flashcardInfo.capital}
            </h2>
        </div>
    )
}

export default Card;