import Image, { StaticImageData } from 'next/image'

import imageMountain from '../../public/mountain1920.jpg'

export const FixedImage = ({ src = imageMountain }) => (
  <Image src={src} alt="mountain" width={384} height={256} layout="fixed" />
)

export const IntrinsicImage = ({ src = imageMountain }) => (
  <Image
    priority
    src={src}
    alt="mountain"
    width={384}
    height={256}
    layout="intrinsic"
  />
)

export const ResponsiveImage = ({
  src = imageMountain,
}: {
  src?: StaticImageData
}) => (
  <Image
    priority
    src={src}
    alt="mountain"
    width={384}
    height={256}
    layout="responsive"
  />
)

export const FillImage = ({
  src = imageMountain,
}: {
  src?: StaticImageData
}) => <Image src={src} alt="mountain" layout="fill" sizes="100vw" priority />
