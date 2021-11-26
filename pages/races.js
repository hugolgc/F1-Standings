import Layout from '../components/layouts'

export default function Races() {
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
        <p className="w-20 py-1 text-center text-white text-xl">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
      </header>
      <ul className="border-t border-b border-gray-700 divide-y divide-gray-700">


        <li className="flex items-center bg-gray-800">
          <p className="w-10 pr-2 py-1 text-right text-gray-500">1</p>
          <div className="w-26 px-2 py-1">
            <p className="tag complete">completed</p>
          </div>
          <p className="w-32 pl-2 py-1">5 Juillet</p>
          <p className="w-14 py-1 text-center">15:10</p>
          <p className="w-22 py-1 text-center">14:10</p>
          <p className="w-96 px-2 py-1 font-semibold">Autodromo Internazionale del Mugello</p>
          <p className="w-20 pl-2 py-1">🇮🇹 ITA</p>
          <p className="w-28 py-1">Mugello</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🇫🇮 BOT</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🇲🇨 LEC</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🇬🇧 NOR</p>
          <p className="w-20 py-1 text-center text-white font-semibold">🇬🇧 NOR</p>
        </li>


      </ul>
    </Layout>
  )
}