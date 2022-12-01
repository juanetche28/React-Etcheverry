import React from "react";

const ItemListContainer = ({greeting}) => {
    return (
        <div className="col-md-6 container-fluid d-flex align-items-start">
            <div className="alert alert-danger" role="alert">
                <p>{greeting}</p>
            </div>
        </div>
    )
}

export default ItemListContainer;