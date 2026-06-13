//import GlassCard from '../common/GlassCard'

const ProjectArchitecture = ({ architecture, description }) => {
  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-24">
      <div className="md:col-span-12">

        <div className="md:col-span-5">
          <h2 className="font-headline-md text-headline-md text-on-surface">Aquitectura del sistema</h2>

          {description && (
            <p className="text-gray-600 mb-8 mt-4">{description}</p>
          )}

          <div className="md:col-span-7">
            <div className="p-8 rounded-2xl bg-black text-white">
              <p className="text-sm opacity-70 mb-4">
                Visualización general
              </p>

              <div className="grid gap-4">
                {architecture.map((item, i) => (
                  <div key={i} className="p-4 bg-white/10 rounded-xl">
                    <p className="font-bold capitalize">{item.type}</p>

                    <p className="text-xs opacity-60">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectArchitecture