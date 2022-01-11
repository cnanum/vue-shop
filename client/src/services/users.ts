import axios from 'axios';

const API = 'http://localhost:3002'

export type User = {
  name: string;
  email: string;
  password: string;
}

async function register(user: User) {
  const newUser = await axios.post(`${API}/user`, user)
  return newUser.data.id
}

export {
  register
}
