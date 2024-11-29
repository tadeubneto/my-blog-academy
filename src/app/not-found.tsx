// app/not-found.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
     
      <Image src="/ops-not-f.avif"  width={500} height={500} alt="" />
      
      <h2 className="p-10 font-bold ">Ops! Não encontramos essa página!</h2>
      <p className='text-xs text-center'>Não foi possível encontrar a página buscada, por favor retorne para a página anterior ou clique no botão abaixo</p>
      <Link 
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Voltar para Home
      </Link>
    </div>
  )
}