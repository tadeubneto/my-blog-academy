import { getFrase } from "@/lib/api"

export default async function FrasePage() {
    const post = await getFrase()
    console.log(post)

    return (
       <div className="text-center p-5">
        <p className="p-5 font-bold">Aqui a sua frase:</p>
        <h1 className="mb-10">"{post.slip.advice}"</h1> 
        <a  href="/frase" className="font-bold text-gray-700 bg-gray-200 p-3 rounded-xl ">Gerar outra frase</a>   
       </div>
    )
}