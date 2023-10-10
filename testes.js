// Importe as classes que você definiu em classes.js, se necessário (não incluído no código fornecido)

// Crie 2 objetos da classe Podcast
const podcast1 = new Podcast(1, 'Podcast 1', 'Entrevistas', 'Apresentador 1');
const podcast2 = new Podcast(2, 'Podcast 2', 'Tecnologia', 'Apresentador 2');

// Crie 10 objetos da classe Musica
let musica1 = new Musica('afterdark.jpg', 'After Dark', 'AKFG', 'World World World');
let musica2 = new Musica('Lutar pelo que é meu', 'Charlie Brown JR', 'Transpiração Continua Prolongada');
let musica3 = new Musica('Iron Man', 'Black Sabbath', 'Paranoid');
let musica4 = new Musica('Pink Venom', 'BlackPink', 'BornPink');
let musica5 = new Musica('Californication', 'Red Hot Chilli Peppers', 'Californication');
let musica6 = new Musica('Come As You Are', 'Nirvana', 'Nevermind');
let musica7 = new Musica('Red Flavor', 'Red Velvet', 'The Red Summer');
let musica8 = new Musica('Há Tempos', 'Legião Urbana', 'As Quatro Estações');
let musica9 = new Musica('Akumunoomake', 'gesunokiwamiotome', 'Akumunoomake');
let musica10 = new Musica('Metropolis', 'ALI', 'LOVE, MUSIC AND DANCE');

// Crie 1 objeto da classe Playlist
const minhaPlaylist = new Playlist('Minha Playlist');

// Adicione os objetos da classe Podcast à Playlist
minhaPlaylist.adicionarTitulo(podcast1);
minhaPlaylist.adicionarTitulo(podcast2);

// Adicione os objetos da classe Musica à Playlist
minhaPlaylist.adicionarTitulo(musica1);
minhaPlaylist.adicionarTitulo(musica2);
minhaPlaylist.adicionarTitulo(musica3);
minhaPlaylist.adicionarTitulo(musica4);
minhaPlaylist.adicionarTitulo(musica5);
minhaPlaylist.adicionarTitulo(musica6);
minhaPlaylist.adicionarTitulo(musica7);
minhaPlaylist.adicionarTitulo(musica8);

// Imprima a Playlist no console
console.log(minhaPlaylist);
