// Fazer a importação das bibliotecas ou pacotes ou gems
// Importar o React e alguns hooks do React
// useState que eu posso manipular o estado do componente
//useEffect que eu posso efeito do componente
import React, { useState, useEffect } from 'react';

// Importar o axios para conexão com o servidor backend
import axios from 'axios';

// Importar pacote do link da pagina.
import { Link } from 'react-router-dom';

// Função de retorno
// Constante e retornar ela
const AnimeList = () => {
    //Inicio
    // Criar uma colecao de animes
    // criar um objeto animes para receber os dados
    const [animes, setAnimes] = useState([]);

    // Depois de carregar a pagina eu quero que ele
    // consulte o servidor de animes
    useEffect(() => {
        // Aqui eu vou implantar a logica de consulta
        axios.get("https://api.jikan.moe/v4/top/anime")
            .then((response) => setAnimes(response.data.data))
            .catch((error) =>
                console.error("Erro ao consultar: ", error));
    }, []); //[] garate que o useEffect seja executado so uma vez

    // class é uma palavra reservada do JS
    // quando quero usar classe no hmtl eu uso className
    return (
        <div className='container mt-5'>
            <h1 className='text-center mb-4'>Top Animes</h1>
            <div className='row'>
                {
                    animes.map(
                        (anime) => (
                            // nesse intervalo eu vou criar o cartao
                            <div className='col-md-4 mb-4' key={anime.mal_id}>
                                <div className='card h-100'>
                                    <img 
                                    src={anime.images.jpg.large_image_url} 
                                    alt={anime.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            {anime.title}
                                        </h5>
                                    </div> 
                                </div>
                            </div>

                        )
                    )
                }
            </div>
        </div>
    )

    //Fim
};

// Exportar essa função
export default AnimeList;