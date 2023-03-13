import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  gap: 7px;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  width: 300px;
  border: 1px solid blue;
`;

const Input = styled.input`
  outline: none;
  padding: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: blue;
  background-color: #a5a2a2;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  cursor: pointer;

  :hover,
  :focus {
    background-color: #918d8d;
  }
`;

export { Form, Input, Button };
