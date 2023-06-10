const URL = import.meta.env.VITE_REACT_APP_API;


export const useFetchCreateUser = async(name, email, password) => {
    const res = await fetch(
        `${URL}/users`,
        { method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      )
    const data = await res.json()
    return data
}


export const useFetchDelete = async(id) => {
    const res = await fetch(`${URL}/users/${id}`, {method:'DELETE' })
    const data = await res.json()
    return data
}


export const useFetchGetUsers = async() => {
    const res = await fetch(`${URL}/users`)
    const data = await res.json()
    return data
}


export const useFetchGetUser = async(id) => {
    const res = await fetch(`${URL}/user/${id}`)
    const data = await res.json()
    return data
}


export const useFetchUpdate = async({id, name, email, password}) => {
    const res = await fetch(
        `${URL}/users/${id}`,
        { method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        }
      )
    const data = await res.json()
    return data
}