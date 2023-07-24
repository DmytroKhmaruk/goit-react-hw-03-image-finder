import { Component } from 'react';
import Container from './Container/Container';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from '../services/Api';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import {
  errorInfo,
  infoCorrectRequest,
  infoEmptyRequest,
} from 'services/notify';

class App extends Component {
  state = {
    data: [],
    searchImagesName: '',
    numPage: null,
    perPage: 12,
    totalPages: null,
    isLoading: false,
    isShowModal: false,
    dataModalImg: null,
    errorMessage: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchImagesName, numPage, perPage } = this.state;
    if (
      prevState.searchImagesName !== searchImagesName ||
      prevState.numPage !== numPage
    ) {
      try {
        this.setState({ isLoading: true });
        const dataImages = await fetchImages(
          searchImagesName,
          numPage,
          perPage
        );
        const allPages = Math.ceil(dataImages.totalHits / perPage);
        this.setState(prevState => ({
          data:
            numPage === 1
              ? dataImages.hits
              : [...prevState.data, ...dataImages.hits],
          totalPages: allPages,
        }));
        numPage === 1 &&
          dataImages.hits.length &&
          infoCorrectRequest(dataImages.totalHits);
        !dataImages.totalHits && infoEmptyRequest();
      } catch (error) {
        this.setState({ errorMessage: error.response.data });
        errorInfo(error);
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => ({ numPage: prevState.numPage + 1 }));
  };

  handleSubmit = searchValue => {
    this.setState({
      searchImagesName: searchValue,
      numPage: 1,
    });
  };

  toggleModal = dataModal => {
    this.setState({
      isShowModal: !this.state.isShowModal,
      dataModalImg: dataModal || null,
    });
  };

  render() {
    const {
      data,
      numPage,
      totalPages,
      isLoading,
      errorMessage,
      isShowModal,
      dataModalImg,
    } = this.state;

    return (
      <Container>
        <SearchBar handleSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {errorMessage && <>Ooops... {errorMessage}</>}
        {data.length > 0 && (
          <ImageGallery images={data} toggleModal={this.toggleModal} />
        )}
        {data.length > 0 && totalPages !== numPage && (
          <Button handleLoadMore={this.handleLoadMore} />
        )}
        {isShowModal && (
          <Modal
            dataModalImg={dataModalImg}
            toggleModal={this.toggleModal}
          ></Modal>
        )}
      </Container>
    );
  }
}

export default App;
