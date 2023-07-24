import styled from 'styled-components';

const StyledModal = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);

  & .blur-up {
    filter: blur(5px);
    transition: filter 400ms;
  }

  & .blur-up.lazyloaded {
    filter: blur(0);
  }
`;

export default StyledModal;
