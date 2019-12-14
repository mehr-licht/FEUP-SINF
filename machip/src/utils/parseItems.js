function parseItems(info, warehouse) {
    let itemsFound = [];
    for (let i = 0; i < info.length; i++){  
        for (let j = 0; j < info[i].materialsItemWarehouses.length; j++){
            if (info[i].materialsItemWarehouses[j].warehouse === warehouse){// && info[i].materialsItemWarehouses[j].stockBalance >0) {
                itemsFound.push({
                    itemId: info[i].id,
                    itemDescription: info[i].description,
                    stock: info[i].materialsItemWarehouses[j].stockBalance,
                });
            }
        }
    };
    return itemsFound;
}

export default parseItems;