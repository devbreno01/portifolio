/* ============ DATA ============ */
const projects = [
  {
    key: 'dprazo',
    title: 'DPRAZO',
    stack: ['Laravel', 'Livewire', 'FilamentPHP'],
    link: { type: 'deploy', url: 'https://sistema.dprazo.cloud/admin/login' },
    badge: null,
  },
  {
    key: 'controlAttendances',
    title: 'Control Attendances',
    stack: ['Laravel', 'PHP'],
    link: { type: 'github', url: 'https://github.com/devbreno01/control-attendances-api' },
    badge: null,
  },
  {
    key: 'brpizza',
    title: 'BrPizza',
    stack: ['Node.js', 'Next.js', 'React Native'],
    link: { type: 'github', url: 'https://github.com/devbreno01/br-pizza' },
    badge: 'inProgress',
  },
  {
    key: 'yig',
    title: 'YIG Agência',
    stack: ['Landing Page'],
    link: { type: 'deploy', url: 'https://yigagencia.com.br/' },
    badge: null,
  },
  {
    key: 'patrihub',
    title: 'PatriHub',
    stack: ['Spring Boot', 'Java', 'React', 'Vite'],
    link: { type: 'github', url: 'https://github.com/devbreno01/patri-hub' },
    badge: null,
  },
];

const experiences = [
  { key: 'tnt' },
  { key: 'infocraft' },
  { key: 'w5i' },
  { key: 'freelancer' },
];

