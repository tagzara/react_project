const baseUrl = 'http://localhost:3030';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/blog`);

    let blog = await response.json();

    return blog;
}