import { useState } from 'react';
import PhotoAlbum from "react-photo-album";
import { photosDimension } from '../../config/photosDimension';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { render } from 'react-dom';


const PHOTOS_FOLDER = '/assets/photos/'
const breakpoints = [3840, 2400, 1080, 640, 384, 256, 128, 96, 64, 48];

const urlPhotos = name => PHOTOS_FOLDER + `/${name}`;

const photos = photosDimension.map((photo) => {
  const width = breakpoints[0];
  const height = (photo.height / photo.width) * width;
  return {
    src: urlPhotos(photo.name),
    width,
    height,
    images: breakpoints.map((breakpoint) => {
      const height = Math.round((breakpoint / photo.width) * breakpoint);
      return {
        src: urlPhotos(photo.name),
        width: breakpoint,
        height,
      };
    }),
  };
});
const slides = photos.map(({ src, width, height, images }) => ({
  src,
  width,
  height,
  srcSet: images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  })),
}));
const renderPhoto = ({ layout, layoutOptions, imageProps: { alt, style, ...restImageProps } }) => (
  <div
    style={{
      borderRadius: "4px",
      boxSizing: "border-box",
      alignItems: "center",
      width: style?.width,
      padding: "8px",
      boxShadow: "0 10px 25px 0 rgb(0 0 0 / 20%)",
      marginBottom: '8px'
    }}
  >
    <picture style={{
      width: "100%",
      height: layout.height,
      position: 'relative',
      padding: 0,
      overflow: 'hidden'
    }
    }>
      <img
        alt={alt}
        style={
          {
            ...style,
            width: '120%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            maxWidth: 'none'
          }
        }
        {...restImageProps} />
    </picture>
  </div>
);


export default function PhotoAlbumLaMata() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <PhotoAlbum
        photos={photos}
        layout="masonry"
        targetRowHeight={150}
        renderPhoto={renderPhoto}
        onClick={(_, __, index) => setIndex(index)}
      />

      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        // enable optional lightbox plugins
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
      />
    </>
  )
}
