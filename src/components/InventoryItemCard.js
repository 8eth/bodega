import React from 'react'

function InventoryItemCard({item, callbackFn, handleDelete}) {
    // function handleDeleteClick() {
    //     fetch(`http://localhost:8001/inventory/${item.id}`, {
    //       method: "DELETE",
    //     });
    //     handleDelete(item.id);
    // }

    return(
        <div className="card" onClick={() => callbackFn(item)}>
            <img src={item.image} alt={item.name}></img>
            <h3>{item.name}</h3>
            <h4>${item.price}</h4>
            <button onClick={(e) => handleDelete(e, item)}>Delete</button>
        </div>
    );
}

export default InventoryItemCard;