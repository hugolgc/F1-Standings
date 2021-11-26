import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {

  const router = useRouter()
  const URL = 'https://github.com/hugolgc'

  return (
    <nav className="py-12 flex justify-between items-center">
      <ul className="flex space-x-6 text-2xl font-semibold">
        <li>
          <Link href="/">
            <a className={ router.asPath === '/' ? 'active' : 'inactive' }>🏎 Pilotes</a>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <a className={ router.asPath === '/teams' ? 'active' : 'inactive' }>🚚 Équipes</a>
          </Link>
        </li>
        <li>
          <Link href="/races">
            <a className={ router.asPath === '/races' ? 'active' : 'inactive' }>🏁 Courses</a>
          </Link>
        </li>
      </ul>
      <div className="space-y-4">
        <p className="text-center text-gray-500">Partager cette page</p>
        <ul className="flex justify-center space-x-4">
          <li>
            <a href={ `https://www.facebook.com/sharer.php?u=${ URL }` } target="_blank" rel="noreferrer">
              <img src="/facebook.png" alt="Facebook" className="h-5 w-5" />
            </a>
          </li>
          <li>
            <a href={ `https://twitter.com/intent/tweet?text=Consultez%20le%20classement%20des%20pilotes%20de%20F1%C2%A0!&url=${ URL }&via=hugolgc` } target="_blank" rel="noreferrer">
              <img src="/twitter.png" alt="Twitter" className="h-5 w-6" />
            </a>
          </li>
          <li>
            <a href={ `whatsapp://send?text=${ URL }` } target="_blank" rel="noreferrer">
              <img src="/whatsapp.png" alt="Whatsapp" className="h-5 w-5" />
            </a>
          </li>
        </ul>
      </div>
      <a href="http://github.com/hugolgc/" target="_blank" rel="noreferrer" className="flex flex-col items-center space-y-2">
        <span className="text-gray-500">Créé par</span>
        <strong className="text-lg text-red hover:text-white font-semibold">@hugolgc</strong>
      </a>
    </nav> 
  )
}