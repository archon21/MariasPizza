import React from 'react';

const Blurb = props => {
  const { footer } = props;
  return (
    <div className="footer__item flex column align-center py-15px">
      <div className="flex column align-center px-15px w-100">
        <span className="body-1 color-secondary w-100">
          We offer dine-in, carry outs as well as pizza parties and catering
          services. Get your piping hot pizza fresh from the oven! Give us a
          call at 860-267-8722 to place your order or enjoy at home. Or come
          visit us at the address below:
        </span>
        <br />
        <span className="body-1 text-center color-secondary">
          744 Middletown Rd, Colchester, CT 06415
        </span>
      </div>

    </div>
  );
};

export default Blurb;
