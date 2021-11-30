import Layout from '../components/layouts'
import flags from '../flags'

export default function Races({ races, results }) {

  const setStatus = date => new Date() < new Date(date) ? ['à venir', 'tag comming'] : ['terminé', 'tag complete']
  const getResult = round => results.find(result => result.round === round)
  const setHours = hours => hours.substring(0, 5)

  const setDate = date => {
    const event = new Date(date)
    const options = { day: 'numeric', month: 'long' }
    return event.toLocaleDateString('fr-FR', options)
  }

  const getFasterLap = index => {
    const filter = results[index].Results.filter(result => result.FastestLap)
    return filter.find(result => result.FastestLap.rank === '1') ?? false
  }

  return (
    <Layout>
      <h1 className="hidden">Calendrier des Courses de Formule 1 { new Date().getFullYear() } | @hugolgc</h1>
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
      <div className="md:border-t md:border-b border-gray-700 md:divide-y divide-gray-700">

        { races.map((race, index) =>

        <section key={ race.round } className="flex items-center bg-gray-800 md:hover:bg-gray-700">
          <p className="w-9 md:w-10 pr-2 py-1 text-right text-gray-500">{ race.round }</p>
          <div className="w-22 md:w-26 px-2 py-1">
            <p className={ setStatus(`${ race.date }T${ race.time }`)[1] }>{ setStatus(`${ race.date }T${ race.time }`)[0] }</p>
          </div>
          <h5 className="w-28 md:w-32 pl-2 py-1">{ setDate(race.date) }</h5>
          <p className="w-12 md:w-14 py-1 text-center">{ race.time.substring(0, 5) }</p>
          <p className="w-20 md:w-22 py-1 text-center">{ setHours(race.time) }</p>
          <h2 className="w-80 md:w-96 px-2 py-1 text-base md:text-lg font-semibold">{ race.Circuit.circuitName }</h2>
          <h4 className="w-18 md:w-20 pl-2 py-1 uppercase">
            <abbr title={ race.Circuit.Location.country }>{ flags[race.Circuit.Location.country.toLowerCase()] } { race.Circuit.Location.country.substring(0, 3) }</abbr>
          </h4>
          <h3 className="w-24 md:w-28 py-1">{ race.Circuit.Location.locality }</h3>
          <h6 className={ `w-18 md:w-20 py-1 text-center ${ getResult(race.round) ? 'text-white font-semibold uppercase' : 'text-gray-500' }`}>
            { getResult(race.round) ? <abbr title={ `${ results[index].Results[0].Driver.givenName } ${ results[index].Results[0].Driver.familyName }` }>{ flags[results[index].Results[0].Driver.nationality.toLowerCase()] } { results[index].Results[0].Driver.code }</abbr> : '-' }
          </h6>
          <p className={ `w-18 md:w-20 py-1 text-center ${ getResult(race.round) ? 'text-white font-semibold uppercase' : 'text-gray-500' }`}>
            { getResult(race.round) ? <abbr title={ `${ results[index].Results[1].Driver.givenName } ${ results[index].Results[1].Driver.familyName }` }>{ flags[results[index].Results[1].Driver.nationality.toLowerCase()] } { results[index].Results[1].Driver.code }</abbr> : '-' }
          </p>
          <p className={ `w-18 md:w-20 py-1 text-center ${ getResult(race.round) ? 'text-white font-semibold uppercase' : 'text-gray-500' }`}>
            { getResult(race.round) ? <abbr title={ `${ results[index].Results[2].Driver.givenName } ${ results[index].Results[2].Driver.familyName }` }>{ flags[results[index].Results[2].Driver.nationality.toLowerCase()] } { results[index].Results[2].Driver.code }</abbr> : '-' }
          </p>
          <p className={ `w-18 md:w-20 py-1 text-center ${ getResult(race.round) ? 'text-white font-semibold uppercase' : 'text-gray-500' }`}>
            { !getResult(race.round) ? '-' : getFasterLap(index) ? <abbr title={ `${ getFasterLap(index).Driver.givenName } ${ getFasterLap(index).Driver.familyName }` }>{ flags[getFasterLap(index).Driver.nationality.toLowerCase()] } { getFasterLap(index).Driver.code }</abbr> : <abbr title={ `${ results[index].Results[0].Driver.givenName } ${ results[index].Results[0].Driver.familyName }` }>{ flags[results[index].Results[0].Driver.nationality.toLowerCase()] } { results[index].Results[0].Driver.code }</abbr> }
          </p>
        </section>

        )}

      </div>

    </Layout>
  )
}

export async function getStaticProps() {

  const fetchRaces = await fetch('https://ergast.com/api/f1/current.json?limit=1000')
  const fetchResults = await fetch('https://ergast.com/api/f1/current/results.json?limit=1000')

  const dataRaces = await fetchRaces.json()
  const dataResults = await fetchResults.json()

  const races = await dataRaces.MRData.RaceTable.Races
  const results = await dataResults.MRData.RaceTable.Races

  // const fasters = []
  // await races.map(race => { fasters[race.round] = race.Results.find(result => result.FastestLap.rank === '1').Driver })

  return {
    props: {
      races,
      results
    }
  } 
}