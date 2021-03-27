import qs from 'qs';
import client from "./client";

export const writePost = ({ title, content}) =>
    client.post('/api/posts', { title, content });

export const readPost = id => client.get(`/api/posts/${id}`);

export const listPosts = ({ page }) => {
    const queryString = qs.stringify({
        page
    });
    return client.get(`/api/postsList?${queryString}`);
}

export const updatePost = ({id, title, content}) =>
    client.patch(`/api/posts/${id}`, {
        title,
        content
    });

export const removePost = id => client.delete(`/api/posts/${id}`);
