import Image from 'next/image'
import {ItemComponentProps} from './MagneticCarousel'

type Props = ItemComponentProps

export const ReviewCard = ({src, title}: Props) => (
  <div className="relative">
    <Image
      src={src}
      title={title}
      width={300}
      alt={title}
      height={400}
      className="shadow-lg rounded"
    />
    <button className="absolute bottom-4 left-2 p-4 bg-primary-300 rounded shadow">
      🧑‍💻 from... <strong>{title}</strong>
    </button>
  </div>
)
