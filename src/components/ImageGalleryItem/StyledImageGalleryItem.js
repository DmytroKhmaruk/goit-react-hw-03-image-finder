import styled from 'styled-components';

const StyledImageGalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: contents;

  & img {
    display: block;
    width: 100%;
    height: 260px;
    object-fit: cover;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  & .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  & .blur-up.lazyloaded {
    filter: blur(0);
  }

  &:hover img {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export default StyledImageGalleryItem;
