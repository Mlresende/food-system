import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

// Defina o URL base padrão aqui
const defaultBaseUrl = 'https://food-system-cmcw0vv4i-mlresendes-projects.vercel.app/'

const api = axios.create({
  baseURL: defaultBaseUrl,
})

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getDrinks = () => api.get<SnackData[]>('/drinks')
export const getIceCreams = () => api.get<SnackData[]>('/ice-creams')

export default api