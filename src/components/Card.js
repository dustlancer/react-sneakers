function Card() {
    return (
    <div className="card">
        <div className="favorite">
            <img src="/img/unliked.svg" alt="unliked"/>
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" className="img"/>
        <h5>Мужские Кроссовки Nike Blazer Mid Seude</h5>
        <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>12 999 руб.</b>
            </div>
            <button className="button">
                <img width={16} height={16} src="/img/plus.svg" alt="plus" className="plusik"/>
            </button>
        </div>
            
    </div>
    );
}

export default Card;


