import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";

import H1 from "../../components/Title"
import ContainerItens from "../../components/ContainerItens"
import Button from "../../components/Button"

import {
  Container,
  Image,
  InputLabel,
  Input,
} from "./styles";

//JSX -> MISTURA HTML COM JAVASCRIPT
function App() {
  const [users, setUsers] = useState([]);
  const history = useHistory()
  
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/order", {
      clientName: inputName.current.value,
      age: inputAge.current.value,
    });

    console.log(newUser);
    setUsers([...users, newUser]);

    history.push("/usuarios")
  }



  return (
    <Container>
      <Image alt="logo-image" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome:</InputLabel>
        <Input ref={inputName} placeholder="Digite seu nome"></Input>

        <InputLabel>Idade:</InputLabel>
        <Input ref={inputAge} placeholder="Digite sua idade"></Input>

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Arrow} />
        </Button>

  
      </ContainerItens>
    </Container>
  );
}

export default App;
