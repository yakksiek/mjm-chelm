import * as React from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";

import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/captions.css";

import { photos } from "../data";
// import slides from "../data/slides";

const PhotoGallery = () => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <PhotoAlbum
        layout="rows"
        photos={photos}
        targetRowHeight={150}
        onClick={({ index }) => setIndex(index)}
      />

      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={photos}
        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom, Captions]}
      />
    </>
  );
};

export default PhotoGallery;
