import { styled } from "styled-components";

const StyledButton = styled.button`
  width: ${(props) => (props.md ? "50%" : "100%")};
  border-radius: 5px;
  border: none;
  font-size: 16px;
  padding: 4px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #5b9a8b;
    border: 1px solid #fff;
    color: #fff;
  }
`;

function Button({ text, md }) {
  return <StyledButton md={md}>{text}</StyledButton>;
}

export default Button;
