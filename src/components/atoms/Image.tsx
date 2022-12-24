import React from 'react';

import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface Props {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  autoSize: boolean; // 자동으로 이미지 가로, 세로 지정 (layout: fill)
  className?: string;
}

function Image({ src, alt, width, height, autoSize = true, ...rest }: Props) {
  return (
    <Wrapper autoSize={autoSize} {...rest}>
      <TransitionImage
        src={src}
        alt={alt}
        aria-label={alt}
        width={width}
        height={height}
        // layout={autoSize ? 'fill' : 'fixed'}
        // objectFit={autoSize ? 'contain' : 'fill'}
        placeholder="blur"
        // blurDataURL={src}
        draggable={false}
        {...rest}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div<Pick<Props, 'autoSize'>>`
  display: flex;
  justify-content: center;
  ${({ autoSize }) =>
    autoSize &&
    css`
      display: block;
      min-height: 215px;
      position: relative;
      & > span {
        position: unset !important;
      }
      & img {
        position: relative !important;
        height: auto !important;
      }
    `};
`;

const TransitionImage = styled.img`
  transition: 0.2s;
  border-radius: 5px;
`;

export default Image;
