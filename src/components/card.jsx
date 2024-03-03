import '../styles/card.css'

function Card({name, img, onClick}) {
    return (
     <div className="cards" onClick={onClick}>
            <div className="card">
            <div className="content">
                <div className="pokemon-img">
                    <img src={img} alt={name} />
                </div>
                <div className="pokemon-name">{name}</div>
            </div>
        </div>
     </div>


    );
}

export default Card;