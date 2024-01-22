/* eslint-disable max-len */
import recipeApp from '../imagens/app-de-receitas/login.png';
import iChoveu from '../imagens/ichoveu/search.png';
import StarWars from '../imagens/starwars/home.png';
import trybeNews from '../imagens/trybeNews/trybeNews.png';

export const data = [
  {
    id: 'Recipe App',
    location: 'https://github.com/netoelix/project-app-de-receitas',
    images: recipeApp,
    about: 'A Central de Receitas Mobile é uma plataforma dedicada a oferecer uma experiência culinária envolvente e personalizada. Com um login intuitivo e recursos robustos, os usuários podem explorar uma vasta gama de receitas, personalizando suas buscas e salvando suas preferências. Desenvolvida com React, a aplicação garante uma navegação suave e estilização visualmente agradável. A integração de APIs de bebida e comida proporciona um catálogo diversificado, enquanto a Context API facilita o acesso global aos dados, tornando a Central de Receitas Mobile uma escolha ideal para entusiastas culinários de todos os níveis.',
    technology: 'Desenvolvimento em React: Interface de usuário fluida e responsiva. Estilização com React Component: Design visualmente atraente e coeso. Integração de APIs: Utilização de APIs de bebida e comida para uma ampla variedade de receitas. Context API para Gerenciamento Global de Dados: Alocação global de dados para acesso eficiente em toda a aplicação.',
    resources: 'Login Personalizado: Registro de informações de receitas feitas, iniciadas e favoritas para acesso rápido. Diversidade de Receitas: Categorias distintas para comidas e bebidas. Modo de preparo, vídeo explicativo, ingredientes e recomendações exclusivas para cada receita. Filtros Personalizados: Opções de filtro para tipos de bebidas ou comidas. Campo de pesquisa por nome, ingrediente ou primeira letra.',
  },
  {
    id: 'Trybe News',
    location: 'https://github.com/netoelix/trybe-news',
    images: trybeNews,
  },
  {
    id: 'iChoveu',
    location: 'https://github.com/netoelix/project-iChoveu',
    images: iChoveu,
  },
  {
    id: 'StarWars Planets',
    location: 'https://github.com/netoelix/project-starwars-planets',
    images: StarWars,
  },
];
