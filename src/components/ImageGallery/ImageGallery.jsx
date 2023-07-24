import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import StyledImageGallery from './StyledImageGallery';
import PropTypes from 'prop-types';

function ImageGallery({ images, toggleModal }) {
  return (
    <StyledImageGallery>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            urlImage={webformatURL}
            urlLargeImage={largeImageURL}
            tags={tags}
            toggleModal={toggleModal}
          />
        );
      })}
    </StyledImageGallery>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  toggleModal: PropTypes.func.isRequired,
};
