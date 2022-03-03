import React from 'react'
import InventoryItemCard from "./InventoryItemCard"

function ReorderInventoryList({needsReorder, removeFromReorder, handleDelete}) {

    return(
        <div id="reorder-container">
            <h2>Reorder</h2>
            <div>
                {needsReorder.map((item) => (
                    <InventoryItemCard 
                        key={item.id}
                        item={item}
                        callbackFn={removeFromReorder}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default ReorderInventoryList;