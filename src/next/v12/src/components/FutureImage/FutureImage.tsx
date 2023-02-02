import Image, { StaticImageData } from 'next/future/image'

import {
  FixedImage as LagacyFixedImage,
  IntrinsicImage as LegacyIntrinsicImage,
  ResponsiveImage as LegacyResponsiveImage,
  FillImage as LegacyFillImage,
} from './LegacyImage'

import imageMountain from '../../public/mountain1920.jpg'

export const FutureImage = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 50%)',
      }}
    >
      <div style={{ fontSize: 'xx-large' }}>Fracture</div>
      <div style={{ fontSize: 'xx-large' }}>Legacy</div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>Fixed</div>
      <div>
        <FixedImage />
      </div>
      <div>
        <LagacyFixedImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>
        Fixed / optimized
      </div>
      <div>
        <FixedImage unoptimized={false} />
      </div>
      <div>
        <LagacyFixedImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>Intrinsic</div>
      <div>
        <IntrinsicImage />
      </div>
      <div>
        <LegacyIntrinsicImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>
        Intrinsic / optimized
      </div>
      <div>
        <IntrinsicImage unoptimized={false} />
      </div>
      <div>
        <LegacyIntrinsicImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>Responsive</div>
      <div>
        <ResponsiveImage />
      </div>
      <div>
        <LegacyResponsiveImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>
        Responsive / optimized
      </div>
      <div>
        <ResponsiveImage unoptimized={false} />
      </div>
      <div>
        <LegacyResponsiveImage />
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>Fill</div>
      <div>
        <div
          style={{
            position: 'relative',
            width: '50%',
            aspectRatio: '16/9',
          }}
        >
          <FillImage unoptimized={false} sizes="25vw" />
        </div>
      </div>
      <div>
        <div
          style={{
            position: 'relative',
            width: '50%',
            aspectRatio: '16/9',
          }}
        >
          <LegacyFillImage />
        </div>
      </div>
      <div style={{ gridColumn: '1/3', fontSize: 'large' }}>
        Fill / optimized
      </div>
      <div>
        <div
          style={{
            position: 'relative',
            width: '50%',
            aspectRatio: '16/9',
          }}
        >
          <FillImage /> {/* has warning for no unoptimized.  */}
        </div>
      </div>
      <div>
        <div
          style={{
            position: 'relative',
            width: '50%',
            aspectRatio: '16/9',
          }}
        >
          <LegacyFillImage />
        </div>
      </div>
    </div>
  )
}

interface ImageProps {
  unoptimized?: boolean
  sizes?: string
  src?: StaticImageData
}

const FixedImage = ({
  unoptimized = true,
  src = imageMountain,
}: ImageProps) => (
  <Image
    unoptimized={unoptimized}
    src={src}
    alt="mountain"
    width={384}
    height={256}
  />
)

const IntrinsicImage = ({
  unoptimized = true,
  src = imageMountain,
}: ImageProps) => (
  <Image
    priority
    unoptimized={unoptimized}
    src={src}
    alt="mountain"
    width={384}
    height={256}
    style={{
      maxWidth: '100%',
      height: 'auto',
    }}
  />
)

const ResponsiveImage = ({
  unoptimized = true,
  src = imageMountain,
}: ImageProps) => (
  <Image
    priority
    unoptimized={unoptimized}
    src={src}
    alt="mountain"
    width={384}
    height={256}
    sizes="25vw"
    style={{
      width: '100%',
      height: 'auto',
    }}
  />
)

const FillImage = ({
  unoptimized = true,
  sizes = undefined,
  src = imageMountain,
}: ImageProps) => (
  <Image
    fill
    priority
    unoptimized={unoptimized}
    src={src}
    sizes={sizes}
    alt="mountain"
  />
)
