const baseUrl = "http://localhost:5000/"

export const login = async (username, password) => {
    let res = await fetch(`${baseUrl}users/login`, {
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
        throw jsonResult.message;
    }
};

export const register = async (username, email, password) => {
    let res = await fetch(`${baseUrl}users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({username, email, password})
    });
        
    let jsonResult = await res.json();

    if (res.ok) {
        return jsonResult;
    } else {
        throw jsonResult.message;
    }
};

export const logout = () => fetch(`${baseUrl}/users/logout`);

export const getUser = () => {
    let username = localStorage.getItem('username');

    return username;
};

export const isAuthenticated = () => {
    return Boolean(getUser());
};