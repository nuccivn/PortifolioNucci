export default function Hero() {
  return (
    <section id="inicio" className="relative px-6 md:px-16 pt-32 pb-24 border-b border-line">
      <p className="text-sm text-blueprint mb-4">Sorocaba, SP — Brasil</p>
      <h1 className="font-display text-4xl md:text-6xl leading-tight max-w-2xl">
        Vinícius Nucci Galvão
      </h1>
      <p className="mt-6 text-lg text-ink/80 max-w-xl">
        Estudante de Análise e Desenvolvimento de Sistemas, hoje estagiando no time de
        Produtos da Alumisoft — construindo relatórios e integrações para o ERP que
        roda fábricas de esquadrias de alumínio pelo Brasil.
      </p>

      <div className="mt-16 md:mt-0 md:absolute md:bottom-10 md:right-16 border border-line px-5 py-4 text-xs font-display w-fit">
        <p className="text-ink/50 tracking-wide">Responsável</p>
        <p className="text-ink mt-1">Vinícius N. Galvão</p>
        <p className="text-ink/50 mt-2 tracking-wide">Revisão</p>
        <p className="text-ink mt-1">2026</p>
      </div>
    </section>
  )
}
