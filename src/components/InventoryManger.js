import React , {useState, useEffect} from "react";
import CurrentInventoryList from "./CurrentInventoryList";
import ReorderInventoryList from "./ReorderInventoryList"

function InventoryManager() {
    const [inventory, setInventory] = useState([])
    const [needsReorder, setNeedsReorder] = useState([])

    useEffect(() => {
      fetch('http://localhost:8001/inventory')
      .then (res => res.json())
      .then(setInventory)
      // .then(console.log)
    }, [])
    
    // function addToReorder(id) {
    //     // console.log(id)
    //     const inventoryToReorder = inventory.find(inventory => inventory.id === id)
    //     if (!needsReorder.includes(inventoryToReorder)) {
    //         setNeedsReorder([...needsReorder, inventoryToReorder])
    //     }   
    // }

    //  function removeFromReorder(id) {
    //     // console.log(id)
    //     const filteredReorder = needsReorder.filter(inventory => inventory.id !== id)
    //     setNeedsReorder(filteredReorder)
    // }

    // function handleDeleteInventory(id) {
    //     const newInventory = inventory.filter(inventory => inventory.id !== id)
    //     setInventory(newInventory)
    // }

    function addToReorder(item) {
        if(!needsReorder.includes(item)) {
            setNeedsReorder([...needsReorder, item])
        }   
    }

    function removeFromReorder(item) {
        const filteredReorder = needsReorder.filter(reorderItem => reorderItem !== item)
        setNeedsReorder(filteredReorder)
    }

    function handleDelete(e, item) {
        e.stopPropagation()
        fetch(`http://localhost:8001/inventory/${item.id}`, {method: "DELETE"})

        const newInventory = inventory.filter(inventoryItem => inventoryItem !== item)
        setInventory(newInventory)

        const filteredReorder = needsReorder.filter(reorderItem => reorderItem !== item)
        setNeedsReorder(filteredReorder)
    }

    return(
        <div className="container">
            <CurrentInventoryList 
                inventory={inventory} 
                addToReorder={addToReorder} 
                handleDelete={handleDelete}
            />
            <ReorderInventoryList 
                needsReorder={needsReorder} 
                removeFromReorder={removeFromReorder} 
                handleDelete={handleDelete}
            />
        </div>
    );
}

export default InventoryManager;