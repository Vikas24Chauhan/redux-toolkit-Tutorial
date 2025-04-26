import React from "react";
import { deleteAllUser } from "../store/slices/UserSlice";
import { useDispatch } from "react-redux";
import styled from "styled-components";

export const DeleteAllUser = () => {
  const dispatch = useDispatch();

  const clearAllUsers = () => {
    dispatch(deleteAllUser());
  };
  return (
    <Wrapper>
      <button className="btn" onClick={clearAllUsers}>
        Clear Users
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 1.5rem 0;
`;
