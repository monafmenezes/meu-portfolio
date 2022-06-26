import { TextField } from '@mui/material'
import ContatoContainer from './styles'

export default function Contatos () {
  return (
    <ContatoContainer>
      <h1>
        {'<Contato'} <span>/</span>
        {'>'} 📱
      </h1>
      <form>
        <TextField
          placeholder='Nome'
          label='Nome'
          fullWidth
          margin='normal'
          color='secondary'
        />
        <TextField
          placeholder='Email'
          type='email'
          label='Email'
          fullWidth
          margin='normal'
          color='secondary'
        />
        <TextField
          placeholder='Celular'
          type='phone'
          label='Celular'
          fullWidth
          margin='normal'
          color='secondary'
        />
        <TextField
          multiline
          placeholder='Mensagem'
          label='Mensagem'
          fullWidth
          margin='normal'
          color='secondary'
          rows={4}
        />
      </form>
    </ContatoContainer>
  )
}
