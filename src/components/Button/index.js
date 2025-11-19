import styled from 'styled-components';

const Button = styled.a`
  text-decoration: none;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 7px 16px;
  margin-top: 12px;
  background-color: #1a1717ff;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`

export default Button;