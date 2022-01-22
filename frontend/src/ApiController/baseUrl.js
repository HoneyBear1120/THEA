import axios from 'axios';
// const baseUrl2='http://35.172.14.5:5000';
// const baseUrl= process.env.API_URL || 'https://api.hellothea.io';
const baseUrl = "http://localhost:5000"
export const imgBaseUrl = "https://theadev-app-assets.s3.amazonaws.com/"

export const Login = (path, credentials) => {


    return axios({
        method: 'POST',
        url: baseUrl + path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(credentials)

    })
}


export const Create = (path, credentials) => {
    return axios({
        method: 'POST',
        url: baseUrl + path,
        headers: {
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(credentials)
    })
}


export const RequestCreator = (type, path, input, token) => {

    if (token) return axios({
        method: type,
        url: baseUrl + path,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: JSON.stringify(input)
    })

    else return axios({
        method: type,
        url: baseUrl + path,
        headers: {
            'Content-Type': 'application/json',
        },
        data: JSON.stringify(input)
    })

}


export const RequestCreator2 = (type, path, input) => {
    let token = localStorage.getItem('token')

    if (token) return axios({
        method: type,
        url: baseUrl + path,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: input
    })
    else throw Error('No local Storage Found.')

}



export const FileRequestCreator = (type, path, input) => {
    const token = localStorage.getItem('token')
    if (token) return axios({
        method: type,
        url: baseUrl + path,
        header: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        data: input
    })
}