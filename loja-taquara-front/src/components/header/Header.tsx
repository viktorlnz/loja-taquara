export default function(){
    return(
        <header className="header">
            <div className="header__div-title">
                <h1 className="header__title">Taquara <span className="header__title-second">Store</span></h1>
            </div>
            <nav>
                <ul className="header-ul">
                    <li className="header-ul__li"><a href="/">Home</a></li>
                    <li className="header-ul__li"><a href="/produtos">Produtos</a></li>
                    <li className="header-ul__li"><a href="/sobre-nos">Sobre nós</a></li>
                    <li className="header-ul__li"><a href="/contato">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}