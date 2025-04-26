import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { MdDeleteForever } from "react-icons/all.js";
import { removeUser } from "../store/slices/UserSlice";

function DisplayUsers() {
  const dispatch = useDispatch();

  const data = useSelector((state) => {
    return state.users;
  });

  //   console.log(data);

  const deleteUser = (id) => {
    dispatch(removeUser(id));
  };

  return (
    <Wrapper>
      {data.map((user, id) => {
        return (
          <li key={id} className="user-list">
            {user}
            <button className="delete-btn" onClick={() => deleteUser(id)}>
              <MdDeleteForever className="delete-icon" />
            </button>
          </li>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 1rem 3.2rem;

  .user-list {
    display: flex;
    justify-content: space-between;
  }

  .delete-btn {
    background-color: transparent;
    border: none;
  }

  .delete-icon {
    font-size: 2.6rem;
    color: #f12711;
    filter: drop-shadow(0.2rem 0.2rem 0.5rem rgb(255 0 0 / 0.2));
    cursor: pointer;
  }
`;

export default DisplayUsers;
