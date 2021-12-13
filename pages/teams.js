import Layout from '../components/layouts'
import flags from '../flags'
import engines from '../engines'

export default function Teams({ teams, results, drivers }) {

  const teamsResults = []
  const fastersLap = []
  const driversTeams =  []

  results.forEach(result => {
    const fastest = result.Results.filter(result => result.FastestLap).find(result => result.FastestLap.rank === '1')
    if (fastest) {
      if (!fastersLap[fastest.Constructor.constructorId]) {
        fastersLap[fastest.Constructor.constructorId] = 1
      } else {
        fastersLap[fastest.Constructor.constructorId]++
      }
    }
    result.Results.forEach(driver => {
      if (!teamsResults[driver.Constructor.constructorId]) {
        teamsResults[driver.Constructor.constructorId] = []
      } else if (!teamsResults[driver.Constructor.constructorId][driver.positionText]) {
        teamsResults[driver.Constructor.constructorId][driver.positionText] = 1
      } else {
        teamsResults[driver.Constructor.constructorId][driver.positionText]++
      }
    })
  })

  drivers.forEach(driver => {
    if (!driversTeams[driver.Constructors[0].constructorId]) {
      driversTeams[driver.Constructors[0].constructorId] = []
    }
    if (!driversTeams[driver.Constructors[0].constructorId].some(member => member === driver)) {
      driversTeams[driver.Constructors[0].constructorId].push(driver)
    }
  })

  const getBest = constructorId => {
    const best = Object.keys(teamsResults[constructorId])[0]
    return best == 1 ? '1er' : `${ best }e`
  }

  return (
    <Layout>
      <h1 className="hidden">Classement des Constructeurs de Formule 1 { new Date().getFullYear() } | @hugolgc</h1>
      <header className="flex text-gray-500">
        <p className="w-9 md:w-10 pr-2 py-1 text-right text-red">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-34 md:w-58 px-2 py-1">Équipe</p>
        <p className="w-20 md:w-24 px-2 py-1">Pays</p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-xl">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center text-white text-base md:text-lg">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
        <p className="w-9 md:w-10 py-1 text-center">
          <abbr title="Abandon">DNF</abbr>
        </p>
        <p className="w-12 md:w-14 pr-2 py-1 text-right">
          <abbr title="Meilleur résultat">Top</abbr>
        </p>
        <p className="w-64 md:w-72 px-2 py-1">Motoriste</p>
        <p className="w-20 md:w-24 px-2 py-1">Pays</p>
        <p className="w-56 md:w-58 px-2 py-1">Pilotes</p>
        <p className="w-16 md:w-18 pr-4 py-1 text-right">
          <abbr title="Points">Pts</abbr>
        </p>
      </header>
      <div className="md:border-t md:border-b border-gray-700 md:divide-y divide-gray-700">

        { teams.map(team =>

        <section key={ team.position } className="flex items-stretch bg-gray-800 md:hover:bg-gray-700">
          <p className="w-9 md:w-10 pr-2 py-1 flex justify-end items-center text-gray-500">{ team.position }</p>
          <h2 className="w-34 md:w-58 sticky left-0 md:static px-2 py-1 flex items-center bg-gray-700 md:bg-transparent text-base md:text-xl font-semibold md:leading-none">{ team.Constructor.name }</h2>
          <h3 className="w-20 md:w-24 px-2 py-1 flex items-center uppercase">
            <abbr title={ team.Constructor.nationality }>{ flags[team.Constructor.nationality.toLowerCase()] } { team.Constructor.nationality.substring(0, 3) }</abbr>
          </h3>
          <p className={ `w-9 md:w-10 py-1 flex items-center justify-center ${ teamsResults[team.Constructor.constructorId][1] ? 'font-semibold' : 'text-gray-500' }` }>{ teamsResults[team.Constructor.constructorId][1] ? teamsResults[team.Constructor.constructorId][1] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 flex items-center justify-center ${ teamsResults[team.Constructor.constructorId][2] ? 'font-semibold' : 'text-gray-500' }` }>{ teamsResults[team.Constructor.constructorId][2] ? teamsResults[team.Constructor.constructorId][2] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 flex items-center justify-center ${ teamsResults[team.Constructor.constructorId][3] ? 'font-semibold' : 'text-gray-500' }` }>{ teamsResults[team.Constructor.constructorId][3] ? teamsResults[team.Constructor.constructorId][3] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 flex items-center justify-center ${ fastersLap[team.Constructor.constructorId] ? 'font-semibold' : 'text-gray-500' }` }>{ fastersLap[team.Constructor.constructorId] ? fastersLap[team.Constructor.constructorId] : '-' }</p>
          <p className={ `w-9 md:w-10 py-1 flex items-center justify-center ${ teamsResults[team.Constructor.constructorId]['R'] ? 'font-semibold' : 'text-gray-500' }` }>{ teamsResults[team.Constructor.constructorId]['R'] ? teamsResults[team.Constructor.constructorId]['R'] : '-' }</p>
          <p className="w-12 md:w-14 pr-2 py-1 flex justify-end items-center">{ getBest(team.Constructor.constructorId) }</p>
          <h4 className="w-64 md:w-72 px-2 py-1 flex items-center">{ engines[team.Constructor.constructorId][0] }</h4>
          <h5 className="w-20 md:w-24 px-2 py-1 flex items-center uppercase">
            <abbr title={ engines[team.Constructor.constructorId][1] }>{ flags[engines[team.Constructor.constructorId][1]] } { engines[team.Constructor.constructorId][1].substring(0, 3) }</abbr>
          </h5>
          <div className="w-56 md:w-58 px-2 py-1">

            { driversTeams[team.Constructor.constructorId].map(driver =>

            <div key={ driver.Driver.driverId } className="flex justify-between">
              <p className="space-x-1">
                <abbr title={ driver.Driver.nationality }>{ flags[driver.Driver.nationality.toLowerCase()] }</abbr>
                <span className="text-gray-500">{ driver.Driver.givenName }</span>
                <strong className="font-semibold">{ driver.Driver.familyName }</strong>
              </p>
              <p>{ driver.points }</p>
            </div>

            )}

          </div>
          <h6 className="w-16 md:w-18 sticky right-0 md:static pr-3 md:pr-4 py-1 flex justify-end items-center bg-gray-700 md:bg-transparent text-base md:text-lg md:leading-none font-semibold">{ team.points }</h6>
        </section>

        )}

      </div>
    </Layout>
  )
}

export async function getServerSideProps() {

  const fetchTeams = await fetch('https://ergast.com/api/f1/current/constructorStandings.json')
  const fetchResults = await fetch('https://ergast.com/api/f1/current/results.json?limit=1000')
  const fetchDrivers = await fetch('https://ergast.com/api/f1/current/driverStandings.json')
  
  const dataTeams = await fetchTeams.json()
  const dataResults = await fetchResults.json()
  const dataDrivers = await fetchDrivers.json()

  const teams = await dataTeams.MRData.StandingsTable.StandingsLists[0].ConstructorStandings
  const results = await dataResults.MRData.RaceTable.Races
  const drivers = await dataDrivers.MRData.StandingsTable.StandingsLists[0].DriverStandings

  return {
    props: {
      teams,
      results,
      drivers
    }
  } 
}
