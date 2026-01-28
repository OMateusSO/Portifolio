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
      }
    }
  }
})
