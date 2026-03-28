import axios from 'axios'

const BASE = '/api'



export const addUser = (data) =>

  axios.post(`${BASE}/add-user`, data)


export const verifyUser = (data) =>

  axios.post(`${BASE}/verify-user`, data)


export const getAllUsers = () =>

  axios.get(`${BASE}/users`)
