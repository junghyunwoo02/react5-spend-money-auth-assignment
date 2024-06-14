import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { register } from "../axios/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (id.length < 4 || id.length > 10) {
      alert("아이디는 4글자에서 10글자 이내로만 가능합니다.");
      return;
    }
    if (password.length < 4 || password.length > 15) {
      alert("비밀번호는 4글자에서 15글자 이내로만 가능합니다.");
      return;
    }
    if (nickname.length < 1 || nickname.length > 10) {
      alert("닉네임은 1글자에서 10글자 이내로만 가능합니다.");
      return;
    }

    const response = await register({
      id: id,
      password: password,
      nickname: nickname,
    });

    if (response.success) {
      toast.success("회원가입이 완료됐습니다!", {
        onClose: () => navigate("/login"),
      });
    } else {
      toast.error("회원가입에 실패했습니다. 다시 시도해 주세요.");
    }
  };
  return (
    <Container>
      <StH2>회원가입</StH2>
      <StIdPwNameContainer>
        <label htmlFor="id">아이디</label>
        <input
          type="text"
          onChange={(e) => setId(e.target.value)}
          id="id"
          placeholder="아이디"
          minLength="4"
          maxLength="10"
        />
      </StIdPwNameContainer>
      <StIdPwNameContainer>
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          id="password"
          placeholder="비밀번호"
          minLength="4"
          maxLength="15"
        />
      </StIdPwNameContainer>
      <StIdPwNameContainer>
        <label htmlFor="nickname">닉네임</label>
        <input
          type="text"
          onChange={(e) => setNickname(e.target.value)}
          id="nickname"
          placeholder="닉네임"
          minLength="1"
          maxLength="10"
        />
      </StIdPwNameContainer>
      <StSignupBtn onClick={handleRegister}>회원가입</StSignupBtn>
      <StLoginBtn
        onClick={() => {
          navigate("/login");
        }}
      >
        돌아가기
      </StLoginBtn>
      <ToastContainer
        position="top-right" // 알람 위치 지정
        autoClose={3000} // 자동 off 시간
        hideProgressBar={false} // 진행시간바 숨김
        closeOnClick // 클릭으로 알람 닫기
        rtl={false} // 알림 좌우 반전
        pauseOnFocusLoss // 화면을 벗어나면 알람 정지
        draggable // 드래그 가능
        pauseOnHover // 마우스를 올리면 알람 정지
        theme="light"
        // limit={1} // 알람 개수 제한
      />
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
