import React, { useEffect, useState } from 'react';
import axios from 'axios';
// useParams vai trazer pra nos o ID do anime
import { useParams, Link } from 'react-router-dom';

const AnimeDetail = () => {

    //criar variavel que vai receber os animes
    const [anime, setAnime] = useState(null)

    //Pegar o id do anime, metodo destrutor
    const { id } = useParams();

    //UseEffect para carregar o anime pela id.
    //usar [id] no final para executar toda vez que mudar
    useEffect(() => {
        //usa crase para criar uma interpolação
        axios
            .get(`https://api.jikan.moe/v4/anime/${id}`)
            .then((response) => setAnime(response.data.data))
            .catch((error) => console.log(error))
    }, [id])
    //  Retornar componente
    return (
        //Digitar codigo html dentro do react fragment
        <React.Fragment>

            <div className="container">
                {
                    anime ? (
                        <div className="card">
                            <div className="row">
                                <div className="col-md-4">
                                    <img src={anime.images.jpg.large_image_url}
                                        alt={anime.title}
                                        className="card-img"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title">{anime.title}</h1>
                                        <p className="card-text">{anime.synopsis}</p>
                                        <Link to="/" 
                                        className="btn btn-primary">
                                            Voltar para o Home
                                            </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>
                            Carregando...
                        </p>
                    )
                }
            </div>

        </React.Fragment>
    )

    //Fim
}
export default AnimeDetail;

