export default function Sobre() {
  return (
    <section id="sobre" className="px-6 md:px-16 py-20 border-b border-line">
      <div className="grid md:grid-cols-[120px_1fr] gap-8">
        <p className="font-display text-sm text-ink/50">01 — Sobre</p>
        <div className="max-w-2xl space-y-4 text-ink/80">
          <p>
            Comecei em suporte de TI e infraestrutura de redes antes de migrar para
            desenvolvimento de software. Essa passagem por operação deixou uma marca:
            gosto de entender o processo real antes de propor uma solução, e prefiro
            documentar uma lacuna a inventar uma resposta que pareça pronta.
          </p>
          <p>
            Hoje transito entre análise de sistemas, consultas SQL e prototipagem de
            relatórios — sempre buscando fechar o ciclo entre o que a operação precisa
            e o que o sistema entrega.
          </p>
        </div>
      </div>
    </section>
  )
}
