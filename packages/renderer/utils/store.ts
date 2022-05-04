const tokenKey = 'brain_stroke_diagnose/token'

export const getToken = () => {
  return localStorage.getItem(tokenKey)
}

export const setToken = (token: string) => {
  localStorage.setItem(tokenKey, token)
}

export const rmToken = () => {
  localStorage.removeItem(tokenKey)
}
