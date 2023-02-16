import { useEffect, useState } from "react";
import IFood from "../../../interfaces/IFood";

import comidasPseudoDatabase from '../../../database/foods';
import Product from "../../../components/product/Product";

export default function(){

    const [foods, setFoods] = useState<IFood[]>([]);

    useEffect(() => setFoods(comidasPseudoDatabase));

    return(
        <section className="products">
            <h2 className="products__title">Compre as nossas comidas</h2>
            {foods.map( f => <Product key={f.id} food={f}/> )}
        </section>
    );
}