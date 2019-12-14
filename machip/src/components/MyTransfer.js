function MyTransfer(item, type, qty, callback, errorcallback) {
    console.log(item);
    fetch('/token', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    let from = "";
    let to = "";
    if (type === "sales") {
        console.log(item);
        from = item.defaultWarehouseId || "01";//só enquanto o item não tem armazem
        to = "02";
    } else {
        from = "01";
        to = item.defaultWarehouse || "02";//só enquanto o item não tem armazem
    }

    fetch(`/from_to/${from}/${to}/${item.salesItem}/${qty}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
    }).then(res => res.json())
        .then(endpoint => {
            if (callback !== null) {
                console.log("transferido");
                callback("transferido");
            }
        })
        .catch((err) => {
            if (errorcallback !== null) {
                console.log("erro ao transferir");
                errorcallback(err);
            }
        });
}

export default MyTransfer;