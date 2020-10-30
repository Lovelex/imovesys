import axios from 'axios'

const base = new axios.create({
  baseURL: process.env.VUE_APP_API,
})

export default base 