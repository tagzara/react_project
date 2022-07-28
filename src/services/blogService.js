import { db } from "../utils/firebase.js";
import { ref, set } from "firebase/database";

const baseUrl = 'http://localhost:5000/';

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/blog`);

    let blog = await response.json();

    return blog;
}

export const create = async (blogData, token) => {
    try {
         set(ref(db, "posts/" + token), {
            name: blogData.name,
            genre: blogData.genre,
            imageUrl: blogData.imageUrl,
            description: blogData.description
        });
    } catch (error) {
        console.log(error);
    }
};

export const getOne = (blogId) => {
    return fetch(`${baseUrl}/blog/${blogId}`)
        .then(res => res.json())
};