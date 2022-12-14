import styled from "styled-components";

export const StyledLayout = styled.div`
  width: 100%;
  min-width: 500px;
  max-width: 100vw;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
`;

export const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.heights.header};
  padding: 0 18px;
  background: ${({ theme }) => theme.colors.white};

  &.shadow {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  }

  > div#header {
    width: 100%;
    max-width: 1280px;
    display: flex;
    align-items: center;

    > div.timer {
      margin-left: auto;
    }
  }
`;

export const StyledContent = styled.main`
  display: flex;
  padding-top: ${({ theme }) => theme.heights.header};
  width: 100%;
  max-width: 1280px;
  height: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.heights.footer});
`;

export const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.heights.footer};
  padding: 18px;
  background: #f9f9fa;
  color: ${({ theme }) => theme.colors.gray};
  font-size: 14px;
  line-height: 24px;

  div#footer {
    width: 100%;
    max-width: 1280px;

    > b {
      display: block;
      font-weight: 600;
    }
  }
`;

export default {};
