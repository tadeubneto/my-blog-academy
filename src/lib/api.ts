import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
})

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export async function getPosts(): Promise<Post[]> {
  const response = await api.get<Post[]>("/posts")
  return response.data
}

export async function getPost(id: number): Promise<Post> {
  const response = await api.get<Post>(`/posts/${id}`)
  return response.data
}

const apiFrase = axios.create({
  baseURL: "https://api.adviceslip.com"
})

export interface PostFrase {
  slip: {
    id: number
    advice: string
  }
}

export async function getFrase(): Promise<PostFrase> {
  const response =  await apiFrase.get<PostFrase>('/advice')

  return response.data
  
}
