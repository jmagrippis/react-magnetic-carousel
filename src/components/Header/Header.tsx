import ReactLogo from './react-logo.svg'

export const Header = () => (
  <header className="container py-4 px-2 sm:px-0 flex items-center justify-between">
    <ReactLogo className="w-8 text-primary-400" />
    <div className="text-xl text-secondary-600">
      <strong>LIVE</strong> Coding & Chill
    </div>
  </header>
)
