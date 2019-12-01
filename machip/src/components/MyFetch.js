function MyFetch(endpoint, callback, errorcallback) {
    fetch('/token', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
    fetch(`/${endpoint}`, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    }).then(res => res.json())
        .then(endpoint => {
            if (callback !== null) {
                callback(endpoint);
            }
        })
        .catch((err) => {
            if (errorcallback !== null) {
                errorcallback(err);
            }
        });
}

export default MyFetch;