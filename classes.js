/**
 * Classe Titulo representa um título genérico com atributos id e nome.
 * @class
 */
class Titulo {
    /**
     * Cria uma instância da classe Titulo.
     * @constructor
     * @param {number} id - O identificador único do título.
     * @param {string} nome - O nome do título.
     */
    constructor(id, nome) {
        this.id = id;
        this.nome = nome;
    }
}

/**
 * Classe Musica herda de Titulo e representa uma música com atributos cantores e álbum.
 * @class
 */
class Musica extends Titulo {
    /**
     * Cria uma instância da classe Musica.
     * @constructor
     * @param {number} id - O identificador único da música.
     * @param {string} nome - O nome da música.
     * @param {string} cantores - Os cantores da música.
     * @param {string} album - O álbum da música.
     */
    constructor(id, nome, cantores, album) {
        super(id, nome); // Chama o construtor da classe pai (Titulo)
        this.cantores = cantores;
        this.album = album;
    }
}

/**
 * Classe Podcast herda de Titulo e representa um podcast com atributos gênero e apresentadores.
 * @class
 */
class Podcast extends Titulo {
    /**
     * Cria uma instância da classe Podcast.
     * @constructor
     * @param {number} id - O identificador único do podcast.
     * @param {string} nome - O nome do podcast.
     * @param {string} genero - O gênero do podcast.
     * @param {string} apresentadores - Os apresentadores do podcast.
     */
    constructor(id, nome, genero, apresentadores) {
        super(id, nome); // Chama o construtor da classe pai (Titulo)
        this.genero = genero;
        this.apresentadores = apresentadores;
    }
}

/**
 * Classe Playlist representa uma lista de reprodução com um nome e títulos.
 * @class
 */
class Playlist {
    /**
     * Cria uma instância da classe Playlist.
     * @constructor
     * @param {string} nome - O nome da lista de reprodução.
     */
    constructor(nome) {
        this.nome = nome;
        this.titulos = [];
    }

    /**
     * Adiciona um título à lista de reprodução, desde que seja uma instância da classe Musica.
     * @param {Titulo} titulo - O título a ser adicionado à lista de reprodução.
     */
    adicionarTitulo(titulo) {
        if (titulo instanceof Musica) {
            this.titulos.push(titulo);
        } else {
            console.error('A playlist só pode ser formada por músicas.');
        }
    }
}
