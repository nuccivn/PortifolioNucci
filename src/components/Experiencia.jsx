export default function Experiencia() {
  return (
    <section id="experiencia" className="px-6 md:px-16 py-20 border-b border-line">
      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <p className="font-display text-sm text-ink/50">02 — Onde trabalho</p>
        <div className="max-w-2xl">
          <h3 className="font-display text-2xl">Alumisoft</h3>
          <p className="text-ink/50 text-sm mt-1">Estagiário — Time de Produtos</p>
          <p className="mt-4 text-ink/80">
            A Alumisoft desenvolve um ERP voltado ao mercado de esquadrias de alumínio.
            Atuo em análise de sistemas e relatórios — do levantamento de requisitos até
            a especificação técnica de features, passando por consultas em Firebird SQL
            e relatórios em Fast Report.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {['Firebird SQL', 'Fast Report', 'Delphi', 'Azure DevOps', 'Movidesk'].map(
              (tag) => (
                <span
                  key={tag}
                  className="text-xs border border-line px-2 py-1 text-ink/60"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
