import Link from 'next/link'
import Navbar from './Navbar'

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <Navbar />
      {/* <header className="header">
        <Link className="header__title bg-yellow-400 text-3xl" href="/">
          International Student Union
        </Link>
      </header> */}
      <main>{children}</main>
      <footer className="footer">
        <p className="footer__text">
        All Rights Reserved. Copyright 2023. 
        </p>
      </footer>
    </div>
  )
}
