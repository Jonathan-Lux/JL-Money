import React, { useState } from 'react';
import Header from "./Components/Header/Header"
import DashBoard from './Components/DashBoard';
import Modal from "react-modal"
import { GlobalStyle } from './global';
import ModalTransaction from './Modal/modal';
import {TransactionProvider } from './TransactionContext';

Modal.setAppElement('#root')

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  function handleOpenModal(){
      setIsModalOpen(true)
  }

  function handleCloseModal(){
     setIsModalOpen(false)
  }
  return (
    <TransactionProvider>
    <Header openModal={handleOpenModal}/>
    <DashBoard/>
    <ModalTransaction isOpen={isModalOpen} onRequestClose={handleCloseModal}/>
    <GlobalStyle/>
    </TransactionProvider>
  );
}

export default App;
