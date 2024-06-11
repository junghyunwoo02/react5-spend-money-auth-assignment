import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <StH2>회원가입</StH2>
      <StIdPwNameContainer>
        <Stlabel htmlFor="id">아이디</Stlabel>
        <StInput
          type="text"
          id="id"
          placeholder="아이디"
          minLength="4"
          maxLength="10"
        />
      </StIdPwNameContainer>
      <StIdPwNameContainer>
        <Stlabel htmlFor="password">비밀번호</Stlabel>
        <StInput
          type="password"
          id="password"
          placeholder="비밀번호"
          minLength="4"
          maxLength="15"
        />
      </StIdPwNameContainer>
      <StIdPwNameContainer>
        <Stlabel htmlFor="nickname">닉네임</Stlabel>
        <StInput
          type="text"
          id="nickname"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
        />
      </StIdPwNameContainer>
      <StSignupBtn>회원가입</StSignupBtn>
      <StLoginBtn
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </StLoginBtn>
    </Container>
  );
};

export default Signup;

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

const StIdPwNameContainer = styled.div`
  margin-bottom: 15px;
`;

const Stlabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const StInput = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const StLoginBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(108, 117, 125);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;

const StSignupBtn = styled.button`
  width: 100%;
  padding: 10px;
  background-color: rgb(160, 160, 160);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;
`;
