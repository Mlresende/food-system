import axios from 'axios'
import { SnackData } from '../interfaces/SnackData'

// Defina o URL base padrão aqui
const defaultBaseUrl = 'https://food-system-cmcw0vv4i-mlresendes-projects.vercel.app/'

const api = axios.create({
  baseURL: defaultBaseUrl,
})

export const getBurgers = () => api.get<SnackData[]>('https://food-system-cmcw0vv4i-mlresendes-projects.vercel.app/burgers')
export const getPizzas = () => api.get<SnackData[]>('food-system-cmcw0vv4i-mlresendes-projects.vercel.app/pizzas')
export const getDrinks = () => api.get<SnackData[]>('food-system-cmcw0vv4i-mlresendes-projects.vercel.app/drinks')
export const getIceCreams = () => api.get<SnackData[]>('food-system-cmcw0vv4i-mlresendes-projects.vercel.app/ice-creams')

export default api