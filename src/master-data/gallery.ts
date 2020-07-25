import polygonAnt from '../assets/design/gallery/polygon/polygon-ant.webp';
import polygonBeetle from '../assets/design/gallery/polygon/polygon-beetle.webp';
import polygonBear from '../assets/design/gallery/polygon/polygon-bear.webp';
import polygonDog from '../assets/design/gallery/polygon/polygon-dog.webp';
import polygonDeer from '../assets/design/gallery/polygon/polygon-deer.webp';
import polygonDragonfly from '../assets/design/gallery/polygon/polygon-dragonfly.webp';
import polygonElephant from '../assets/design/gallery/polygon/polygon-elephant.webp';
import polygonKoala from '../assets/design/gallery/polygon/polygon-koala.webp';
import polygonRhinoceros from '../assets/design/gallery/polygon/polygon-rhinoceros.webp';
import polygonAlbertEinstein from '../assets/design/gallery/polygon/polygon-albert-einstein.webp';
import polygonIsaacNewton from '../assets/design/gallery/polygon/polygon-isaac-newton.webp';
import polygonThomasAlvaEdison from '../assets/design/gallery/polygon/polygon-thomas-alva-edison.webp';

import lineArtTiger from '../assets/design/gallery/line-art/line-art-tiger.webp';
import lineArtRedPanda from '../assets/design/gallery/line-art/line-art-red-panda.webp';
import lineArtElephant from '../assets/design/gallery/line-art/line-art-elephant.webp';
import lineArtBat from '../assets/design/gallery/line-art/line-art-bat.webp';
import lineArtButterfly from '../assets/design/gallery/line-art/line-art-butterfly.webp';
import lineArtEagle from '../assets/design/gallery/line-art/line-art-eagle.webp';
import lineArtFrog from '../assets/design/gallery/line-art/line-art-frog.webp';
import lineArtCrab from '../assets/design/gallery/line-art/line-art-crab.webp';
import lineArtHorse from '../assets/design/gallery/line-art/line-art-horse.webp';
import lineArtLizzard from '../assets/design/gallery/line-art/line-art-lizzard.webp';
import lineArtAnt from '../assets/design/gallery/line-art/line-art-ant.webp';
import lineArtPlatypus from '../assets/design/gallery/line-art/line-art-platypus.webp';
import lineArtRat from '../assets/design/gallery/line-art/line-art-rat.webp';

import flatDesignBeach from '../assets/design/gallery/flat-design/flat-design-beach.webp';
import flatDesignChair from '../assets/design/gallery/flat-design/flat-design-chair.webp';
import flatDesignChildhoodDrawing from '../assets/design/gallery/flat-design/flat-design-childhood-drawing.webp';
import flatDesignClimb from '../assets/design/gallery/flat-design/flat-design-climb.webp';
import flatDesignDeadForest from '../assets/design/gallery/flat-design/flat-design-dead-forest.webp';
import flatDesignDock from '../assets/design/gallery/flat-design/flat-design-dock.webp';
import flatDesignHeavenGate from '../assets/design/gallery/flat-design/flat-design-heaven-gate.webp';
import flatDesignHouseAndWindmill from '../assets/design/gallery/flat-design/flat-design-house-and-windmill.webp';
import flatDesignPath from '../assets/design/gallery/flat-design/flat-design-path.webp';
import flatDesignShrine from '../assets/design/gallery/flat-design/flat-design-shrine.webp';
import flatDesignStair from '../assets/design/gallery/flat-design/flat-design-stair.webp';
import flatDesignStones from '../assets/design/gallery/flat-design/flat-design-stones.webp';
import flatDesignSunflowerField from '../assets/design/gallery/flat-design/flat-design-sunflower-field.webp';

import photographyGallery0 from '../assets/photography/gallery/photography-gallery-0.webp';
import photographyGallery1 from '../assets/photography/gallery/photography-gallery-1.webp';
import photographyGallery2 from '../assets/photography/gallery/photography-gallery-2.webp';
import photographyGallery3 from '../assets/photography/gallery/photography-gallery-3.webp';
import photographyGallery4 from '../assets/photography/gallery/photography-gallery-4.webp';
import photographyGallery5 from '../assets/photography/gallery/photography-gallery-5.webp';
import photographyGallery6 from '../assets/photography/gallery/photography-gallery-6.webp';
import photographyGallery7 from '../assets/photography/gallery/photography-gallery-7.webp';
import photographyGallery8 from '../assets/photography/gallery/photography-gallery-8.webp';
import photographyGallery9 from '../assets/photography/gallery/photography-gallery-9.webp';

import { Gallery } from "../interfaces";

export const designGallery: Gallery[] = [
  {
    idx: 0,
    name: 'Line Art',
    src: [
      lineArtTiger, lineArtRedPanda, lineArtElephant, lineArtBat, lineArtButterfly, lineArtEagle, lineArtFrog,
      lineArtCrab, lineArtHorse, lineArtLizzard, lineArtAnt, lineArtPlatypus, lineArtRat
    ],
  },
  {
    idx: 1,
    name: 'Flat Design',
    src: [
      flatDesignBeach, flatDesignChair, flatDesignChildhoodDrawing, flatDesignClimb, flatDesignDeadForest, flatDesignDock,
      flatDesignHeavenGate, flatDesignHouseAndWindmill, flatDesignPath, flatDesignShrine, flatDesignStair, flatDesignStones,
      flatDesignSunflowerField
    ],
  },
  {
    idx: 2,
    name: 'Polygon',
    src: [
      polygonAnt, polygonBeetle, polygonBear, polygonDog, polygonDeer, polygonDragonfly, polygonElephant,
      polygonKoala, polygonRhinoceros, polygonAlbertEinstein, polygonIsaacNewton, polygonThomasAlvaEdison
    ],
  }
];

export const photographyGallery: Gallery[] = [
  {
    idx: 0,
    name: '',
    src: [
      photographyGallery0, photographyGallery1, photographyGallery2, photographyGallery3, photographyGallery4,
      photographyGallery5, photographyGallery6, photographyGallery7, photographyGallery8, photographyGallery9
    ],
  }
];
