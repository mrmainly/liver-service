import axios from 'axios';

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://backend:8000/'

const api = (url) => {
    const instance = axios.create({
        baseURL: testURL + url,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return instance
}

class API {
    async getPosts() {
        let result = await api(`api/v1/posts/`).get(null)
        return result
    }
    async getPostsDetail(id) {
        let result = await api(`api/v1/posts/${id}`).get(null)
        return result
    }
}

export default new API()