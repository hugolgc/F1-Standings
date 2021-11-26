import Layout from '../components/layouts'

export default function Drivers({ drivers, racesResults }) {

  const searchResults = () => '-'
  console.log(drivers, racesResults)

  return (
    <Layout>
      <header className="flex items-center text-gray-500">
        <p className="w-10 pr-2 py-1 text-right">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-12 pr-2 py-1 text-right">
          <abbr title="Numéro">#</abbr>
        </p>
        <p className="w-58 px-2 py-1">Pilote</p>
        <p className="w-48 px-2 py-1">Pays</p>
        <p className="w-48 px-2 py-1">Équipe</p>
        <p className="w-10 py-1 text-center text-white text-xl">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-10 py-1 text-center text-white text-xl">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-10 py-1 text-center text-white text-xl">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Quatrième place">4</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Cinquième place">5</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Sixième place">6</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Septième place">7</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Huitième place">8</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Neuvième place">9</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Dixième place">10</abbr>
        </p>
        <p className="w-10 py-1 text-center text-white text-lg">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Abandon">DNF</abbr>
        </p>
        <p className="w-14 pr-2 py-1 text-right">
          <abbr title="Meilleur résultat">Top</abbr>
        </p>
        <p className="w-18 pr-4 py-1 text-right">
          <abbr title="Points">Pts</abbr>
        </p>
      </header>
      <ul className="border-t border-b border-gray-700 divide-y divide-gray-700">

        { drivers.map(driver =>

        <li key={ driver.position } className="flex items-center bg-gray-800 hover:bg-gray-700">
          <p className="w-10 pr-2 py-1 text-right text-gray-500">{ driver.position }</p>
          <p className="w-12 pr-2 py-1 text-right">{ driver.Driver.permanentNumber }</p>
          <p className="w-58 px-2 py-1 space-x-2 text-xl">
            <span className="text-gray-500">{ driver.Driver.givenName }</span>
            <strong className="font-semibold">{ driver.Driver.familyName }</strong>
          </p>
          <p className="w-48 px-2 py-1">🏳 { driver.Driver.nationality }</p>
          <p className="w-48 px-2 py-1">🏳 { driver.Constructors[0].name }</p>
          <p className="w-10 py-1 text-center text-gray-500">{ searchResults() }</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-14 pr-2 py-1 text-center text-gray-500">-</p>
          <p className="w-18 pr-4 py-1 text-right text-lg font-semibold">{ driver.points }</p>
        </li>

        )}

      </ul>
    </Layout>
  )
}

export async function getStaticProps() {

  const fetchDrivers = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
  // const fetchRacesResults = await fetch('https://ergast.com/api/f1/current/results.json?limit=1000')
  
  const dataDrivers = await fetchDrivers.json()
  // const dataRacesResults = await fetchRacesResults.json()

  const drivers = await dataDrivers.MRData.StandingsTable.StandingsLists[0].DriverStandings
  // const racesResults = await dataRacesResults.MRData.RaceTable.Races

  return {
    props: {
      drivers,
      // racesResults
    }
  } 
}