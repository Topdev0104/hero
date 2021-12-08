import styled from "styled-components";
import { injectGlobal } from "styled-components";
import horizonFont from "../../assets/fonts/Horizon.ttf";
injectGlobal`
  @font-face {
    font-family: 'horizon';
    src: url(${horizonFont});
    font-weight: normal;
    font-style: normal;
  }
  `;
export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.background || "none"};
  background-size: cover;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: calc(100vh - 60px);
  .header-text {
    font-family: "horizon";
  }
  @media screen and (max-width: 1300px) {
    .header-text {
      font-size: 50px;
      line-height: 80px;
    }
  }
  @media screen and (max-width: 1150px) {
    .header-text {
      font-size: 30px;
      line-height: 60px;
    }
  }
  @media screen and (max-width: 810px) {
    .header_view {
      display: flex;
      align-items: center;
      flex-direction: column !important;
      img {
        width: 180px;
      }
    }
    .header-text {
      text-align: center;
    }
  }
  @media screen and (max-width: 500px) {
    .header-text {
      font-size: 18px;
      line-height: 37px;
    }
  }
  .date-selector {
    padding: 10px;
    border-radius: 10px;
    width: 200px;
    border: none;
    font-size: 1rem;
    font-weight: bold;
  }
  .react-datepicker-wrapper {
    width: auto;
  }
  .react-datepicker-popper {
    z-index: 3;
  }
  .react-datepicker-ignore-onclickoutside {
    padding: 10px;
    outline: none;
    font-weight: bold;
  }
  .appt-time {
    width: 200px;
    border: none;
    outline: none;
    padding: 8px 10px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 1rem;
  }
  .rc-time-picker-input {
    font-weight: bold;

    height: 38px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const OverviewSection = styled.div`
  width: 100%;

  @media screen and (max-width: 850px) {
    .overview_header {
      font-size: 30px;
      text-align: center;
      padding: 0 10px;
    }
    .describe_header {
      width: 100%;
      font-size: 23px;
      text-align: center;
    }
  }
`;
export const StyledOverview = styled.div`
  transition: 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
  padding: 0 40px;
  width: calc(100% - 80px);
  align-items: center;
  .mySwiper {
    width: 100%;
    text-align: center;
  }
  .subSwiper {
    width: 100%;
    text-align: center;
    display: none;
  }

  @media screen and (max-width: 850px) {
    padding: 0 20px;
    align-items: center;
    .overview {
      align-items: center;
      text-align: center;
    }
    .mySwiper {
      display: none;
    }
    .subSwiper {
      display: block;
    }
  }
`;
export const StyledTeam = styled.div`
  width: 100%;
  @media screen and (max-width: 750px) {
    .team_grid {
      grid-template: repeat(2, 1fr) / repeat(2, 1fr) !important;
    }
  }
  @media screen and (max-width: 500px) {
    .team_grid {
      gap: 50px !important;
      grid-template: repeat(4, 1fr) / repeat(1, 1fr) !important;
    }
  }
`;
