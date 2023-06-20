import { useEffect, useState } from "react";
import { LabenuLogo } from "../../components/LabenuLogo/LabenuLogo";
import { useNavigate } from "react-router-dom";

import {
  StyledContinueButton,
  StyledDiv,
  StyledErrorMessage,
  StyledForm,
  StyledInput,
  StyledLoginPage,
  StyledSignUpButton,
  StyledSubTitle,
  StyledTitle,
} from "./StyledLoginPage";
import { useRequestData } from "../../Hooks/UseRequestData";
import { PATH } from "../../assets/constants";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const [email, setEmail] = useState(undefined);
  const [password, setPassword] = useState(undefined);

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [badRequest, setBadRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const path = `${PATH}/users/login`;
  const { logInData } = useRequestData(path);

  const [token, setToken] = useState(undefined);
  const [loadingTimes, setLoadingTimes] = useState(0);

  useEffect(() => {
    setLoadingTimes(1);
    handleLogIn();
  }, []);

  const handleLogIn = () => {
    if (loadingTimes > 0) {
      setIsLoading(true);
    }

    const body = { email, password, token };
    // Comentado para rodar
    //logInData(body, setIsLoading, setErrorMessage, setBadRequest, loadingTimes);
  };

  return (
    <StyledLoginPage fade={fade}>
      <LabenuLogo />
      <StyledTitle>LabEddit</StyledTitle>
      <StyledSubTitle>Rede social</StyledSubTitle>

      <StyledForm>
        <StyledInput
          onChange={handleEmail}
          type="text"
          id="email"
          name="email"
          placeholder="E-mail"
        />
        <StyledInput
          onChange={handlePassword}
          type="password"
          id="password"
          name="password"
          placeholder="Senha"
        />
      </StyledForm>
      {badRequest && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
      <StyledContinueButton
        onClick={handleLogIn}
        onTouchStart={handleLogIn}
        isLoading={isLoading}
      >
        {isLoading ? "Aguarde" : "Continuar"}
      </StyledContinueButton>
      <StyledDiv />
      <StyledSignUpButton>Criar conta!</StyledSignUpButton>
    </StyledLoginPage>
  );
};
