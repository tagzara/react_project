const baseUrl = 'http://localhost:5000/';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/blog`);

    let blog = await response.json();

    return blog;
}

export const create = async (blogData, token) => {
    let response = await fetch(`${baseUrl}/blog`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(blogData)
    });

    let result = await response.json();

    return result;
};

export const getOne = (blogId) => {
    return fetch(`${baseUrl}/blog/${blogId}`)
        .then(res => res.json())
};