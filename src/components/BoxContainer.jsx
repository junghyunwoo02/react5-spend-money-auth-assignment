import styled from "styled-components";
import Box from "./Box";

const BoxContainer = ({ activeIndex, handleClick }) => {
  return (
    <Container>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
        <>
          <Box
            key={index}
            active={index === activeIndex}
            onClick={() => handleClick(index)}
          >
            {`${index}월`}
          </Box>
        </>
      ))}
    </Container>
  );
};

export default BoxContainer;

const Container = styled.section`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;
