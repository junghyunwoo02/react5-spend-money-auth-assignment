import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ExpenseCard = ({ data }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/detail/${data.id}`);
  };

  return (
    <Card onClick={handleCardClick}>
      <SpanDiv>
        <span>{data.date}</span>
        <span>
          {data.item} - {data.description}
        </span>
      </SpanDiv>
      <WonSpan>{Number(data.amount).toLocaleString("ko-KR")}원</WonSpan>
    </Card>
  );
};

export default ExpenseCard;

const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  border-radius: 8px;
  background-color: rgb(249, 249, 249);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    transform: scale(1.02);
    transition-duration: 0.4s;
  }

  span:last-child {
    font-weight: bold;
    color: rgb(0, 123, 255);
    flex-shrink: 0;
  }
`;

const WonSpan = styled.span`
  font-weight: bold;
  color: rgb(0, 123, 255);
  flex-shrink: 0;
`;

const SpanDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  span:first-child {
    margin-bottom: 5px;
    color: rgb(102, 102, 102);
    font-size: 14px;
  }

  span:last-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`;
