import React from "react";
import './Prateleira.css';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

import rightArrow from '../../assets/img/Right-Arrow.png';
import leftArrow from '../../assets/img/Left-Arrow.png';
import flag from '../../assets/img/Flag.png';

const Prateleira = (props) => {

    const [itemCount, setItemCount] = React.useState(0);

    return (
        <section className="prateleira">
            <Badge className="prateleira__icon" color="secondary" badgeContent={itemCount}>
                <ShoppingCartIcon />{" "}
            </Badge>
            <p className="prateleira__text">Mais Vendidos</p>
            <img className="prateleira__Arrow-left" src={leftArrow} />
            <img className="prateleira__Arrow-right" src={rightArrow} />
            {props.store.map((store, index) => (
                <div className="prateleira__itens" key={store.productId}>
                    <img className={(store.productId == 2 || store.productId == 3) ? 'show' : 'hidden'} src={flag} />
                    <img className="prateleira__img" src={store.imageUrl} />
                    <p className="prateleira__name">{store.productName}</p>
                    <p className="prateleira__price">por R$ {store.price}</p>
                    <button className="prateleira__button" type="button" onClick={() => {
                        setItemCount(itemCount + 1);
                    }}>COMPRAR</button>
                </div>
            ))}
        </section>
    )
}
export default Prateleira;