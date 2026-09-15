const projetos = [
  {
    nome: 'Task Manager API',
    descricao:
      'API de gerenciamento de tarefas (CRUD completo) com arquitetura em containers, garantindo o mesmo comportamento em qualquer ambiente. Validada com uma suíte de testes de integração no Postman, cobrindo os principais endpoints com verificação de status HTTP.',
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Docker Compose', 'Postman'],
    link: 'https://github.com/nuccivn/TaskManager-project',
  },
  {
    nome: 'Project Formula 1 - API',
    descricao:
      'API RESTful com dados centralizados sobre equipes e pilotos da temporada de Fórmula 1, com foco em alta performance, tipagem estática e respostas rápidas em JSON.',
    stack: ['Node.js', 'Fastify', 'TypeScript'],
  },
    {
    nome: 'SMD Cronogramas',
    descricao:
      'Aplicação web de gestão de cronogramas, com autenticação JWT e frontend migrando de um HTML monolítico para componentes React.',
      alerta: 'Em desenvolvimento!',
    stack: ['Express 5', 'PostgreSQL', 'React', 'Vite'],
  },
]

export default function Projetos() {
  return (
    <section id="projetos" className="relative overflow-hidden border-b border-line px-6 py-24 md:px-16">
      <div className="absolute -right-24 top-16 h-64 w-64 rounded-full bg-blueprint/5 blur-3xl" />
      <div className="relative grid gap-10 md:grid-cols-[160px_1fr]">
        <div>
          <p className="font-display text-sm text-blueprint">04 — Projetos</p>
          <p className="mt-3 max-w-[12rem] text-sm leading-relaxed text-ink/50">
            Ideias transformadas em produtos funcionais.
          </p>
        </div>
        <div className="grid max-w-4xl gap-5 md:grid-cols-2">
          {projetos.map((p) => (
            <article
              key={p.nome}
              className="group flex flex-col rounded-sm border border-line bg-ink/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blueprint/50 hover:bg-blueprint/[0.04] hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)]"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <span className="font-display text-xs text-ink/40">0{projetos.indexOf(p) + 1}</span>
                {p.alerta && (
                  <span className="rounded-full border border-blueprint/30 px-2 py-1 text-[10px] uppercase tracking-wider text-blueprint">
                    {p.alerta}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl transition-colors group-hover:text-blueprint">{p.nome}</h3>
              <p className="mt-3 flex-1 leading-relaxed text-ink/70">{p.descricao}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span
                    key={tag}
                    className="border border-blueprint/20 px-2 py-1 text-[11px] text-blueprint/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm text-ink/60 transition-colors hover:text-blueprint"
                >
                  Ver repositório →
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
