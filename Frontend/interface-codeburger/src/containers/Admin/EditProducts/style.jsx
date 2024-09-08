import styled from "styled-components";
import { Button } from "../../../components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    background: #565656;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 25px;
  }
`;

export const Label = styled.p`
  font-size: 16px;
  color: white;
`;

export const Input = styled.input`
  height: 40px;
  background: white;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: none;
  width: 100%;
  min-width: 250px;
  padding-left: 8px;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  margin-top: 25px;
`;

export const LabelUpload = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  border: 1px dashed white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 25px;
  gap: 10px;
  
  input {
    opacity: 0;
    width: 1px;
    cursor: pointer;
  }
`;


export const ContainerInput = styled.div`
  display: flex;
  align-items: baseline;
  gap: 10px;

  input{
    width: 15px;
    height: 15px;
    cursor: pointer;
  }


`