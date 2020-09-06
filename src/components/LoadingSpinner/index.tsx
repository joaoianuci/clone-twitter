import React from 'react';
import MoonLoader from 'react-spinners/MoonLoader';
import { css as cssEmotion, SerializedStyles } from '@emotion/core';
// import { Container } from './styles';

interface Params {
  css?: SerializedStyles;
  size: number;
  color: string;
  loading: boolean;
}

const LoadingSpinner: React.FC<Params> = ({ color, loading, size, css }) => {
  const override = cssEmotion`
    display: block;
    margin: 25% auto;
  `;
  console.log(loading);
  return (
    <div className="sweet-loading">
      <MoonLoader
        css={css || override}
        size={size}
        color={color}
        loading={loading}
      />
    </div>
  );
};

export default LoadingSpinner;
