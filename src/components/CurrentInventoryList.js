import React from 'react'
import InventoryItemCard from './InventoryItemCard';

function CurrentInventoryList({inventory, addToReorder, handleDelete}) {

    return(
        <div id="current-inventory">
            <h2>Current Inventory</h2>
            <div>
                {inventory.map((item) => (
                    <InventoryItemCard 
                        key={item.id}
                        item={item}
                        callbackFn={addToReorder}
                        handleDelete={handleDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default CurrentInventoryList;