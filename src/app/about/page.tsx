
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-full">
     
      
      <h2 className="p-6 text-3xl font-bold">Sobre Nós</h2>
      <p className='text-xs text-center'>
        Bem-vindo ao nosso blog! Somos apaixonados por compartilhar conhecimento e novidades sobre diversos temas. Nosso objetivo é criar um espaço onde todos possam aprender e se inspirar.
      </p>
      <p className='text-xs text-center mt-2'>
        Aqui, você encontrará artigos sobre tecnologia, estilo de vida, dicas de viagem e muito mais. Esperamos que você aproveite sua leitura e se junte a nós nesta jornada de descoberta!
      </p>
      <h3 className="mt-4 font-bold">Nossa História</h3>
      <p className='text-xs text-center mt-2'>
        Nosso blog nasceu da vontade de criar um espaço onde pessoas pudessem encontrar informações úteis e interessantes em um só lugar. Começamos como um pequeno grupo de amigos apaixonados por escrever e compartilhar experiências, e hoje somos uma comunidade crescente de leitores e colaboradores.
      </p>
      <h3 className="mt-4 font-bold">Nossa Missão</h3>
      <p className='text-xs text-center mt-2'>
        Nossa missão é inspirar, informar e entreter nossos leitores através de conteúdos bem elaborados e relevantes. Acreditamos que compartilhar conhecimento pode transformar vidas e abrir novas perspectivas.
      </p>
      <h3 className="mt-4 font-bold">Junte-se a Nós</h3>
      <p className='text-xs text-center mt-2'>
        Adoraríamos ouvir suas histórias e ver seus comentários. Sinta-se à vontade para entrar em contato conosco ou colaborar com suas próprias ideias e experiências. Juntos, podemos criar um espaço ainda mais rico e diversificado.
      </p>
      <Link 
        href="/"
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Voltar para Home
      </Link>
    </div>
  )
}
