function Header() {
    return (
        <header className="d-flex justify-between align-center p-40">

        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt=""/>
          <div className="geaderInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="headerRight d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cartIcon.png" alt="" className=""/>
            <span className="ml-5">1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/profileIcon.png" alt="" className=""/>
          </li>
        </ul>
      </header>
    );
}

export default Header;