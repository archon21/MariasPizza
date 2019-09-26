import React from 'react';

const Social = props => {
  const { footer } = props;
  return (
    <div className="flex row align-center p-30px">
      <a href="https://www.instagram.com/mariaspizza744/" target="_">
        <i
          className={`${
            !footer ? 'color-primary' : 'color-secondary'
          } icon fa fa-instagram`}
        />
      </a>
      <a href="https://www.facebook.com/mariaspizzapalace" target="_">
        <i
          className={`${
            !footer ? 'color-primary' : 'color-secondary'
          } icon fa fa-facebook`}
          aria-hidden="true"
        />
      </a>
      {footer && (
        <a
          href="https://www.foodbooking.com/ordering/restaurant/menu?restaurant_uid=ee5f03dc-7efc-47ac-af86-48f90a9bff0a"
          target="_"
        >
          <svg
            className="icon__fud"
            preserveAspectRatio="xMidYMid meet"
            data-bbox="28.001 52.001 143.998 95.998"
            viewBox="28.001 52.001 143.998 95.998"
            height="200"
            width="200"
            xmlns="http://www.w3.org/2000/svg"
            data-type="color"
            role="img"
          >
            <g>
              <path
                d="M162.999 133h-6v-6h6c1.655 0 3-1.351 3-3.01v-20.361c0-2.408-1.011-3.628-3-3.628h-4.764l-11.071-19.923c-.415-.589-1.341-1.078-2.334-1.078H121v-6h23.83a8.996 8.996 0 0 1 7.435 3.927L161.763 94h1.236c5.382 0 9 3.869 9 9.628v20.361c0 4.969-4.037 9.011-9 9.011z"
                fill="#C6A105"
                data-color="1"
              />
              <path
                fill="#C6A105"
                d="M124 133H76v-6h42V58H70v-5.999h54V133z"
                data-color="1"
              />
              <path
                fill="#C6A105"
                d="M52.001 127v6h-15v-6h15z"
                data-color="1"
              />
              <path
                d="M144.973 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974 4.977 0 9.026-4.025 9.026-8.974 0-4.948-4.048-8.974-9.026-8.974z"
                fill="#C6A105"
                data-color="1"
              />
              <path
                d="M64.027 147.999c-8.285 0-15.026-6.718-15.026-14.973s6.741-14.973 15.026-14.973 15.026 6.718 15.026 14.973-6.741 14.973-15.026 14.973zm0-23.947c-4.977 0-9.026 4.025-9.026 8.974 0 4.948 4.049 8.974 9.026 8.974s9.026-4.025 9.026-8.974c0-4.948-4.049-8.974-9.026-8.974z"
                fill="#C6A105"
                data-color="1"
              />
              <path fill="#C6A105" d="M133 127v6h-12v-6h12z" data-color="1" />
              <path
                fill="#C6A105"
                d="M150.999 103H127v-6h17.399l-4.896-7.339 4.993-3.331 6.503 9.752V103z"
                data-color="1"
              />
              <path fill="#C6A105" d="M79 88v6H28.001v-6H79z" data-color="1" />
              <path fill="#C6A105" d="M97.001 70v6h-45v-6h45z" data-color="1" />
              <path fill="#C6A105" d="M46.001 70v6h-6v-6h6z" data-color="1" />
              <path fill="#C6A105" d="M64 52.001v6h-6v-6h6z" data-color="1" />
            </g>
          </svg>
        </a>
      )}
    </div>
  );
};

export default Social;
