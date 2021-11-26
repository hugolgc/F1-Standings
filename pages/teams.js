import Layout from '../components/layouts'

export default function Teams() {
  return (
    <Layout>
      <header className="flex">
        <p className="w-10 pr-2 py-1 text-right">
          <abbr title="Position">Pos</abbr>
        </p>
        <p className="w-12 pr-2 py-1 text-right">
          <abbr title="Numéro">#</abbr>
        </p>
        <p className="w-60 px-2 py-1">Pilote</p>
        <p className="w-48 px-2 py-1">Pays</p>
        <p className="w-48 px-2 py-1">Équipe</p>
        <p className="w-10 py-1 text-center">
          <abbr title="Première place">🥇</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Deuxième place">🥈</abbr>
        </p>
        <p className="w-10 py-1 text-center">
          <abbr title="Troisième place">🥉</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Quatrième place">4</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Cinquième place">5</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Sixième place">6</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Septième place">7</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Huitième place">8</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Neuvième place">9</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Dixième place">10</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Meilleur tour">⏱</abbr>
        </p>
        <p className="w-10 py-1 text-center text-gray-500">
          <abbr title="Abandon">DNF</abbr>
        </p>
        <p className="w-14 pr-2 py-1 text-right text-gray-500">Best</p>
        <p className="w-16 pr-4 py-1 text-right text-gray-500">
          <abbr title="Points">Pts</abbr>
        </p>
      </header>
      <ul className="border-t border-b border-gray-700 divide-y divide-gray-700">
        <li className="flex items-center bg-gray-800">
          <p className="w-10 pr-2 py-1 text-right text-gray-500">1</p>
          <p className="w-12 pr-2 py-1 text-right">44</p>
          <p className="w-60 px-2 py-1 space-x-2 text-xl">
            <span className="text-gray-500">Lewis</span>
            <strong className="font-semibold">Hamilton</strong>
          </p>
          <p className="w-48 px-2 py-1">🇬🇧 Royaume-Unis</p>
          <p className="w-48 px-2 py-1">🇩🇪 Mercedes</p>
          <p className="w-10 py-1 text-center font-semibold">5</p>
          <p className="w-10 py-1 text-center font-semibold">12</p>
          <p className="w-10 py-1 text-center font-semibold">8</p>
          <p className="w-10 py-1 text-center font-semibold">4</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-10 py-1 text-center font-semibold">6</p>
          <p className="w-10 py-1 text-center font-semibold">1</p>
          <p className="w-14 pr-2 py-1 text-right">1er</p>
          <p className="w-16 pr-4 py-1 text-right text-lg font-semibold">276</p>
        </li>
      </ul>
    </Layout>
  )
}