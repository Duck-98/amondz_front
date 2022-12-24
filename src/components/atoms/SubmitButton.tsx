import { HTMLAttributes, ReactNode } from 'react';
import styled from '@emotion/styled';

interface Styles {
  width?: number;
  height?: number;
  borderRadius?: number;
}

interface Props extends HTMLAttributes<HTMLInputElement>, Styles {
  children: ReactNode;
  className?: string;
}

function SubmitButton({ children, className, ...rest }: Props) {
  return (
    <StyledButton className={className} type="submit" {...rest}>
      {children}
    </StyledButton>
  );
}

const StyledButton = styled.input<Partial<Props>>`
  all: unset;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height = 50 }) => (height ? height + 'px' : '100%')};
  border-radius: ${({ borderRadius = 10 }) => borderRadius + 'px'};
  color: #ffffff;
  background-color: #000000;
  font-weight: normal;
  font-style: normal;
  margin-top: 24px;
`;

export default SubmitButton;
