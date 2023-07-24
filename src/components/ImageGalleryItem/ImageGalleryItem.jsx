import StyledImageGalleryItem from './StyledImageGalleryItem';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import PropTypes from 'prop-types';

function ImageGalleryItem({ tags, urlImage, urlLargeImage, toggleModal }) {
  return (
    <>
      <StyledImageGalleryItem>
        <img
          data-src={urlImage}
          alt={tags}
          className="lazyload blur-up"
          onClick={() => toggleModal({ urlLargeImage, tags })}
        />
      </StyledImageGalleryItem>
    </>
  );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  urlImage: PropTypes.string.isRequired,
  urlLargeImage: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
};
