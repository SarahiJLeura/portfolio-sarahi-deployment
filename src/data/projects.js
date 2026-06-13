import { images } from '../assets/images';

export const projects = [
  {
    id: 1,
    title: "GymControl",
    description:
      "Sistema para gestión de gimnasios con control de membresías, inventario y operaciones en tiempo real.",

    longDescription:
      "Plataforma empresarial diseñada para la administración integral de gimnasios, incluyendo gestión de usuarios, control de membresías, inventario y seguimiento operativo en tiempo real. Elaborada en equipo como proyecto final de clase.",

    image: images.gym.cover,
    gallery: images.gym.gallery,

    youtubeId: "4EmDJJdjsPE",
    category: "ERP / gym management",
    repository: "https://github.com/christian10-M/GymControl",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Livewire",
          description: "Componentes reactivos sin JS complejo"
        },
        {
          name: "Tailwind CSS",
          description: "UI utility-first"
        }
      ],

      backend: [
        {
          name: "Laravel 11",
          description: "Framework principal del sistema"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional normalizada"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "UI reactiva con componentes reutilizables"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Lógica de negocio y API con Laravel"
      },
      {
        type: "integration",
        title: "Integración",
        description: "Comunicación en tiempo real con Livewire"
      }
    ],

    modules: [
      "Gestión de membresías",
      "Inventario",
      "Control de acceso",
      "Reportes en tiempo real",
      "Máquinas",
      "Rutinas",
      "Músculos",
      "Ejercicios",
      "Usuarios"
    ]
  },
  {
    id: 2,

    title: "Hotel Reservation System",

    description:
      "Sistema web para la gestión de reservas hoteleras, disponibilidad de habitaciones, administración de clientes y control de ocupación.",

    longDescription:
      "Plataforma web desarrollada para optimizar la administración de hoteles mediante la gestión de habitaciones, reservas y clientes. Permite consultar disponibilidad en tiempo real, realizar y modificar reservas, enviar notificaciones automáticas y generar reportes de ocupación. Incluye módulos para usuarios, administradores y gestión integral de la operación hotelera.",

    image: images.hotel.cover,
    gallery: images.hotel.gallery,

    youtubeId: "",
    category: "Hotel Management System",

    repository:
      "https://github.com/SarahiJLeura/Hotel-Reservation-System-HTML",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "HTML5",
          description: "Estructura y contenido de la plataforma web"
        },
        {
          name: "CSS3",
          description: "Diseño responsivo y estilos visuales"
        },
        {
          name: "JavaScript",
          description: "Interactividad y validaciones del cliente"
        }
      ],

      backend: [
        {
          name: "PHP",
          description: "Lógica de negocio y gestión de reservas"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Almacenamiento de usuarios, habitaciones y reservas"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones del proyecto"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description:
          "Interfaz web responsiva para clientes y administradores"
      },
      {
        type: "backend",
        title: "Backend",
        description:
          "Gestión de reservas, habitaciones, usuarios y notificaciones"
      },
      {
        type: "database",
        title: "Base de Datos",
        description:
          "Almacenamiento centralizado de clientes, habitaciones y reservas"
      }
    ],

    modules: [
      "Consulta de disponibilidad",
      "Registro de usuarios",
      "Inicio de sesión",
      "Reserva de habitaciones",
      "Modificación de reservas",
      "Cancelación de reservas",
      "Gestión de habitaciones",
      "Gestión de clientes",
      "Mensajería con el hotel",
      "Notificaciones de reserva",
      "Recordatorios automáticos",
      "Visualización de reservas",
      "Reportes de ocupación",
      "Administración del sistema"
    ]
  },
  {
    id: 3,
    title: "School management system",
    description:
      "Sistema para gestión de gimnasios con control de membresías, inventario y operaciones en tiempo real.",

    longDescription:
      "Plataforma empresarial diseñada para la administración integral de gimnasios, incluyendo gestión de usuarios, control de membresías, inventario y seguimiento operativo en tiempo real. Elaborada en equipo.",

    image: images.gym.cover,
    gallery: images.gym.gallery,

    youtubeId: "fnaHWV5M-4s",
    category: "ERP / gym management",
    repository: "https://github.com/christian10-M/GymControl",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Livewire",
          description: "Componentes reactivos sin JS complejo"
        },
        {
          name: "Tailwind CSS",
          description: "UI utility-first"
        }
      ],

      backend: [
        {
          name: "Laravel 11",
          description: "Framework principal del sistema"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional normalizada"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "UI reactiva con componentes reutilizables"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Lógica de negocio y API con Laravel"
      },
      {
        type: "integration",
        title: "Integración",
        description: "Comunicación en tiempo real con Livewire"
      }
    ],

    modules: [
      "Gestión de membresías",
      "Inventario",
      "Control de acceso",
      "Reportes en tiempo real",
      "Máquinas",
      "Rutinas",
      "Músculos",
      "Ejercicios",
      "Usuarios"
    ]
  },
  {
    id: 4,
    title: "Example project",
    description:
      "Sistema para gestión de gimnasios con control de membresías, inventario y operaciones en tiempo real.",

    longDescription:
      "Plataforma empresarial diseñada para la administración integral de gimnasios, incluyendo gestión de usuarios, control de membresías, inventario y seguimiento operativo en tiempo real. Elaborada en equipo.",

    image: images.gym.cover,
    gallery: images.gym.gallery,

    youtubeId: "fnaHWV5M-4s",
    category: "ERP / gym management",
    repository: "https://github.com/christian10-M/GymControl",

    featured: true,
    colSpan: "md:col-span-6",
    aspect: "aspect-[3/2]",

    stack: {
      frontend: [
        {
          name: "Blade",
          description: "Motor de plantillas de Laravel"
        },
        {
          name: "Livewire",
          description: "Componentes reactivos sin JS complejo"
        },
        {
          name: "Tailwind CSS",
          description: "UI utility-first"
        }
      ],

      backend: [
        {
          name: "Laravel 11",
          description: "Framework principal del sistema"
        }
      ],

      database: [
        {
          name: "MySQL",
          description: "Base de datos relacional normalizada"
        }
      ],

      tools: [
        {
          name: "Git",
          description: "Control de versiones"
        }
      ]
    },

    architecture: [
      {
        type: "frontend",
        title: "Frontend",
        description: "UI reactiva con componentes reutilizables"
      },
      {
        type: "backend",
        title: "Backend",
        description: "Lógica de negocio y API con Laravel"
      },
      {
        type: "integration",
        title: "Integración",
        description: "Comunicación en tiempo real con Livewire"
      }
    ],

    modules: [
      "Gestión de membresías",
      "Inventario",
      "Control de acceso",
      "Reportes en tiempo real",
      "Máquinas",
      "Rutinas",
      "Músculos",
      "Ejercicios",
      "Usuarios"
    ]
  }
]