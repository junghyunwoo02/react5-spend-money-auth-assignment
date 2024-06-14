import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../axios/auth";

const Login = ({ setUser }) => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { userId, nickname, avatar } = await login({
      id: id,
      password: password,
    });
    alert("로그인이 완료됐습니다. :>");
    setUser({ userId, nickname, avatar });
    navigate("/");
  };

  return (
    <Container>
      <StH2>로그인</StH2>
      <StIdPwContainer>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          id="id"
          placeholder="아이디"
          minLength="4"
          maxLength="10"
        />
      </StIdPwContainer>
      <StIdPwContainer>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="비밀번호"
          minLength="4"
          maxLength="15"
        />
      </StIdPwContainer>
      <StLoginBtn onClick={handleLogin}>로그인</StLoginBtn>
      <StSignupBtn
        onClick={() => {
          navigate("/Signup");
        }}
      >
        회원가입
      </StSignupBtn>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  max-width: 400px;
  margin: 0px auto;
  padding: 20px;
  background-color: rgb(248, 249, 250);
  border-radius: 8px;
`;

const StH2 = styled.h2`
  padding-bottom: 10px;
  font-weight: bold;
`;

const StIdPwContainer = styled.div`
  margin-bottom: 15px;

  label {
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
  }
`;

const StLoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(0, 123, 255);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:disabled {
    background-color: rgb(160, 160, 160);
  }
`;

const StSignupBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;
