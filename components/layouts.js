import Head from 'next/head'
import Header from './header'
import Nav from './nav'

export default function Layout({ children }) {

  const date = new Date().getFullYear()

  return (
    <div className="mx-auto py-6 md:px-6 bg-gray-900 text-sm md:text-base overflow-hidden">
      <Head>
        <title>{ `F1 Standings - Résultats Pilotes, Équipes et Courses de Formule 1 ${ date }` }</title>
        <meta name="description" content= { `F1 Standings est votre plateforme gratuite et adaptée aux mobiles pour les classements des pilotes et des équipes de F1 ${ date } avec le calendrier des courses.` } />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Nav />
      <main className="overflow-x-scroll">
        <section className="min-w-table">{ children }</section>
      </main>
    </div>
  )
}