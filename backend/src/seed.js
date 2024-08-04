const sequelize = require('./config/database');
const Destination = require('./models/Destination');
const Attraction = require('./models/Attraction');

const seed = async () => {
  try {
    await sequelize.sync({ force: true });

    const destinos = [
      {
        name: 'São Luís',
        description: 'Capital do Maranhão, conhecida por seu patrimônio histórico.',
        imageUrl: 'https://www.blogsoestado.com/danielmatos/files/2018/08/livro-nossa-sao-lu%C3%ADs.jpg',
        region: 'Norte',
        lat: -2.5293,
        lng: -44.3028
      },
      {
        name: 'Lençóis Maranhenses',
        description: 'Parque Nacional conhecido por suas dunas e lagoas.',
        imageUrl: 'https://hilnethcorreia.com.br/wp-content/uploads/2024/07/lencois-maranhenses-national-park.jpg',
        region: 'Norte',
        lat: -2.5146,
        lng: -43.1137
      },
      {
        name: 'Chapada das Mesas',
        description: 'Parque Nacional com formações rochosas e cachoeiras impressionantes.',
        imageUrl: 'https://r5j2d2t3.rocketcdn.me/wp-content/uploads/2019/09/chapada-das-mesas-maranhao-023.jpg',
        region: 'Norte',
        lat: -5.6180,
        lng: -47.4433
      },
      {
        name: 'Barreirinhas',
        description: 'Cidade porta de entrada para os Lençóis Maranhenses.',
        imageUrl: 'https://barreirinhasbrasil.com/wp-content/uploads/2023/05/Barreirinhas-Brasil-1st-img.jpg',
        region: 'Norte',
        lat: -2.7616,
        lng: -43.2299
      },
      {
        name: 'São José de Ribamar',
        description: 'Cidade litorânea conhecida por suas praias e festas religiosas.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b3/Church_of_S%C3%A3o_Jos%C3%A9_de_Ribamar.jpg',
        region: 'Norte',
        lat: -2.5166,
        lng: -44.2290
      },
      {
        name: 'Alcântara',
        description: 'Cidade histórica com ruínas coloniais e uma rica história.',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Alc%C3%A2ntara_-_01.jpg',
        region: 'Norte',
        lat: -2.4078,
        lng: -44.4193
      }
    ];

    const createdDestinos = await Promise.all(destinos.map(destino => Destination.create(destino)));

    const attractions = [
      {
        name: 'Centro Histórico',
        type: 'Cultural',
        description: 'Área com arquitetura colonial portuguesa.',
        tips: 'Visite durante o dia para aproveitar a luz natural.',
        destinationId: createdDestinos[0].id
      },
      {
        name: 'Lagoa Bonita',
        type: 'Natural',
        description: 'Uma das lagoas mais famosas dos Lençóis Maranhenses.',
        tips: 'Leve protetor solar e bastante água.',
        destinationId: createdDestinos[1].id
      },
      {
        name: 'Cachoeira do Prata',
        type: 'Natural',
        description: 'Belíssima cachoeira em uma área de vegetação densa.',
        tips: 'Caminhe com cuidado e leve sapatos apropriados.',
        destinationId: createdDestinos[2].id
      },
      {
        name: 'Praia de Atins',
        type: 'Natural',
        description: 'Praia tranquila com águas cristalinas e areia branca.',
        tips: 'Ótima para relaxar e praticar esportes aquáticos.',
        destinationId: createdDestinos[3].id
      },
      {
        name: 'Igreja de São José',
        type: 'Cultural',
        description: 'Igreja histórica com arquitetura colonial portuguesa.',
        tips: 'Visite durante as celebrações para uma experiência completa.',
        destinationId: createdDestinos[4].id
      },
      {
        name: 'Ruínas de Alcântara',
        type: 'Histórico',
        description: 'Ruínas de uma antiga cidade colonial com muita história.',
        tips: 'Leve água e use um chapéu para se proteger do sol.',
        destinationId: createdDestinos[5].id
      }
    ];

    await Promise.all(attractions.map(attraction => Attraction.create(attraction)));

    console.log('Dados inseridos com sucesso!');
  } catch (err) {
    console.error('Erro ao inserir dados: ', err);
  } finally {
    await sequelize.close();
  }
};

seed();
