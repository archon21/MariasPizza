import React from 'react';

const Loader = props => {
  //   const { loadingCircle } = props;
  return (
    <div className="flex column justify-center align-center w-100 h-100">
      <img
        className="loader__pizza"
        src="https://firebasestorage.googleapis.com/v0/b/mariaspizza.appspot.com/o/download.png?alt=media&token=9eff4794-aea7-44cd-a236-b440313e55a4"
      />
    </div>
  );
};

export default Loader;
