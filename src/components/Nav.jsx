const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#estudos', label: 'Estudos' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-paper/90 backdrop-blur border-b border-line">
      <nav className="flex items-center justify-between px-6 md:px-16 h-16">
        <a href="#inicio" className="font-display text-sm text-ink">
          V. Nucci
        </a>
        <ul className="hidden md:flex gap-8 text-sm text-ink/70">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-blueprint transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
