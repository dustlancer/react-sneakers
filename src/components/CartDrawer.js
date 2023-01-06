function CartDrawer() {
    return (
        <div style={{display:'none'}} className="overlay">
            <div className="drawer">
            <h2 className="mb-30 d-flex justify-between">Корзина
            <img src="/img/btn-remove.svg" alt="remove" className="cart-remove-btn cu-p"/>
            </h2>

            <div className="items flex">
                <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">            
                </div>
                <div className="mr-2 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Seude</p>
                    <b>12 999 руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="remove" className="cart-remove-btn "/>
                </div>
                <div className="cartItem d-flex align-center mb-20">
                <div style={{ backgroundImage: 'url(/img/sneakers/1.jpg)'}} className="cartItemImg">            
                </div>
                <div className="mr-2 flex">
                    <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Seude</p>
                    <b>12 999 руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="remove" className="cart-remove-btn "/>
                </div>           
            </div>

            <div className="cartTotalBlock">
                <ul>
                    <li className="d-flex">
                    <span>Итого</span>
                    <div></div>
                    <b>21 498 руб.</b>
                    </li>
                    <li className="d-flex">
                    <span>Скидка 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
                    </li>
                </ul>
                <button type="" className="greenButton">Оформить заказ<img src="/img/arrow.svg" alt="arrow"/></button>            
            </div>

            
            </div>
        </div>
    );
}

export default CartDrawer;