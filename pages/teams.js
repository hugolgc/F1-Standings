import Layout from '../components/layouts'
import flags from '../flags'

export default function Teams({ teams }) {

  return (
    <Layout>
      <header className="flex items-center text-gray-500">
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
      <ul className="md:border-t md:border-b border-gray-700 md:divide-y divide-gray-700">

        { teams.map(team =>

        <li key={ team.position } className="flex items-center bg-gray-800 md:hover:bg-gray-700">
          <p className="w-9 md:w-10 pr-2 py-1 text-right text-gray-500">{ team.position }</p>
          <p className="w-34 md:w-58 sticky left-0 md:static px-2 py-1 bg-gray-700 md:bg-transparent text-base md:text-xl font-semibold leading-teams md:leading-none">{ team.Constructor.name }</p>
          <p className="w-20 md:w-24 px-2 py-1 uppercase">
            <abbr title={ team.Constructor.nationality }>{ flags[team.Constructor.nationality.toLowerCase()] } { team.Constructor.nationality.substring(0, 3) }</abbr>
          </p>
          <p className="w-9 md:w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-9 md:w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-9 md:w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-9 md:w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-9 md:w-10 py-1 text-center text-gray-500">-</p>
          <p className="w-12 md:w-14 pr-2 py-1 text-right">-</p>
          <p className="w-64 md:w-72 px-2 py-1">[Motoriste]</p>
          <p className="w-20 md:w-24 px-2 py-1">
            <abbr title="">🏳 [NAT]</abbr>
          </p>
          <div className="w-56 md:w-58 px-2 py-1">
            <div className="flex justify-between">
              <p className="space-x-1">
                <abbr title="">🏳</abbr>
                <span className="text-gray-500">[Prénom]</span>
                <strong className="font-semibold">[Nom]</strong>
              </p>
              <p>{ team.points / 2 }</p>
            </div>
            <div className="flex justify-between">
              <p className="space-x-1">
                <abbr title="">🏳</abbr>
                <span className="text-gray-500">[Prénom]</span>
                <strong className="font-semibold">[Nom]</strong>
              </p>
              <p>{ team.points / 2 }</p>
            </div>
          </div>
          <p className="w-16 md:w-18 sticky right-0 md:static pr-3 md:pr-4 py-1 bg-gray-700 md:bg-transparent text-right text-base md:text-lg leading-teams md:leading-none font-semibold">{ team.points }</p>
        </li>

        )}

      </ul>
    </Layout>
  )
}

export async function getStaticProps() {

  const fetchTeams = await fetch('https://ergast.com/api/f1/current/constructorStandings.json')
  
  const dataTeams = await fetchTeams.json()

  const teams = await dataTeams.MRData.StandingsTable.StandingsLists[0].ConstructorStandings

  return {
    props: {
      teams
    }
  } 
}