/* ============ I18N ============ */
const dict = {
  pt: {
    'nav.about': 'sobre', 'nav.skills': 'habilidades', 'nav.projects': 'projetos',
    'nav.experience': 'experiência', 'nav.contact': 'contato',
    'hero.eyebrow': 'disponível para novas oportunidades',
    'hero.role': 'Desenvolvedor Full Stack de 21 anos. Transformo ideias em produtos funcionais, escaláveis e bem pensados.',
    'hero.cta1': 'ver projetos', 'hero.cta2': 'entrar em contato',
    'hero.typed': 'iniciando_carreira --stack="React, Node, Laravel, TypeScript"',
    'about.title': 'Sobre mim',
    'about.html': `
      <p>Sou um desenvolvedor Full Stack de 21 anos, apaixonado por tecnologia, inovação e pela criação de soluções que realmente geram valor.</p>
      <p>Gosto de transformar ideias em produtos funcionais, sempre buscando novas formas de inovar, melhorar processos e agregar valor aos produtos com os quais já trabalhei e continuo trabalhando.</p>
      <p>Sou movido por desafios e acredito que cada problema é uma oportunidade para aprender, evoluir e encontrar soluções melhores. Estou sempre buscando aprimorar meus conhecimentos e acompanhar novas tecnologias para construir experiências cada vez mais eficientes, escaláveis e relevantes.</p>
      <p>Mais do que escrever código, gosto de entender o problema por trás de cada produto e contribuir para que ele evolua e alcance seu verdadeiro potencial. Se você tem uma ideia, um projeto ou simplesmente quer trocar uma ideia sobre tecnologia, entre em contato comigo e vamos conversar.</p>
    `,
    'skills.title': 'Habilidades', 'skills.subtitle': 'Ferramentas e tecnologias que uso no dia a dia para construir produtos de ponta a ponta.',
    'skills.frontend': 'Front-end', 'skills.backend': 'Back-end', 'skills.database': 'Banco de dados', 'skills.deploy': 'Deploy',
    'projects.title': 'Projetos', 'projects.subtitle': 'Uma seleção de sistemas que projetei e desenvolvi, do zero à produção.',
    'projects.viewDeploy': 'ver deploy', 'projects.viewCode': 'ver código', 'projects.inProgress': 'Em andamento',
    'projects.dprazo.desc': 'Sistema para controle de prazos processuais de escritórios de advocacia, com organização por urgência e status.',
    'projects.controlAttendances.desc': 'API REST para controle e gestão de chamados de suporte.',
    'projects.brpizza.desc': 'Sistema full stack para gerenciamento de pedidos de uma pizzaria, com painel web e app mobile.',
    'projects.yig.desc': 'Landing page institucional para uma agência de marketing.',
    'projects.patrihub.desc': 'Sistema full stack para controle de patrimônio, com cadastro, rastreio e relatórios de bens.',
    'experience.title': 'Experiência', 'experience.subtitle': 'Linha do tempo da minha trajetória profissional.',
    'experience.present': 'Atual',
    'experience.tnt.role': 'Desenvolvedor Back-end · TT&T',
    'experience.tnt.period': 'Julho de 2024 — Setembro de 2024',
    'experience.tnt.desc': 'Trabalhei como desenvolvedor estagiário utilizando Java (Spring Boot), construindo e desenvolvendo APIs REST.',
    'experience.infocraft.role': 'Desenvolvedor Full Stack · Infocraft Comércio, Serviços e Informática',
    'experience.infocraft.period': 'Outubro de 2024 — Junho de 2026',
    'experience.infocraft.desc': 'Trabalhei como desenvolvedor Full Stack utilizando PHP como tecnologia principal. Durante minha passagem pela Infocraft, participei tanto da manutenção de um sistema educacional utilizando ScriptCase quanto da criação de um novo produto utilizando Laravel, Livewire e FluxUI. Nesse período, entendi na prática como um software em produção funciona, participando de fluxos com metodologias ágeis e entregas rápidas.',
    'experience.w5i.role': 'Desenvolvedor Full Stack (estágio) · W5i Tecnologia',
    'experience.w5i.period': 'Junho de 2026 — Atual',
    'experience.w5i.desc': 'Atuo no desenvolvimento e na manutenção de sistemas internos da empresa, aplicando na prática as tecnologias e os processos que venho consolidando ao longo da carreira.',
    'experience.freelancer.role': 'Desenvolvedor Freelancer',
    'experience.freelancer.period': 'Paralelo às demais experiências',
    'experience.freelancer.desc': 'Minha experiência como desenvolvedor freelancer me deu a capacidade de pensar no software como um todo, além do contato direto com o cliente, o que agregou bastante às minhas soft skills.',
    'footer.title': 'Vamos construir algo juntos?',
    'footer.subtitle': 'Se você tem uma ideia, um projeto ou só quer trocar uma ideia sobre tecnologia, meu inbox está aberto.',
    'footer.emailCta': 'enviar um e-mail',
    'footer.rights': 'Feito com café e algumas linhas de código.',
  },
  en: {
    'nav.about': 'about', 'nav.skills': 'skills', 'nav.projects': 'projects',
    'nav.experience': 'experience', 'nav.contact': 'contact',
    'hero.eyebrow': 'available for new opportunities',
    'hero.role': '21-year-old Full Stack Developer. I turn ideas into functional, scalable, well-thought-out products.',
    'hero.cta1': 'view projects', 'hero.cta2': 'get in touch',
    'hero.typed': 'starting_career --stack="React, Node, Laravel, TypeScript"',
    'about.title': 'About me',
    'about.html': `
      <p>I'm a 21-year-old Full Stack developer, passionate about technology, innovation, and building solutions that truly create value.</p>
      <p>I enjoy turning ideas into functional products, always looking for new ways to innovate, improve processes, and add value to the products I've worked on and continue working on.</p>
      <p>I'm driven by challenges and believe every problem is an opportunity to learn, grow, and find better solutions. I'm constantly working to sharpen my skills and keep up with new technologies to build increasingly efficient, scalable, and relevant experiences.</p>
      <p>More than writing code, I like understanding the problem behind each product and helping it evolve to reach its true potential. If you have an idea, a project, or just want to talk about technology, reach out and let's talk.</p>
    `,
    'skills.title': 'Skills', 'skills.subtitle': 'Tools and technologies I use day to day to build products end to end.',
    'skills.frontend': 'Front-end', 'skills.backend': 'Back-end', 'skills.database': 'Database', 'skills.deploy': 'Deploy',
    'projects.title': 'Projects', 'projects.subtitle': 'A selection of systems I designed and built, from scratch to production.',
    'projects.viewDeploy': 'view deploy', 'projects.viewCode': 'view code', 'projects.inProgress': 'In progress',
    'projects.dprazo.desc': 'System for managing legal case deadlines for law firms, with urgency-based organization and status tracking.',
    'projects.controlAttendances.desc': 'REST API for managing and tracking support tickets.',
    'projects.brpizza.desc': 'Full stack order management system for a pizzeria, with a web dashboard and mobile app.',
    'projects.yig.desc': 'Institutional landing page for a marketing agency.',
    'projects.patrihub.desc': 'Full stack asset management system, with registration, tracking, and reporting.',
    'experience.title': 'Experience', 'experience.subtitle': 'Timeline of my professional journey.',
    'experience.present': 'Present',
    'experience.tnt.role': 'Back-end Developer · TT&T',
    'experience.tnt.period': 'July 2024 — September 2024',
    'experience.tnt.desc': 'Worked as an intern developer using Java (Spring Boot), building and developing REST APIs.',
    'experience.infocraft.role': 'Full Stack Developer · Infocraft Comércio, Serviços e Informática',
    'experience.infocraft.period': 'October 2024 — June 2026',
    'experience.infocraft.desc': 'Worked as a Full Stack developer, mainly using PHP. During my time at Infocraft, I maintained an educational system built with ScriptCase and helped build a new product using Laravel, Livewire, and FluxUI. During this period, I learned firsthand how production software really works, taking part in agile workflows and fast deliveries.',
    'experience.w5i.role': 'Full Stack Developer (internship) · W5i Tecnologia',
    'experience.w5i.period': 'June 2026 — Present',
    'experience.w5i.desc': 'I work on developing and maintaining the company\'s internal systems, applying in practice the technologies and processes I\'ve been building throughout my career.',
    'experience.freelancer.role': 'Freelance Developer',
    'experience.freelancer.period': 'Alongside other experiences',
    'experience.freelancer.desc': 'My experience as a freelance developer gave me the ability to think about software as a whole, plus direct client contact, which added a lot to my soft skills.',
    'footer.title': "Let's build something together?",
    'footer.subtitle': "If you have an idea, a project, or just want to talk about tech, my inbox is open.",
    'footer.emailCta': 'send an email',
    'footer.rights': 'Made with coffee and a few lines of code.',
  }
};

