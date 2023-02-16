

function Home(){
    return (
        <div className="home">
            <article className="home-article">
                <h2>Uma loja que se importa com você</h2>
                <p className="home-article__paragraph">Aqui na <em>Taquara Store</em> você pode comprar sua comida
                de qualidade a um preço especial, e ainda com sua saúde em orçamento! Preço especial, comida deliciosa e 
                sua saúde em dia!</p>
                <a href="/produtos" className="home-article__btn-buy">Comprar</a>

                <section className="home-article-multi-rows">
                    <h4 className="multi-rows__title">Por que comprar conosco</h4>
                    <div className="multi-rows__divs">
                        <div className="multi-rows-div">
                            <p className="multi-rows-div__paragraph">
                                <span className="multi-rows-div__money">Preço bom</span> é um dos nossos lemas, pesquisamos
                                diariamente os preços da região para nos equipararmos com a concorrência e para manter a fidelidade
                                 de preço decente para cada um de nossos clientes.
                            </p>
                        </div>
                        <div className="multi-rows-div">
                            <p className="multi-rows-div__paragraph">
                                Entregamos <span className="multi-rows-div__quality">qualidade</span> em nossas comidas, uma coisa que 
                                nunca irá faltar em nossas prateleiras será a boa comida, sempre satisfatória para nossos clientes, possibilitando 
                                que cada um tenha felicidade agregada ao experimentar nossas iguarias.
                            </p>
                        </div>
                        <div className="multi-rows-div">
                            <p className="multi-rows-div__paragraph">
                                Temos uma política de <span className="multi-rows-div__health">saúde</span> para nossos clientes, por isso,
                                como regra de compra dos nossos produtos, apenas duas unidades de comida não saudável pode ser levada, claro,
                                não podemos impedir nossos clientes de se deliciarem com algumas guloseimas, mas decidimos impor um limite para 
                                o bem de vocês.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="section-promotions">
                    <h4 className="section-promotions__title">Promoções</h4>
                    <div className="promotion">
                        
                    </div>
                </section>
            </article>
            
        </div>
    )
}

export default Home;