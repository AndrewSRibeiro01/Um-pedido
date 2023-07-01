import { useState } from 'react'
import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  text-align: center;
`
const Button = styled.button`
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-right: 5px;
`
const Button1 = styled.button`
    width: 150px;
    height: 150px;
    font-size: 18px;
    color: white;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
`
const Button2 = styled.button`
    width: 150px;
    height: 150px;
    font-size: 18px;
    color: white;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
`
const Button3 = styled.button`
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-top: 150px;
  `
const Button4 = styled.button`
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-top: 250px;
    `
const Button5 = styled.button`
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-top: 350px;
`
const Button6 = styled.button`
    width: 150px;
    height: 150px;
    color: white;
    font-size: 18px;
    background: ${({ background }) => background};
    border-radius: 50%;
    border: none;
    cursor: pointer;
    margin-top: 550px;
`
const DivFlex = styled.div`
  margin: 0 auto;
`
const Div = styled.div`
  background: linear-gradient(to right, #79bf54, #d41818 );
  width: 350px;
  height: 100px;
  font-size: 32px;
  font-family: sans-serif;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 15px;
  margin: 15px 15px;
  color: #fff;
`
const App = () => {
  const [botaoAtivo, setBotaoAtivo] = useState(0);
  const [botaoAtivo1, setBotaoAtivo1] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();

    setBotaoAtivo(botaoAtivo + 1);
  }
  const handleClickSubmit = (event) => {
    event.preventDefault();

    setBotaoAtivo1(botaoAtivo1 + 1);
  }

  return (
    <>
      <Container>
        <DivFlex>
          <Div>
            Quer se casar comigo?
          </Div>
          {botaoAtivo1 <= 0 ? (
            <Button
              value={botaoAtivo1}
              onClick={handleClickSubmit}
              background={botaoAtivo1 <= 1 ? '#bf5454' : '#79bf54'}
            >
              Não
            </Button>
          )
            :
            (
              <Button1
                value={botaoAtivo1}
                onClick={handleClickSubmit}
                background={botaoAtivo1 < 1 ? '#bf5454' : '#79bf54'}
              >
                Ufa
              </Button1>
            )}
          {botaoAtivo === 0 &&
            (<Button2
              value={botaoAtivo}
              onClick={handleSubmit}
              background={botaoAtivo <= 1 ? '#79bf54' : '#bf5454'}
            >Sim</Button2>
            )}
          {botaoAtivo === 1 &&
            (
              <Button3
                value={botaoAtivo}
                onClick={handleSubmit}
                background={botaoAtivo <= 2 ? '#79bf54' : '#bf5454'}
              >Sim</Button3>
            )}
          {botaoAtivo === 2 &&
            (
              <Button4
                value={botaoAtivo}
                onClick={handleSubmit}
                background={botaoAtivo <= 3 ? '#79bf54' : '#bf5454'}
              >Sim</Button4>
            )}
          {botaoAtivo === 3 &&
            (
              <Button5
                value={botaoAtivo}
                onClick={handleSubmit}
                background={botaoAtivo <= 4 ? '#79bf54' : '#bf5454'}
              >Sim</Button5>
            )}
          {botaoAtivo === 4 &&
            (
              <Button6
                value={botaoAtivo}
                onClick={handleSubmit}
                background={botaoAtivo <= 3 ? '#79bf54' : '#bf5454'}
              >Quebro vey</Button6>
            )}
        </DivFlex >
      </Container >
    </>
  )
}

export default App