let currentLang = 'pt';

function iconFor(tech) {
  const map = {
    'Laravel': 'devicon-laravel-plain colored', 'PHP': 'devicon-php-plain colored',
    'Livewire': 'devicon-laravel-plain colored', 'FilamentPHP': 'devicon-laravel-plain colored',
    'Node.js': 'devicon-nodejs-plain colored', 'Next.js': 'devicon-nextjs-plain',
    'React Native': 'devicon-react-original colored', 'React': 'devicon-react-original colored',
    'Spring Boot': 'devicon-spring-plain colored', 'Java': 'devicon-java-plain colored',
    'Vite': 'devicon-vitejs-plain colored', 'TypeScript': 'devicon-typescript-plain colored',
  };
  return map[tech] || null;
}

function renderProjects() {
  const grid = document.getElementById('projects-grid');
  grid.innerHTML = '';
  projects.forEach(p => {
    const t = dict[currentLang];
    const linkLabel = p.link.type === 'deploy' ? t['projects.viewDeploy'] : t['projects.viewCode'];
    const linkIcon = p.link.type === 'deploy'
      ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6M10 14 21 3"/></svg>'
      : '<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61a3.18 3.18 0 0 0-1.33-1.75c-1.09-.75.08-.74.08-.74a2.52 2.52 0 0 1 1.84 1.24 2.56 2.56 0 0 0 3.5 1 2.56 2.56 0 0 1 .76-1.6c-2.67-.3-5.47-1.33-5.47-5.93a4.64 4.64 0 0 1 1.24-3.23 4.28 4.28 0 0 1 .12-3.19s1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24a4.28 4.28 0 0 1 .12 3.19 4.64 4.64 0 0 1 1.24 3.23c0 4.61-2.81 5.63-5.49 5.93a2.86 2.86 0 0 1 .82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0 0 12 .5z"/></svg>';

    const badge = p.badge
      ? `<span class="absolute top-4 right-4 bg-amber-400 text-[#1a1400] text-[11px] font-mono-tight font-semibold px-2.5 py-1 rounded-full">${t['projects.' + p.badge]}</span>`
      : '';

    const stackChips = p.stack.map(s => {
      const icon = iconFor(s);
      return `<span class="skill-chip">${icon ? `<i class="${icon}"></i>` : ''} ${s}</span>`;
    }).join('');

    const card = document.createElement('div');
    card.className = 'card-hover surface border rounded-xl overflow-hidden relative';
    card.innerHTML = `
      ${badge}
      <div class="h-40 surface-soft flex items-center justify-center border-b divider">
        <span class="font-mono-tight text-xs text-muted">// preview em breve</span>
      </div>
      <div class="p-6">
        <h3 class="font-mono-tight font-semibold text-lg mb-2">${p.title}</h3>
        <p class="text-sm text-muted mb-4 leading-relaxed">${t['projects.' + p.key + '.desc']}</p>
        <div class="flex flex-wrap gap-2 mb-5">${stackChips}</div>
        <a href="${p.link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-2 font-mono-tight text-sm font-semibold text-brand-600 dark:text-brand-400 hover:underline">
          ${linkIcon} ${linkLabel}
        </a>
      </div>
    `;
    grid.appendChild(card);
  });
}

