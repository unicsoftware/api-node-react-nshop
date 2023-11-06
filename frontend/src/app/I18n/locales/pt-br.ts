export default {
  translations: {
    menu: {
      home: 'Início',
      'examples-gallery': 'Galeria de exemplos',
      'store-products': 'Produtos da minha loja',
    },
    'base-layout': {
      help: 'Ajuda para desenvolvedores',
      back: 'Voltar',
      'aria-label': {
        menu: 'Menu principal',
      },
    },
    home: {
      title:"Fábrica de Scritps",
      'first-card': {
        title: 'Aqui você poderá obter os melhores Scripts para sua loja!',
        description:
          'Este aplicativo lhe trará uma maior flexibilidade para manter seu Layout ativo e recebedo atualizações da NuvemShop. É isso emsmo, você não precisará abrir o seu FTP para realizar alterações desejadas em seu layout.',
        link: {
          text: 'Conheça mais sobre nosso aplicativo acessando a página do produto.',
          url: 'https://unicsoftware.com.br/chatproductai',
        },
      },
      'second-card': {
        title: 'Contador de produtos da Loja',
        description:
          'Os produtos de exemplo são criados com o nome e preço aleatórios, como exemplo. Podendo modificá-los e eliminá-los há qualquer momento.',
        'total-product': 'Total de produtos',
        'create-products': 'Criar produto',
      },
    },
    tutorial: {
      title: 'Finalize o processo de autenticação',
      first:
        'Acesse <0>Dados básicos</0> em detalhes do aplicativo, no portal de parceiros. No campo URL de redirecionamento, copie e cole o endereço',
      second:
        'No campo URL de redirecionamento, copie e cole o endereço <0>http://{{appUrl}}</0>',
      third:
        'Copie este final da URL <0>/admin/apps/{{clientId}}/authorize</0> e cole no final da URL da loja que você vai instalar o aplicativo',
      fourth:
        'Clique no botão <0>Aceitar e começar a usar</0> para instalar o aplicativo',
      fifth:
        'Após o redirecionamento para Template de aplicativo, a requisição será executada e o processo de autenticação estará concluído',
    },
    products: {
      title: 'Produtos da Loja',
      name: 'Nome',
      remove: 'Excluir',
      'no-content': 'Não há produtos para serem exibidos',
      selected: {
        single: 'Selecionado',
        many: 'Selecionados',
      },
    },
  },
};
