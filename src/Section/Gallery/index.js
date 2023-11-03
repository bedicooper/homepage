import { GalleryContainer, GalleryItem, GalleryImage } from "./styled";

const Gallery = () => (
  <GalleryContainer>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/JOT.jpg"
        alt="apartment block on Joteyki street" />
    </GalleryItem>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/RAT.jpg"
        alt="hotel on Ratibora street" />
    </GalleryItem>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/KOM.jpg"
        alt="offices on Komandorska street" />
    </GalleryItem>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/PIL.jpg"
        alt="hotel on Pilsudskiego street" />
    </GalleryItem>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/GRU.jpg"
        alt="offices on Grunwaldzka street" />
    </GalleryItem>
    <GalleryItem>
      <GalleryImage
        src="https://raw.githubusercontent.com/bedicooper/homepage/main/src/img/POB.jpg"
        alt="apartment block on Poborzanska street" />
    </GalleryItem>
  </GalleryContainer>
);

export default Gallery;