import { Button, TextField } from '@mui/material'
import Head from 'next/head'
import ContatoContainer from './styles'

export default function Contatos () {
  return (
    <>
      <Head>
        <title>{'<Contato /> 📱'}</title>
      </Head>
      <ContatoContainer>
        <h1>
          {'<Contato'} <span>/</span>
          {'>'} 📱
        </h1>
        <form action='https://api.staticforms.xyz/submit' method='POST'>
          <input
            type='hidden'
            name='accessKey'
            value='d816dbe9-e064-46c2-bfee-9ee17f16dbc0'
          />
          <input
            type='hidden'
            name='redirectTo'
            value='https://meu-portfolio-rouge.vercel.app/contato'
          />
          <TextField
            placeholder='Nome'
            label='Nome'
            fullWidth
            margin='normal'
            color='secondary'
            name='name'
          />
          <TextField
            placeholder='Email'
            type='email'
            label='Email'
            fullWidth
            margin='normal'
            color='secondary'
            name='email'
          />
          <TextField
            placeholder='Celular'
            type='phone'
            label='Celular'
            fullWidth
            margin='normal'
            color='secondary'
            name='phone'
          />
          <TextField
            multiline
            placeholder='Mensagem'
            label='Mensagem'
            fullWidth
            margin='normal'
            color='secondary'
            rows={3}
            name='message'
          />

          <Button type='submit' fullWidth style={{ background: ' #6d6875;' }}>
            Enviar
          </Button>
        </form>
      </ContatoContainer>
    </>
  )
}
