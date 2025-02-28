'use client'
import styled from "styled-components"

interface SearchProps {
  isCategorySearch: boolean;
}

export const Container = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.isCategorySearch ? '' : props.theme.colors.black3};
  border-radius: 4px;
  padding-right: 16px;

  img {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    input {
      width: 150px;
    }
  }
  @media (max-width: 540px) {
    input {
      width: 80px;
    }  
    margin-right: 20px;
  }
`;