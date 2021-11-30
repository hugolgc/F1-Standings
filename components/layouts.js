import Head from 'next/head'
import Header from './header'
import Nav from './nav'
import { useRouter } from 'next/router'

export default function Layout({ children }) {

  const date = new Date().getFullYear()
  const router = useRouter()

  const setClass = () => {
    if (router.asPath === '/teams') return 'min-w-teams'
    if (router.asPath === '/races') return 'min-w-races'
    else return 'min-w-drivers'
  }

  return (
    <div className="mx-auto py-6 md:px-6 bg-gray-900 text-sm md:text-base overflow-hidden">
      <Head>
        <title>{ `F1 Standings - Résultats Pilotes, Équipes et Courses de Formule 1 ${ date }` }</title>
        <meta name="description" content= { `F1 Standings est votre plateforme gratuite et adaptée aux mobiles pour les classements des pilotes et des équipes de F1 ${ date } avec le calendrier des courses.` } />
        <link rel="icon" href="/favicon.ico" />
        <script data-ad-client="ca-pub-4016856427147137" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <Header />
      <Nav />
      <main className="overflow-x-scroll xl:overflow-hidden">
        <section className={ `${ setClass() } md:min-w-table` }>{ children }</section>
      </main>
    </div>
  )
}