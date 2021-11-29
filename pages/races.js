import Layout from '../components/layouts'
import flags from '../flags'

export default function Races({ races }) {

  const setDate = date => new Date() < new Date(date) ? ['à venir', 'tag comming'] : ['terminé', 'tag complete']

  return (
    <Layout>
      <header className="flex items-center text-gray-500">
        <p className="w-9 md:w-10 pr-2 py-1 text-right text-red">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-22 md:w-26 px-2 py-1">Status</p>
        <p className="w-28 md:w-32 pl-2 py-1">Date</p>
        <p className="w-12 md:w-14 py-1 text-transparent">Heure</p>
        <p className="w-20 md:w-22 py-1 text-center">Local</p>
        <p className="w-80 md:w-96 px-2 py-1">Circuit</p>
        <p className="w-42 md:w-48 px-2 py-1">Ville</p>
        <p className="w-18 md:w-20 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-18 md:w-20 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-18 md:w-20 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-18 md:w-20 py-1 text-center text-white text-base md:text-lg">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
      </header>
      <ul className="md:border-t md:border-b border-gray-700 md:divide-y divide-gray-700">

        { races.map(race =>

        <li key={ race.round } className="flex items-center bg-gray-800 md:hover:bg-gray-700">
          <p className="w-9 md:w-10 pr-2 py-1 text-right text-gray-500">{ race.round }</p>
          <div className="w-22 md:w-26 px-2 py-1">
            <p className={ setDate(`${ race.date }T${ race.time }`)[1] }>{ setDate(`${ race.date }T${ race.time }`)[0] }</p>
          </div>
          <p className="w-28 md:w-32 pl-2 py-1">{ race.date }</p>
          <p className="w-12 w-14 py-1 text-center">{ race.time.substring(0, 5) }</p>
          <p className="w-20 md:w-22 py-1 text-center text-gray-500">-</p>
          <p className="w-80 md:w-96 px-2 py-1 text-base md:text-lg font-semibold">{ race.Circuit.circuitName }</p>
          <p className="w-18 md:w-20 pl-2 py-1 uppercase">{ flags[race.Circuit.Location.country.toLowerCase()] } { race.Circuit.Location.country.substring(0, 3) }</p>
          <p className="w-24 md:w-28 py-1">{ race.Circuit.Location.locality }</p>
          <p className="w-18 md:w-20 py-1 text-center text-white font-semibold uppercase">{ flags[race.Results[0].Driver.nationality.toLowerCase()] } { race.Results[0].Driver.familyName.substring(0, 3) }</p>
          <p className="w-18 md:w-20 py-1 text-center text-white font-semibold uppercase">{ flags[race.Results[1].Driver.nationality.toLowerCase()] } { race.Results[1].Driver.familyName.substring(0, 3) }</p>
          <p className="w-18 md:w-20 py-1 text-center text-white font-semibold uppercase">{ flags[race.Results[2].Driver.nationality.toLowerCase()] } { race.Results[2].Driver.familyName.substring(0, 3) }</p>
          <p className="w-18 md:w-20 py-1 text-center text-white font-semibold uppercase">{ flags[race.Results[3].Driver.nationality.toLowerCase()] } { race.Results[3].Driver.familyName.substring(0, 3) }</p>
        </li>

        )}

      </ul>

    </Layout>
  )
}

export async function getStaticProps() {

  const fetchRaces = await fetch('https://ergast.com/api/f1/current/results.json?limit=1000')
  const dataRaces = await fetchRaces.json()
  const races = await dataRaces.MRData.RaceTable.Races

  // const fasters = []
  // await races.map(race => { fasters[race.round] = race.Results.find(result => result.FastestLap.rank === '1').Driver })

  return {
    props: {
      races
    }
  } 
}