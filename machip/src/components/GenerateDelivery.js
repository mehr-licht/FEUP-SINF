function GenerateDelivery(item, type, qty, callback, errorcallback) {
    console.log(item);
    fetch('/token', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    
    fetch(`shipping/processOrders/FEUP-AI`, {
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

export default GenerateDelivery;
