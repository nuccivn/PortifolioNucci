import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Sobre from './components/Sobre.jsx'
import Experiencia from './components/Experiencia.jsx'
import Estudos from './components/Estudos.jsx'
import Projetos from './components/Projetos.jsx'
import Contato from './components/Contato.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <Sobre />
        <Experiencia />
        <Estudos />
        <Projetos />
        <Contato />
      </main>
    </div>
  )
}
