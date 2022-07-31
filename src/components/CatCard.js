const cards = [
    {
        name: 'Cute cat',
        description: 'A cute cat.',
        image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Tabby_cat_with_blue_eyes-3336579.jpg'
    },
    {
        name: 'Stare cat',
        description: 'A menacing cat waiting for the night',
        image: 'https://images.unsplash.com/photo-1609779361684-8196b3a0abf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0JTIwc2l0aW5nfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
    }
]

function CatCard() {
    return cards.map((card, index) => {
        return (<div className="cat-card" key={index}>
            <div className="cat-card-img">
                <img src={card.image} alt="cute cat" />
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
        </div>);
    });
}

export default CatCard;