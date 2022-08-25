import { useParams } from "react-router-dom";
import movie from '../Response/movie.json';
import credits from '../Response/credits.json';

const URL = "https://image.tmdb.org/t/p/original";

function Movie() {
  const params = useParams();
  const releaseDate = new Date(movie.release_date);

  const crew = credits.crew.filter(v => ['Characters', 'Director', 'Screenplay'].includes(v.job));
  
  console.log(params.movieId);
  return (
    <div>
      <section className="flex justify-center items-center bg-purple-custom text-white px-4 py-14">
        <div className="flex w-full	max-w-7xl">
          <div className="w-96 shrink-0 mr-8">
            <img className="absolute shadow-md rounded" width="383" height="574" alt="" src={URL + movie.poster_path}/>
          </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold mb-2">{movie.original_title} ({releaseDate.getFullYear()})</h1>
            <p className="text-lg mb-4">
              {`${("0" + releaseDate.getDate()).substring(-2)}/${("0" + releaseDate.getMonth()).substring(-2)}/${releaseDate.getFullYear()}`} (BR)
              • {movie.genres.map(genre => genre.name).join(', ')} • {Math.floor(movie.runtime/60)}h {movie.runtime%60}m
            </p>
            <div className="flex items-center mb-8">
              <div class="progress-radial progress-76"><b></b></div>
              <p className="leading-5 ml-3">Avaliação dos<br/>usuários</p>
            </div>
            <h2 className="text-xl font-bold mb-2">Sinopse</h2>
            <p className="max-w-3xl mb-6">{movie.overview}</p>
            <div className="grid gap-y-6 grid-cols-3">
              {crew.map(c => (
                <div>
                  <div className="font-bold">{c.name}</div>
                  <div>{c.job}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center px-4 py-16">
        <div className="flex flex-col w-full	max-w-7xl">
          <h2 className="text-neutral-900 text-2xl font-bold mb-8">Elenco original</h2>
          <div className="flex">
            <div>
              
            </div>
          </div>
          <h2 className="text-neutral-900 text-2xl font-bold mb-8">Trailer</h2>
          <h2 className="text-neutral-900 text-2xl font-bold mb-8">Recomendações</h2>
        </div>
      </section>
    </div>
  );
}

export default Movie;
