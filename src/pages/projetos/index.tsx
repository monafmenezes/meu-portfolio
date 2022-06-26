import ContainerProjetos from './styles'
import Card from '../../components/Card'
import Head from 'next/head'

export default function Projetos () {
  return (
    <>
      <Head>
        <title>{'<Projetos /> 💻'}</title>
      </Head>
      <ContainerProjetos>
        <h1>
          {'<Projetos'} <span>/</span>
          {'>'} 💻
        </h1>

        <Card />
      </ContainerProjetos>
    </>
  )
}
