import IFood from "../../interfaces/IFood";

export default function(props:{food:IFood}){
    return(
        <div className="food">
            <span className="food__name">{props.food.name}</span>
            <span className="food__value">{props.food.value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
            <button className="food__btn-details">Detalhes</button>
        </div>
    );
}