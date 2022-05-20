import {getItemId, MagneticCarousel} from 'components/MagneticCarousel'
import {ReviewCard} from 'components/ReviewCard'
import {UpcomingCard} from 'components/UpcomingCard'

const images = [
  {title: 'London', src: '/images/london.jpg'},
  {title: 'Paros', src: '/images/paros.jpg'},
  {title: 'Tinos', src: '/images/tinos.jpg'},
  {title: 'Buenos Aires', src: '/images/buenos-aires.jpg'},
  {title: 'Tower Bridge', src: '/images/bridge.jpg'},
  {title: 'Lisbon', src: '/images/lisbon.jpg'},
  {title: 'Christmas!', src: '/images/christmas.jpg'},
]

const imageItems = [
  {
    props: {title: 'Barcelona', src: '/images/barcelona.jpg'},
    Component: UpcomingCard,
  },
  ...images.map((props) => ({props, Component: ReviewCard})),
]

const CAROUSEL_NAME = 'travel carousel'

export const Home = () => (
  <main className="grow container px-2 sm:px-0">
    <h1 className="text-4xl mb-4">Magnetic Carousel</h1>
    <MagneticCarousel imageItems={imageItems} name={CAROUSEL_NAME} />

    <nav className="flex flex-col items-center">
      {imageItems.map(({props: {title}}, index) => (
        <a
          key={title}
          href={`#${getItemId(CAROUSEL_NAME, index)}`}
          className="text-xl"
        >
          {title}
        </a>
      ))}
    </nav>
  </main>
)
