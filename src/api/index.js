import axios from 'axios';

const testURL = 'http://127.0.0.1:8000/'
const publicURL = 'http://liver.mondino.tech/'

const api = (url) => {
    const instance = axios.create({
        baseURL: publicURL + url,
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return instance
}

class API {
    async getPosts(page, tag) {
        let result = await api(`api/v1/posts/?page=${page}${tag ? `&tags=${tag}` : ''}`).get(null)
        return result
    }
    async getPostsDetail(id) {
        let result = await api(`api/v1/posts/${id}`).get(null)
        return result
    }
}

export default new API()