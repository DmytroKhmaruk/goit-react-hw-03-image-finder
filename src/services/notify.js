import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function errorInfo(error) {
  Report.failure(`${error.code}`, `${error.response.data}`, 'OK', {
    width: '400px',
    messageFontSize: '16px',
    titleFontSize: '32px',
    svgSize: '65px',
    backOverlayClickToClose: true,
  });
}

function infoCorrectRequest(totalHits) {
  Notify.info(`We found ${totalHits} images.`, {
    position: 'center-center',
    width: '324px',
    fontSize: '30px',
    timeout: '1000',
    backOverlayColor: (0, 0, 0, 0.7),
    useIcon: false,
    background: 'black',
  });
}

function infoEmptyRequest() {
  Report.info(
    'SORRY',
    '"There are no images matching your search query. <br/><br/>Please try again"',
    'OK',
    {
      width: '450px',
      messageFontSize: '24px',
      titleFontSize: '32px',
      svgSize: '70px',
      backOverlayClickToClose: true,
    }
  );
}

export { errorInfo, infoCorrectRequest, infoEmptyRequest };
