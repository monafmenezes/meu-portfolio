import { NextPage } from 'next'
import { HomeContainer } from '../styles/styles'
import devImage from '../../public/images/develop.svg'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{'<Monalisa Menezes /> 👩‍💻'}</title>
      </Head>
      <HomeContainer>
        
        <section>
          <div>
            <h3>
              Olá 👩‍💻, eu sou <span>Monalisa Menezes</span> FullStack Developer
            </h3>
          </div>

          <div>
            <Image
              src={devImage}
              alt='Desenvolvimento web'
              width={400}
              height={400}
            />
          </div>
        </section>
      </HomeContainer>
    </>
  )
}

export default Home
