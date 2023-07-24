import styled from 'styled-components';

const StyledSearchBar = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 11;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 56px;
  width: 100%;
  padding: 12px 24px;
  background-color: #3f89b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);

  & .form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
  }

  & .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
    border: 0;
    opacity: 0.6;
    transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    outline: none;
  }

  & .button:hover {
    opacity: 1;
  }

  & .button-label {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
  }

  & .icon {
    width: 25px;
    height: 25px;
  }

  & .input {
    display: inline-block;
    width: 100%;
    font: inherit;
    font-size: 20px;
    border: none;
    outline: none;
    padding-left: 4px;
    padding-right: 4px;
  }

  & .input::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export default StyledSearchBar;
