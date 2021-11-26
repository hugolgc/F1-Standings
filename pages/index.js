import axios from 'axios'
import { useEffect, useState } from 'react'
import Layout from '../components/layouts'

export default function Drivers() {

  // const [standings, setStandings] = useState(
  //   typeof window !== 'undefined'
  //   ? JSON.parse(localStorage.getItem('drivers'))
  //   : []
  // )

  // const [racesResults, setracesResults] = useState(
  //   typeof window !== 'undefined'
  //   ? JSON.parse(localStorage.getItem('races_results'))
  //   : []
  // )

  // const fetchStandings = () => axios.get('https://ergast.com/api/f1/current/driverStandings.json').then(({ data }) => {
  //   const standings = data.MRData.StandingsTable.StandingsLists[0].DriverStandings
  //   if (typeof window !== 'undefined') localStorage.setItem('drivers', JSON.stringify(standings))
  //   setStandings(standings)
  //   console.log('standings', standings)
  // })

  // const fetchRacesResults = () => axios.get('https://ergast.com/api/f1/current/results.json?limit=1000').then(({ data }) => {
  //   const racesResults = data.MRData.RaceTable.Races
  //   if (typeof window !== 'undefined') localStorage.setItem('races_results', JSON.stringify(racesResults))
  //   setracesResults(racesResults)
  //   console.log('racesResults', racesResults)
  // })

  // useEffect(() => {
  //   fetchStandings()
  //   fetchRacesResults()
  // }, [])

  const searchResults = () => '-'

  return (
    <Layout>
      <header className="flex items-center text-gray-500">
        <p className="w-10 pr-2 py-1 text-right">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-12 pr-2 py-1 text-right">
          <abbr title="Numéro">#</abbr>
        </p>
        <p className="w-60 px-2 py-1">Pilote</p>
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
        <p className="w-10 py-1 text-center text-white text-xl">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Abandon">DNF</abbr>
        </p>
        <p className="w-14 pr-2 py-1 text-right">Best</p>
        <p className="w-16 pr-4 py-1 text-right">
          <abbr title="Points">Pts</abbr>
        </p>
      </header>
      <ul className="border-t border-b border-gray-700 divide-y divide-gray-700">

        <li className="flex items-center bg-gray-800 hover:bg-gray-700">
          <p className="w-10 pr-2 py-1 text-right text-gray-500">1</p>
          <p className="w-12 pr-2 py-1 text-right">44</p>
          <p className="w-60 px-2 py-1 space-x-2 text-xl">
            <span className="text-gray-500">Lewis</span>
            <strong className="font-semibold">Hamilton</strong>
          </p>
          <p className="w-48 px-2 py-1">🇬🇧 British</p>
          <p className="w-48 px-2 py-1">🇩🇪 Mercedes</p>

          {/* <p className="w-10 py-1 text-center font-semibold">1</p> */}
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

          {/* <p className="w-14 pr-2 py-1 text-right">1er</p> */}
          <p className="w-14 pr-2 py-1 text-center text-gray-500">-</p>

          <p className="w-16 pr-4 py-1 text-right text-lg font-semibold">100</p>
        </li>

      </ul>
    </Layout>
  )
}