function renderExperience() {
  const list = document.getElementById('experience-list');
  const t = dict[currentLang];
  list.innerHTML = '<div class="absolute left-[7px] top-2 bottom-2 w-px divider border-l"></div>';
  experiences.forEach(e => {
    const item = document.createElement('div');
    item.className = 'relative pl-9 pb-10 last:pb-0';
    item.innerHTML = `
      <span class="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-brand-500 border-4 surface"></span>
      <p class="font-mono-tight text-xs text-brand-600 dark:text-brand-400 mb-1">${t['experience.' + e.key + '.period']}</p>
      <h3 class="font-mono-tight font-semibold text-base mb-2">${t['experience.' + e.key + '.role']}</h3>
      <p class="text-sm text-muted leading-relaxed max-w-2xl">${t['experience.' + e.key + '.desc']}</p>
    `;
    list.appendChild(item);
  });
}

function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[lang][key] !== undefined) el.textContent = dict[lang][key];
  });
  document.querySelector('[data-i18n-html="about.text"]').innerHTML = dict[lang]['about.html'];
  document.getElementById('typed-line').textContent = '';
  typeLine(dict[lang]['hero.typed']);

  document.getElementById('lang-pt').classList.toggle('bg-brand-600', lang === 'pt');
  document.getElementById('lang-pt').classList.toggle('text-white', lang === 'pt');
  document.getElementById('lang-en').classList.toggle('bg-brand-600', lang === 'en');
  document.getElementById('lang-en').classList.toggle('text-white', lang === 'en');

  renderProjects();
  renderExperience();
}

/* ============ TYPEWRITER ============ */
let typeTimer = null;
function typeLine(text) {
  clearInterval(typeTimer);
  const el = document.getElementById('typed-line');
  let i = 0;
  typeTimer = setInterval(() => {
    el.textContent = text.slice(0, i);
    i++;
    if (i > text.length) clearInterval(typeTimer);
  }, 32);
}

/* ============ THEME ============ */
const root = document.documentElement;
const sun = document.getElementById('icon-sun');
const moon = document.getElementById('icon-moon');

function setTheme(isDark) {
  root.classList.toggle('dark', isDark);
  sun.classList.toggle('hidden', !isDark);
  moon.classList.toggle('hidden', isDark);
}

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
setTheme(prefersDark);

document.getElementById('theme-toggle').addEventListener('click', () => {
  setTheme(!root.classList.contains('dark'));
});

/* ============ NAV / MENU ============ */
document.getElementById('lang-pt').addEventListener('click', () => applyLang('pt'));
document.getElementById('lang-en').addEventListener('click', () => applyLang('en'));

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
menuToggle.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
document.querySelectorAll('.mobile-link').forEach(l => l.addEventListener('click', () => mobileMenu.classList.add('hidden')));

/* ============ SCROLL SPY ============ */
const sections = ['sobre', 'habilidades', 'projetos', 'experiencia', 'contato'];
const navMap = { sobre: 'nav.about', habilidades: 'nav.skills', projetos: 'nav.projects', experiencia: 'nav.experience', contato: 'nav.contact' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-pill').forEach(a => a.classList.remove('active'));
      const id = entry.target.id;
      document.querySelectorAll(`a[href="#${id}"]`).forEach(a => a.classList.add('active'));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(id => { const s = document.getElementById(id); if (s) observer.observe(s); });

/* ============ REVEAL ON SCROLL ============ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('in'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============ INIT ============ */
document.getElementById('year').textContent = new Date().getFullYear();
applyLang('pt');
