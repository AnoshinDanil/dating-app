const url = 'http://localhost:4000'
// http://localhost:3001/user/getUserData
export const fetchGet = async (additional) => {
    try{
        let res = await fetch(`${url}/${additional}`, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })

        if (!res.ok) {
            const errRes = await res.json();
            const err = Error(errRes.error);
            err.status = res.status;
            throw err;
        }
        let resT = await res.json();
        return resT
    }catch(e){
        console.log(e.message)
        return []
    }
}

export const fetchPost = async (additional, value) => {
    try{
        let res = await fetch(`${url}/${additional}`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
            "Content-Type": "application/json",
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(value),
            redirect: "follow", // manual, *follow, error
            referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        })

        if (!res.ok) {
            const errRes = await res.json();
            const err = Error(errRes.error);
            err.status = res.status;
            throw err;
        }
        let resT = await res.json();
        return resT
    }catch(e){
        console.log(e.message)
        return []
    }
}