import styled from "styled-components";
export default function Who() {
  const DIV = styled.div`
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
    color: #333;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
    margin: 20px;
    transition: all 0.3s ease;
    &:hover {
      background-color: #e0e0e0;
      transform: scale(1.02);
    }
  `;
  return <DIV>Who</DIV>;
}
