import axios from "axios";

const instance = axios.create({
    baseURL: 'https://631c3dd74fa7d3264ca9c85e.mockapi.io/contacts',
    params: {
        _limit: 12,
    }
})

export const getContacts = async() => {
    const {data} = await instance.get('/contacts');
    return data;
}

export const addContact = async(data) => {
    const {data: result} = await instance.post('/contacts', data);
    return result;
}

export const removeContacts = async(id) => {
    const {data} = await instance.delete(`/contacts/${id}`)
    return data;
}