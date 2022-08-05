
import '../CreatePost.css';

function GameGenres({setGenre}) {
  const genres = [
    { label: 'ACT', value: 'Action' },
    { label: 'ADV', value: 'Adventure' },
    { label: 'STR', value: 'Strategy' },
    { label: 'SHO', value: 'Shooter' },
    { label: 'SIM', value: 'Simulation' },
    { label: 'SPO', value: 'Sport' },
    { label: 'FIG', value: 'Fighting' },
    { label: 'RAC', value: 'Racing' },
    { label: 'OTH', value: 'Other' }
];



let handleGenreChange = (e) => {
    setGenre(e.target.value)
}

  return (

    <select id="genre" placeholder="Genre" className="input-name" onChange={handleGenreChange}> 
      <option value="⬇️ Select a genre ⬇️"> -- Select a genre -- </option>
      {genres.map((genre) => <option key={genre.label} value={genre.value}>{genre.value}</option>)}
    </select>
  );
}

export default GameGenres;