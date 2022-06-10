import axios from 'axios'

export async function getDados(tipo) {
    const api = axios.create({ baseURL : 'http://www.boredapi.com' })
    const type = '/api/activity?type='

    return await api.get(`${type}${tipo}`)
}
