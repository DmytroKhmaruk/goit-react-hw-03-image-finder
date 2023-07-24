import { MutatingDots } from 'react-loader-spinner';

function Loader() {
  return (
    <>
      <MutatingDots
        height="100"
        width="100"
        color="#4334ca"
        secondaryColor="#676776"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100vh',
        }}
        wrapperClass=""
        visible={true}
      />
    </>
  );
}

export default Loader;
