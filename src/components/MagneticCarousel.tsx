import {ComponentType} from 'react'

export type ItemComponentProps = {title: string; src: string}

type ImageItem = {
  props: {
    src: string
    title: string
  }
  Component: ComponentType<ItemComponentProps>
}

type Props = {
  imageItems: ImageItem[]
  name: string
}

export const getItemId = (carouselName: string, index: number) =>
  `${carouselName}-item-${index}`

export const MagneticCarousel = ({imageItems, name}: Props) => (
  <>
    <ul className="flex overflow-x-auto gap-6 snap-x snap-mandatory before:shrink-0 before:w-4/5 after:shrink-0 after:w-4/5 mb-2 motion-safe:scroll-smooth scroll-">
      {imageItems.map(({props: {title, src}, Component}, index) => (
        <li
          id={getItemId(name, index)}
          key={title}
          className="shrink-0 snap-center"
        >
          <Component title={title} src={src} />
        </li>
      ))}
    </ul>
  </>
)
