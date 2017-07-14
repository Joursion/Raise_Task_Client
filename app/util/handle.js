
const TYPE = {
    'JSON': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

/** POST/GET data */
export const handle = (url, method, data, type) => {
    method = method.toLocaleUpperCase()
    type = type.toLocaleUpperCase()
    if(method == 'POST' || method == 'DELETE') {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + url, {
                credentials: 'include',
                mode:'cors',
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
            .then(res => {
                if (res.err) {
                    return resolve(res)
                }
                return resolve(res.data)
            }).catch(e => {
                console.error(' tool / handle error',method, url, e);
            })
        })
    } else {
        return new Promise((resolve, reject) => {
            fetch(apiUrl + url,{
                credentials: 'include',
                mode:'cors',
                method: method,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(res => {
                if (res.err) {
                    return resolve(res)
                }
                return resolve(res.data)
            }).catch(e => {
                console.error(' tool / handle error',method, url,e);
            })
        })
    }
}