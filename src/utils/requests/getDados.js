import axios from 'axios'

export async function getDados() {
    const api = axios.create({ baseURL : 'http://www.boredapi.com' })
    const RANDOM = '/api/activity/'

    return await api.get(RANDOM)
}
