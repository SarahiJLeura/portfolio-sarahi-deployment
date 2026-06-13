const ProjectStack = ({ stack }) => {
  const sections = [
    { key: "frontend", title: "Frontend", icon: "web" },
    { key: "backend", title: "Backend", icon: "dns" },
    { key: "database", title: "Database", icon: "database" },
    { key: "tools", title: "Tools", icon: "build" }
  ];

  return (
    <section className="px-6 md:px-gutter max-w-container-max mx-auto py-24">
      <h2 className="text-2xl font-bold mb-10">Stack tecnológico</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {sections.map((section) => {
          const items = stack?.[section.key] || [];

          return (
            <div key={section.key} className="p-6 rounded-2xl bg-white/50 border">
              <div className="flex items-center gap-2 mb-4">
                <span className="material-symbols-outlined text-primary">
                  {section.icon}
                </span>
                <h3 className="font-semibold">{section.title}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {items.map((item, i) => (
                  <div key={i}>
                    <p className="font-medium">{item.name}</p>
                    {item.description && (
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectStack