import styled from "styled-components";

const Box = ({ active, onClick, children }) => {
  return (
    <StyledBox $active={active} onClick={onClick}>
      {children}
    </StyledBox>
  );
};

export default Box;

const StyledBox = styled.button`
  text-align: center;
  font-family: Pretendard, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 104px;
  height: 60px;
  background-color: ${(props) => (props.$active ? "#2ec4b6" : "#F6F7FA")};
  border-radius: 10px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(props) => (props.$active ? "#F6F7FA" : "#000")};

  &:hover {
    background-color: #2ec4b6;
    transition: background-color 0.2s ease-in-out 0s;
    color: #f6f7fa;
  }
`;
