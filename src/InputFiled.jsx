import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: bold;
`;

const Input = styled.input`
  outline: none;
  background: #fff;
  border-radius: 5px;
  font-weight: lighter;
  border: ${(props) => (props.error === "" ? "none" : "1px solid #ff0000")};
`;

const Error = styled.span`
  font-size: 12px;
  color: #ff0000;
  font-weight: bold;
`;

function InputFiled({
  label,
  type,
  name,
  value,
  handleChange,
  handleFocus,
  handleBlur,
  error,
}) {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        error={error}
      />
      <Error>{error}</Error>
    </Container>
  );
}

export default InputFiled;
