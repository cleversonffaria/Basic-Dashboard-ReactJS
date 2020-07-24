import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif, Arial, Helvetica;
  }
  html, body, #root{
    max-height:100vh;
    max-width:100vw;

    width:100%;
    height:100%;
  }
  #root{
    --primary : #6454f0;
    --secondary : #6ee2f5;

    --primary-light: #9283fc;

    --sucess : #11d131;
    --error : #eb4836;

    --white : #fff;
    --outline: #fafafa;
    --gray-light : #ccc;
    --gray : #686868;
    --dark-light : #333;
    --dark : #242323;

  }
  .text_center{
    text-align:center
  }
  .margin_right_left{
    margin: 16px 0;
  }
  .margin_right{
    margin-right:10px
  }
  .layout-background{
    background:var(--white)
  }
  .editable-row .ant-form-item-explain {
  position: absolute;
  top: 100%;
  font-size: 12px;
}
`;
export default GlobalStyle;
