function CatCard(card) {
    return (
        <div className="cat-card">
            <div className="cat-card-img">
                <img src={card.image} alt={card.image} />
            </div>
            <br />
            <hr />
            <div className="cat-card-name">
                <h2>{card.name}</h2>
            </div>
            <div className="cat-card-description">
                <p>{card.description}</p>
            </div>
            <div className="cat-card-reactions">
                <div className="cat-card-likes">
                    <p><i className="fa-solid fa-paw"></i> 25</p>
                </div>
                <div className="cat-card-comments">
                    <p><i className="fa-solid fa-comment"></i> 10</p>
                </div>
                <div className="cat-card-shares">
                    <p><i className="fa-solid fa-share"></i> 5</p>
                </div>
            </div>
        </div>
    );
}   

export default CatCard;