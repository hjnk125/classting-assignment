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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
  height: ${({ theme }) => theme.heights.header};
  padding: 0 18px;

  > div#header {
    width: 100%;
    max-width: 1280px;
  }
`;

export const StyledContent = styled.main`
  display: flex;
  padding-top: ${({ theme }) => theme.heights.header};
  width: 100%;
  max-width: 1280px;
  height: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.heights.header});
`;

export const StyledFooter = styled.footer`
  width: 100%;
  max-width: 900px;
  padding: 0 18px;
  height: ${({ theme }) => theme.heights.footer};
  background: #f9f9fa;
`;

export default {};
