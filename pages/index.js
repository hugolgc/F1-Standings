import Layout from '../components/layouts'
import flags from '../flags'

export default function Drivers({ drivers, results }) {

  const driversResults = []
  const fastersLap = []

  results.forEach(result => {
    const fastest = result.Results.filter(result => result.FastestLap).find(result => result.FastestLap.rank === '1')
    if (fastest) {
      if (!fastersLap[fastest.Driver.driverId]) {
        fastersLap[fastest.Driver.driverId] = 1
      } else {
        fastersLap[fastest.Driver.driverId]++
      }
    }
    result.Results.forEach(driver => {
      if (!driversResults[driver.Driver.driverId]) {
        driversResults[driver.Driver.driverId] = []
      } else if (!driversResults[driver.Driver.driverId][driver.positionText]) {
        driversResults[driver.Driver.driverId][driver.positionText] = 1
      } else {
        driversResults[driver.Driver.driverId][driver.positionText]++
      }
    })
  })

  const getBest = driverId => {
    const best = Object.keys(driversResults[driverId])[0]
    return best == 1 ? '1er' : `${ best }e`
  }

  return (
    <Layout>
      <h1 className="hidden">Classement des Pilotes de Formule 1 { new Date().getFullYear() } | @hugolgc</h1>
      <header className="flex items-center text-gray-500">
        <p className="w-9 md:w-10 pr-2 py-1 text-right text-red">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-10 md:w-12 pr-2 py-1 text-right">
          <abbr title="Numéro">#</abbr>
        </p>
        <p className="w-21 md:w-58 px-2 py-1">Pilote</p>
        <p className="hidden md:inline w-48 px-2 py-1">Pays</p>
        <p className="w-42 md:w-48 px-2 py-1">Équipe</p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Quatrième place">4</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Cinquième place">5</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Sixième place">6</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Septième place">7</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Huitième place">8</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Neuvième place">9</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Dixième place">10</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-lg">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Abandon">DNF</abbr>
        </p>
        <p className="w-14 pr-2 py-1 text-right">
          <abbr title="Meilleur résultat">Top</abbr>
        </p>
        <p className="w-16 md:w-18 pr-3 md:pr-4 py-1 text-right">
          <abbr title="Points">Pts</abbr>
        </p>
      </header>
      <div className="md:border-t md:border-b border-gray-700 md:divide-y divide-gray-700">

        { drivers.map(driver =>

        <section key={ driver.position } className="flex bg-gray-800 md:hover:bg-gray-700">
          <p className="w-9 md:w-10 pr-2 py-1 text-right text-gray-500">{ driver.position }</p>
          <p className="w-10 md:w-12 pr-2 py-1 text-right">
            <span className="md:hidden">#</span> { driver.Driver.permanentNumber }
          </p>
          <h2 className="sticky left-0 md:static w-21 md:w-58 px-2 py-1 md:space-x-2 bg-gray-700 md:bg-transparent text-base md:text-xl">
            <span className="hidden md:inline text-gray-500">{ driver.Driver.givenName }</span>
            <strong className="hidden md:inline font-semibold">{ driver.Driver.familyName }</strong>
            <abbr title={ `${ driver.Driver.givenName } ${ driver.Driver.familyName }` } className="md:hidden m-0 font-semibold uppercase">{ flags[driver.Driver.nationality.toLowerCase()] } { driver.Driver.code }</abbr>
          </h2>
          <h3 className="hidden md:inline w-48 px-2 py-1">{ flags[driver.Driver.nationality.toLowerCase()] } { driver.Driver.nationality }</h3>
          <h4 className="w-42 md:w-48 px-2 py-1">{ flags[driver.Constructors[0].nationality.toLowerCase()] } { driver.Constructors[0].name }</h4>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][1] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][1] ? driversResults[driver.Driver.driverId][1] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][2] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][2] ? driversResults[driver.Driver.driverId][2] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][3] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][3] ? driversResults[driver.Driver.driverId][3] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][4] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][4] ? driversResults[driver.Driver.driverId][4] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][5] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][5] ? driversResults[driver.Driver.driverId][5] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][6] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][6] ? driversResults[driver.Driver.driverId][6] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][7] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][7] ? driversResults[driver.Driver.driverId][7] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][8] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][8] ? driversResults[driver.Driver.driverId][8] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][9] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][9] ? driversResults[driver.Driver.driverId][9] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId][10] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId][10] ? driversResults[driver.Driver.driverId][10] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !fastersLap[driver.Driver.driverId] ? 'text-gray-500' : 'font-semibold' }`}>{ fastersLap[driver.Driver.driverId] ? fastersLap[driver.Driver.driverId] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 text-center ${ !driversResults[driver.Driver.driverId]['R'] ? 'text-gray-500' : 'font-semibold' }`}>{ driversResults[driver.Driver.driverId]['R'] ? driversResults[driver.Driver.driverId]['R'] : '-' }</p>
          <h6 className="w-14 pr-2 py-1 text-center text-right">{ getBest(driver.Driver.driverId) }</h6>
          <h5 className="w-16 md:w-18 sticky right-0 md:static pr-3 md:pr-4 py-1 bg-gray-700 md:bg-transparent text-right text-base md:text-lg font-semibold">{ driver.points }</h5>
        </section>

        )}

      </div>
    </Layout>
  )
}

export async function getStaticProps() {

  const fetchDrivers = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
  const fetchResults = await fetch('https://ergast.com/api/f1/current/results.json?limit=1000')
  
  const dataDrivers = await fetchDrivers.json()
  const dataResults = await fetchResults.json()

  const drivers = await dataDrivers.MRData.StandingsTable.StandingsLists[0].DriverStandings
  const results = await dataResults.MRData.RaceTable.Races

  return {
    props: {
      drivers,
      results
    }
  } 
}