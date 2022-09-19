import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-weight: bold;
  font-size: 2.25rem;
  line-height: 1.22222;
  white-space: pre-line;
`

export const StyledDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.gray};
`

export const StyledQuestion = styled.div`
  display: flex;
  gap: 8px;
  font-size: 30px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 24px;

  > h3 {
    white-space: pre-line;
  }
`;

export const StyledOptionContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 18px;
  margin-bottom: 24px;
`;

export const StyledOption = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  gap: 8px;
  cursor: pointer;
  border-radius: 8px;
  white-space: pre-line;

  &.correct {
    background: ${({ theme }) => theme.colors.correct};
  }

  &.wrong {
    background: ${({ theme }) => theme.colors.wrong};
  }
`;

export default {};