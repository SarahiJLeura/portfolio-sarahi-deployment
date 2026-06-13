const CTA = () => {
  return (
    <section className="py-section-padding px-gutter text-center bg-surface">
      <div className="max-w-3xl mx-auto space-y-stack-md">
        <span className="font-label-sm text-secondary uppercase tracking-[0.2em]">¿Lista para colaborar?</span>
        <h2 className="font-display-lg text-display-lg-mobile md:text-headline-md text-on-surface">
          Hagamos algo excepcional juntas.
        </h2>
        <p className="font-body-lg text-on-surface-variant mb-stack-lg">
          Siempre buscando desafíos que superen los límites de los estándares web modernos.
        </p>
        <div className="pt-8">
          <a 
            className="group relative inline-flex items-center gap-4 text-headline-md font-display-lg text-primary" 
            href="mailto:patriciajimenezleu@gmail.com"
          >
            patriciajimenezleu@gmail.com
            <span className="block h-px w-20 bg-primary group-hover:w-32 transition-all duration-500"></span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA