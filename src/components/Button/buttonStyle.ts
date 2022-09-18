import styled from "styled-components";

export const StyledButton = styled.button`
	height: 50px;
	padding: 0 18px;
	border-radius: 6.75px;
	font-weight: 500;
	font-size: 16px;
  cursor: pointer;
	
	&.default {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 1px solid transparent;
	}

  &.outlined {
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default {};
