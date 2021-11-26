import Layout from '../components/layouts'

export default function Races({ races }) {

  console.log(races)

  return (
    <Layout>
      <header className="flex items-center text-gray-500">
        <p className="w-10 pr-2 py-1 text-right">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-26 px-2 py-1">Status</p>
        <p className="w-32 pl-2 py-1">Date</p>
        <p className="w-14 py-1 text-transparent">Heure</p>
        <p className="w-22 py-1 text-center">Local</p>
        <p className="w-96 px-2 py-1">Circuit</p>
        <p className="w-48 px-2 py-1">Ville</p>
        <p className="w-20 py-1 text-center text-white text-xl">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-20 py-1 text-center text-white text-xl">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-20 py-1 text-center text-white text-xl">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-20 py-1 text-center text-white text-lg">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
      </header>
      <ul className="border-t border-b border-gray-700 divide-y divide-gray-700">

        { races.map(race =>

        <li key={ race.round } className="flex items-center bg-gray-800 hover:bg-gray-700">
          <p className="w-10 pr-2 py-1 text-right text-gray-500">{ race.round }</p>
          <div className="w-26 px-2 py-1">
            <p className="tag complete">completed</p>
          </div>
          <p className="w-32 pl-2 py-1">{ race.date }</p>
          <p className="w-14 py-1 text-center">{ race.time.substring(0, 5) }</p>
          <p className="w-22 py-1 text-center text-gray-500">-</p>
          <p className="w-96 px-2 py-1 text-lg font-semibold">{ race.Circuit.circuitName }</p>
          <p className="w-20 pl-2 py-1 uppercase">🏳 { race.Circuit.Location.country.substring(0, 3) }</p>
          <p className="w-28 py-1">{ race.Circuit.Location.locality }</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🏳 [PIL]</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🏳 [PIL]</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🏳 [PIL]</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🏳 [PIL]</p>
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

  return {
    props: {
      races
    }
  } 
}