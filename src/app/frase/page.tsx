import { getFrase } from "@/lib/api"

export default async function FrasePage() {
    const post = await getFrase()
    console.log(post)

    return (
       <>
        <p>teste</p>
        <h1>{post.slip.advice}</h1>    
       </>
    )
}