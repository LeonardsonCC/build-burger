import React from "react";

import Aux from "../../../hoc/Auxiliar";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Seu pedido</h3>
            <p>Um delicioso hambúrguer com os ingredientes a seguir:</p>
            <ul>{ingredientSummary}</ul>
            <p>Continuar com o pedido?</p>
        </Aux>
    );
};

export default orderSummary;
