import React, { CSSProperties } from 'react';
import styled from '@emotion/styled';

interface WrapProps {
  children: React.ReactNode;
  className?: string;
  css?: CSSProperties;
}

const StyledLayout = styled.div`
  position: relative;
  max-width: 1024px;
  min-height: calc(100vh - 73px);
  margin: 30px auto 100px;
  padding: 0px 30px;
`;

export default function Wrapper({ children, className }: WrapProps) {
  return <StyledLayout className={className}>{children}</StyledLayout>;
}
