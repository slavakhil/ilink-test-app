import styled from "styled-components"

export const Text = styled.div`
  text-align: center;
  margin-bottom: 28px;
  
  font-size: 24px;
  color: ${({color}) => color || "black"};
  text-shadow: -1px -2px 2px #FFFFFF, 1px 2px 2px rgba(91, 13, 13, 0.5);
`


export const Button = styled.button`
  width: 470px;
  height: 68px;
  border: none;
  font-weight: bold;
  font-size: 18px;
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  background: linear-gradient(91.2deg, #FFFFFF 0%, #F2F2F2 100%);
  box-shadow: -2px -4px 12px #FFFFFF, 2px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 88px;
`