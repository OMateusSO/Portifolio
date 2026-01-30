import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  legacy: false,
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: {
    pt: {
      nav: {
        home: 'Home',
        projects: 'Projetos',
        contact: 'Contato'
      },
      footer: {
        brand: 'OMateusSO',
        rights: '© 2024 Todos os direitos reservados.',
        pagesTitle: 'Páginas',
        connectTitle: 'Conecte-se',
        pages: {
          home: 'Home',
          projects: 'Projetos',
          contact: 'Contato'
        }
      },
      hero: {
        role: 'Desenvolvedor Fullstack',
        description:
          'Desenvolvedor focado em criar aplicações modernas, performáticas e bem estruturadas, com atenção à experiência do usuário.',
        buttons: {
          resume: 'Ver Currículo',
          projects: 'Ver Projetos'
        }
      },
      search: 'Buscar projetos...',
      about: {
        title: "Sobre mim",

        introStart: "Tenho {idade} anos e sou formado em",
        degree: "Análise e Desenvolvimento de Sistemas",
        introEnd:
          "Estou em busca de oportunidades para aplicar meus conhecimentos, enfrentar desafios reais e crescer profissionalmente junto a uma equipe.",

        paragraph2:
          "Gosto de tecnologia e programação e estou sempre em busca de aprendizado. Quero explorar novas ideias, resolver problemas e criar soluções que realmente façam diferença.",

        paragraph3:
          "Durante minha trajetória, participei de projetos acadêmicos e pessoais, e realizei um estágio, experiências que me ensinaram a importância de comunicação clara, trabalho em equipe e dedicação. Busco sempre evoluir e entregar resultados de qualidade.",

        cards: {
          degreeTitle: "Diploma",
          degreeText: "Análise e Desenvolvimento de Sistemas (ADS)",

          experienceTitle: "4+",
          experienceText:
            "anos de experiência em programação e desenvolvimento de sistemas"
        }
      },
      skills: {
        title: 'Habilidades & Competências',
        frontend: 'Front-end',
        backend: 'Back-end',
        banco: 'Banco de Dados',
        ferramentas: 'Ferramentas',
        interpessoais: 'Competências Interpessoais',
        soft: {
          communication: 'Comunicação',
          teamwork: 'Trabalho em equipe',
          organization: 'Organização',
          proactivity: 'Proatividade',
          fastLearning: 'Facilidade de aprendizado',
          problemSolving: 'Resolução de problemas'
        }
      },
      timeline: {
        title: 'Minha trajetória',
        start: {
          title: 'Início na programação',
          description:
            'Primeiro contato com lógica de programação, praticando conceitos fundamentais e fixando o raciocínio lógico utilizando Portugol.'
        },
        degree: {
          title: 'Graduação em ADS',
          description:
            'Início da graduação em Análise e Desenvolvimento de Sistemas, com foco em desenvolvimento Java e fundamentos de banco de dados.'
        },
        internship: {
          title: 'Estágio',
          description:
            'Atuação em projetos web durante estágio, desenvolvendo funcionalidades no frontend e backend, aplicando boas práticas, organização de código e ferramentas modernas como Vue.js, Node.js e Docker.'
        },
        projects: {
          title: 'Projetos práticos',
          description:
            'Desenvolvimento de projetos acadêmicos e pessoais, atuando no frontend e backend, aplicando boas práticas e organização de código.'
        }
      },
      projects: {
        featuredTitle: 'Projetos em destaque',
        featuredDescription:
          'Alguns dos projetos que desenvolvi focados em frontend, backend e aplicações completas.',

        noImage: 'Imagem do projeto',

        videoTitle: 'Vídeo de Trabalhos e Projetos',
        videoDescription:
          'Uma demonstração prática dos projetos em funcionamento, destacando recursos, interface e fluxo de uso.',

        githubTitle: 'Meu GitHub',
        githubDescription:
          'Repositórios públicos com foco em frontend, backend, estudos e aplicações completas.',

        searchPlaceholder: 'Pesquisar projeto',
        viewOnGithub: 'Ver no GitHub',
        openRepo: 'Abrir repositório',
        noDescription: 'Sem descrição',

        items: {
          login: {
            title: 'Sistema de Login',
            description: 'Projeto de sistema de login seguro e responsivo.'
          },
          webchat: {
            title: 'WebChat',
            description: 'Aplicação de chat em tempo real com várias funcionalidades.'
          },
          biblioteca: {
            title: 'Biblioteca',
            description: 'Sistema de gestão de biblioteca com empréstimos e QR Code.'
          }
        }
      },
      socials: {
        title: 'Minhas redes'
      },

      library: {
        title: "Biblioteca",

        about: {
          title: "Sobre o Projeto",
          description: "O Sistema de Biblioteca é uma aplicação web desenvolvida com Vue.js e TypeScript, projetada para facilitar a gestão de empréstimos de livros em uma biblioteca escolar ou institucional. Ele integra um banco de dados relacional MySQL com Prisma e permite a automação de operações com QR Codes."
        },

        technologies: {
          title: "Tecnologias Utilizadas",
          items: [
            {
              key: "vue",
              name: "Vue.js",
              description: "Framework JavaScript progressivo."
            },
            {
              key: "ts",
              name: "TypeScript",
              description: "Tipagem estática para JavaScript."
            },
            {
              key: "tailwind",
              name: "Tailwind CSS",
              description: "Estilização utilitária e responsiva."
            },
            {
              key: "mysql",
              name: "MySQL",
              description: "Banco de dados relacional."
            },
            {
              key: "prisma",
              name: "Prisma ORM",
              description: "Integração com MySQL."
            },
            {
              key: "qrcode",
              name: "QR Code",
              description: "Identificação única dos livros."
            }
          ]
        },

        features: {
          title: "Funcionalidades",
          items: [
            {
              key: "books",
              title: "Cadastro de Livros",
              description: "Com QR Code automático."
            },
            {
              key: "loans",
              title: "Empréstimos",
              description: "Registro vinculado a usuários."
            },
            {
              key: "scanner",
              title: "Leitura de QR Code",
              description: "Scanner integrado."
            },
            {
              key: "users",
              title: "Gestão de Usuários",
              description: "Controle de empréstimos."
            },
            {
              key: "responsive",
              title: "Responsividade",
              description: "Funciona em qualquer tela."
            }
          ]
        },

        repository: {
          title: "Repositório no GitHub",
          link: "github.com/OMateusSO/Biblioteca"
        },

        demo: {
          title: "Demonstração"
        }
      },

      webchat: {
        title: "WebChat",

        about: {
          title: "Sobre o Projeto",
          description:
            "WebChat é uma aplicação web desenvolvida com Vue.js, utilizando Firebase como backend e banco de dados, e estilizada com Tailwind CSS para uma interface moderna e responsiva. O projeto permite a criação e gestão de salas de bate-papo em tempo real."
        },

        technologies: {
          title: "Tecnologias Utilizadas",
          items: {
            vue: {
              name: "Vue.js",
              description:
                "Framework JavaScript progressivo para construção de interfaces interativas."
            },
            firebase: {
              name: "Firebase",
              description:
                "Plataforma para autenticação, banco de dados em tempo real e hospedagem."
            },
            tailwind: {
              name: "Tailwind CSS",
              description:
                "Framework CSS utilitário para estilização rápida e responsiva."
            }
          }
        },

        features: {
          title: "Funcionalidades",
          items: {
            auth: {
              title: "Autenticação",
              description:
                "Gerenciada com o Firebase Auth para login seguro."
            },
            rooms: {
              title: "Criação de Salas",
              description:
                "Usuários podem criar salas de bate-papo."
            },
            realtime: {
              title: "Mensagens em Tempo Real",
              description:
                "Bate-papo em tempo real com sincronização instantânea via Firebase Firestore."
            },
            responsive: {
              title: "Interface Responsiva",
              description:
                "Design otimizado para diferentes tamanhos de tela."
            }
          }
        },

        repository: {
          title: "Repositório no GitHub",
          link: "github.com/OMateusSO/WebChat"
        },

        demo: {
          title: "Demonstração"
        }
      },

      loginSystem: {
        title: "Sistema de Login",

        about: {
          title: "Sobre o Projeto",
          text: "O Sistema de Login é uma aplicação web desenvolvida com Vue.js, Firebase e Tailwind CSS, projetada para fornecer autenticação segura e gerenciamento de usuários. Ele é uma peça fundamental em outros projetos, como o Projeto-Z, oferecendo suporte confiável para controle de acesso."
        },

        technologies: {
          title: "Tecnologias Utilizadas",
          vue: "Framework JavaScript progressivo para construção de interfaces interativas",
          firebase: "Plataforma para autenticação, banco de dados em tempo real e hospedagem",
          tailwind: "Framework CSS utilitário para estilização rápida e responsiva"
        },

        features: {
          title: "Funcionalidades",
          login: "Login seguro gerenciado com Firebase Auth",
          register: "Cadastro de usuários com validação",
          integration: "Fácil integração com outros sistemas, como o WebChat"
        },

        repository: {
          title: "Repositório no GitHub"
        },

        demo: {
          title: "Demonstração"
        }
      }

    },

    en: {
      nav: {
        home: 'Home',
        projects: 'Projects',
        contact: 'Contact'
      },
      footer: {
        brand: 'OMateusSO',
        rights: '© 2024 All rights reserved.',
        pagesTitle: 'Pages',
        connectTitle: 'Connect',
        pages: {
          home: 'Home',
          projects: 'Projects',
          contact: 'Contact'
        }
      },
      hero: {
        role: 'Fullstack Developer',
        description:
          'Developer focused on building modern, high-performance and well-structured applications, with attention to user experience.',
        buttons: {
          resume: 'View Resume',
          projects: 'View Projects'
        }
      },
      search: 'Search projects...',
      about: {
        title: "About me",

        introStart: "I am {idade} years old and have a degree in",
        degree: "Systems Analysis and Development",
        introEnd:
          "I'm looking for opportunities to apply my knowledge, face real challenges and grow professionally with a team.",

        paragraph2:
          "I enjoy technology and programming and I'm always seeking to learn. I want to explore new ideas, solve problems and create solutions that truly make a difference.",

        paragraph3:
          "Throughout my journey, I participated in academic and personal projects and completed an internship. These experiences taught me the importance of clear communication, teamwork and dedication. I always strive to grow and deliver quality results.",

        cards: {
          degreeTitle: "Degree",
          degreeText: "Systems Analysis and Development (ADS)",

          experienceTitle: "4+",
          experienceText:
            "years of experience in programming and systems development"
        }
      },
      skills: {
        title: "Skills & Competencies",
        frontend: "Front-end",
        backend: "Back-end",
        banco: "Databases",
        ferramentas: "Tools",
        interpessoais: "Soft Skills",
        soft: {
          communication: "Communication",
          teamwork: "Teamwork",
          organization: "Organization",
          proactivity: "Proactivity",
          fastLearning: "Fast learner",
          problemSolving: "Problem solving"
        }
      },
      timeline: {
        title: 'My journey',
        start: {
          title: 'Getting started in programming',
          description:
            'First contact with programming logic, practicing fundamental concepts and strengthening logical reasoning using Portugol.'
        },
        degree: {
          title: 'Systems Analysis degree',
          description:
            'Beginning of the Systems Analysis and Development degree, focusing on Java development and database fundamentals.'
        },
        internship: {
          title: 'Internship',
          description:
            'Worked on web projects during an internship, developing frontend and backend features, applying best practices, code organization and modern tools such as Vue.js, Node.js and Docker.'
        },
        projects: {
          title: 'Practical projects',
          description:
            'Development of academic and personal projects, working on frontend and backend, applying best practices and code organization.'
        }
      },
      projects: {
        featuredTitle: 'Featured projects',
        featuredDescription:
          'Some of the projects I developed focused on frontend, backend and full applications.',

        noImage: 'Project image',

        videoTitle: 'Projects & Work Video',
        videoDescription:
          'A practical demonstration of projects in action, highlighting features, interface and user flow.',

        githubTitle: 'My GitHub',
        githubDescription:
          'Public repositories focused on frontend, backend, studies and complete applications.',

        searchPlaceholder: 'Search project',
        viewOnGithub: 'View on GitHub',
        openRepo: 'Open repository',
        noDescription: 'No description',

        items: {
          login: {
            title: 'Login System',
            description: 'Secure and responsive login system project.'
          },
          webchat: {
            title: 'WebChat',
            description: 'Real-time chat application with multiple features.'
          },
          biblioteca: {
            title: 'Library',
            description: 'Library management system with loans and QR Code.'
          }
        }
      },
      socials: {
        title: 'My social networks'
      },

      library: {
        title: "Library",
        about: {
          title: "About the Project",
          description: "The Library System is a web application developed with Vue.js and TypeScript, designed to simplify the management of book loans in a school or institutional library. It integrates a relational MySQL database with Prisma and enables the automation of operations using QR Codes."
        },

        technologies: {
          title: "Technologies Used",
          items: [
            {
              key: "vue",
              name: "Vue.js",
              description: "Progressive JavaScript framework."
            },
            {
              key: "ts",
              name: "TypeScript",
              description: "Static typing for JavaScript."
            },
            {
              key: "tailwind",
              name: "Tailwind CSS",
              description: "Utility-first and responsive styling."
            },
            {
              key: "mysql",
              name: "MySQL",
              description: "Relational database."
            },
            {
              key: "prisma",
              name: "Prisma ORM",
              description: "Integration with MySQL."
            },
            {
              key: "qrcode",
              name: "QR Code",
              description: "Unique identification for books."
            }
          ]
        },

        features: {
          title: "Features",
          items: [
            {
              key: "books",
              title: "Book Registration",
              description: "Automatic QR Code generation."
            },
            {
              key: "loans",
              title: "Loans",
              description: "Loan records linked to users."
            },
            {
              key: "scanner",
              title: "QR Code Scanning",
              description: "Integrated scanner."
            },
            {
              key: "users",
              title: "User Management",
              description: "Loan control and tracking."
            },
            {
              key: "responsive",
              title: "Responsive Design",
              description: "Works on any screen size."
            }
          ]
        },

        repository: {
          title: "GitHub Repository",
          link: "github.com/OMateusSO/Biblioteca"
        },

        demo: {
          title: "Demo"
        }
      },
      webchat: {
        title: "WebChat",

        about: {
          title: "About the Project",
          description:
            "WebChat is a web application developed with Vue.js, using Firebase as backend and database, and styled with Tailwind CSS for a modern and responsive interface. This project allows the creation and management of real-time chat rooms."
        },

        technologies: {
          title: "Technologies Used",
          items: {
            vue: {
              name: "Vue.js",
              description:
                "Progressive JavaScript framework for building interactive interfaces."
            },
            firebase: {
              name: "Firebase",
              description:
                "Platform for authentication, real-time database and hosting."
            },
            tailwind: {
              name: "Tailwind CSS",
              description:
                "Utility-first CSS framework for fast and responsive styling."
            }
          }
        },

        features: {
          title: "Features",
          items: {
            auth: {
              title: "Authentication",
              description: "Managed with Firebase Auth for secure login."
            },
            rooms: {
              title: "Room Creation",
              description: "Users can create chat rooms."
            },
            realtime: {
              title: "Real-time Messages",
              description:
                "Instant chat synchronization via Firebase Firestore."
            },
            responsive: {
              title: "Responsive Interface",
              description:
                "Optimized design for different screen sizes."
            }
          }
        },

        repository: {
          title: "GitHub Repository",
          link: "github.com/OMateusSO/WebChat"
        },
        demo: {
          title: "Demo"
        }
      },
      loginSystem: {
        title: "Login System",

        about: {
          title: "About the Project",
          text: "The Login System is a web application developed with Vue.js, Firebase, and Tailwind CSS, designed to provide secure authentication and user management. It is a core component of other projects, such as Project-Z, offering reliable support for access control."
        },

        technologies: {
          title: "Technologies Used",
          vue: "Progressive JavaScript framework for building interactive interfaces",
          firebase: "Platform for authentication, real-time database, and hosting",
          tailwind: "Utility-first CSS framework for fast and responsive styling"
        },

        features: {
          title: "Features",
          login: "Secure login managed with Firebase Auth",
          register: "User registration with validation",
          integration: "Easy integration with other systems, such as WebChat"
        },

        repository: {
          title: "GitHub Repository"
        },

        demo: {
          title: "Demo"
        }
      }
    }
  }
})
