import React from 'react';
import styled from 'styled-components';

// components
import NewQuestion from './NewQuestion';

const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  // z-index: 10:
  border-radius: 10px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align items: center;
`;

export default function Modal({ showModal, setShowModal, addQuestion, setAddedQuestion }) {
  return (
    <div>
      {showModal ? <NewQuestion addQuestion={addQuestion} setAddedQuestion={setAddedQuestion} /> : null}
    </div>
  );
}