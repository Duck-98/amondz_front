import React, { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

interface Styles {
  width?: number;
  height?: number;
}

interface Props extends HTMLAttributes<HTMLDivElement>, Styles {
  className?: string;
  type: string;
  value: string;
  placeholder?: string;
  warningText?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  name?: string;
}

interface InputProps {
  className?: string;
  type: string;
  value: string;
  placeholder?: string;
  warningText?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => void;
  name?: string;
}

function Input({
  name,
  onClick,
  onChange,
  className,
  value,
  type,
  placeholder = '',
}: Props) {
  return (
    <StyledInput className={className}>
      <input
        placeholder={placeholder}
        type={type}
        className="input"
        value={value}
        onChange={onChange}
        onClick={onClick}
        name={name}
      />
    </StyledInput>
  );
}

const StyledInput = styled.div<Partial<Props>>`
  input {
    width: ${({ width }) => (width ? width + 'px' : '100%')};
    height: ${({ height = 50 }) => (height ? height + 'px' : '100%')};
  }
`;

export default Input;
