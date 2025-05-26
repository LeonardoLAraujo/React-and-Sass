import { useRef, useState, type ReactElement } from "react";
import "./listMenu.scss";
import ItemList from "./itemList";

const EATS = [
    {title: "Bread Basket", description: "Assortment of fresh baked fruit breads and muffins 5.50"},
    {title: "Honey Almond Granola with Fruits", description: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"},
    {title: "Belgian Waffle", description: "Vanilla flavored batter with malted flour 7.50"},
    {title: "Scrambled eggs", description: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"},
    {title: "Blueberry Pancakes", description: "With syrup, butter and lots of berries 8.50"},
]

const DRINKS = [
    {title: "Coffee", description: "Regular coffee 2.50"},
    {title: "Chocolato", description: "Chocolate espresso with milk 4.50"},
    {title: "Corretto", description: "Whiskey and coffee 5.00"},
    {title: "Iced tea", description: "Hot tea, except not hot 3.00"},
    {title: "Soda", description: "Coke, Sprite, Fanta, etc. 2.50"},
]

function generateListEat(): Array<ReactElement>{
    return EATS.map((eat, indice: number) => <ItemList key={indice} title={eat.title} description={eat.description}></ItemList>);
}

function generateListDrink(): Array<ReactElement>{
    return DRINKS.map((drink, indice: number) => <ItemList key={indice} title={drink.title} description={drink.description}></ItemList>)
}

export default function ListMenu(): ReactElement{

    const [isEat, setIsEat] = useState(true);
    const buttonEat = useRef<HTMLButtonElement>(null);
    const buttonDrink = useRef<HTMLButtonElement>(null);

    function alterMenuList(): void{
        setIsEat(!isEat);

        if(isEat){
            buttonDrink.current?.classList.add("actual");
            buttonEat.current?.classList.remove("actual");
        }else{
            buttonEat.current?.classList.add("actual");
            buttonDrink.current?.classList.remove("actual");
        }
    }

    return(
        <div className="list">
            <div className="list__button">
               <button ref={buttonEat} className="actual" onClick={alterMenuList}>Eat</button> 
               <button ref={buttonDrink} onClick={alterMenuList}>Drink</button> 
            </div>
            <div>
                {isEat == true ? generateListEat() : generateListDrink()}
            </div>
        </div>
    );
}