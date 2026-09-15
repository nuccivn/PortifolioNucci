const contatos = [
  { label: 'GitHub', href: 'https://github.com/SEU-USUARIO' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/SEU-USUARIO' },
  { label: 'E-mail', href: 'mailto:seuemail@exemplo.com' },
]

export default function Contato() {
  return (
    <section id="contato" className="px-6 md:px-16 py-20">
      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <p className="font-display text-sm text-ink/50">05 — Contato</p>
        <div className="max-w-2xl">
          <p className="text-ink/80 mb-6">
            Aberto a conversar sobre oportunidades, projetos ou trocar ideia sobre
            sistemas e dados.
          </p>
          <div className="flex flex-wrap gap-6">
            {contatos.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="font-display text-lg text-ink border-b border-transparent hover:border-blueprint hover:text-blueprint transition-colors"
              >
                {c.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-24 text-xs text-ink/40">
        Vinícius Nucci Galvão — {new Date().getFullYear()}
      </p>
    </section>
  )
}
