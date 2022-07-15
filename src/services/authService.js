export const login = async (username, password) => {
    let res = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
        
    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult;
    }
};

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};