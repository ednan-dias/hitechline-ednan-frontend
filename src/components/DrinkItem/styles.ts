import styled from "@emotion/styled";

export const Container = styled.div`
  width: 50%;
  height: auto;
  background-color: white;
  margin: 15px;
  padding: 15px;
  border-left-width: 5px;
  border-left-color: ${({ color }) => color};
  border-left-style: solid;
  border-radius: 10px;
`;

export const Title = styled.h1`
  font-size: 18px;
`;

export const SubTitle = styled.p``;
