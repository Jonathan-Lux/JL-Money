import Modal from "react-modal";
import {Container,TransactionButtonModal,ButtonRadiusModal,} from "../Modal/style";
import { useState,FormEvent,useContext } from "react";
import { TransactionContext } from "../TransactionContext";
interface ModalTransactionProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export default function ModalTransaction({isOpen,onRequestClose,}: ModalTransactionProps) {
  const {creatTransaction} = useContext(TransactionContext)
  const [typeOutlay, setTypeOutlay] = useState("deposit");
  const [title, setTitle] = useState("")
  const [amount, setAmount] =useState(0)
  const [category, setCategory] = useState("")

   async function handleCreateTransaction(event:FormEvent){
        event.preventDefault();

        await creatTransaction({
          title,
          amount,
          typeOutlay,
          category,
        })
        setTypeOutlay("deposit")
        setTitle("")
        setAmount(0)
        setCategory("")
        onRequestClose()
      }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button className="closed-modal" type="button" onClick={onRequestClose}>
        <img src="../../assets/close.svg" alt="closed modal" />
      </button>
      <Container onSubmit={handleCreateTransaction}>
        <h2>Cadastrar transação </h2>
        <input value={title} onChange={event=>setTitle(event.target.value)} type="text" placeholder="Título"></input>
        <input value={amount} onChange={event=>setAmount(+event.target.value)} type="number" placeholder="Valor"></input>
        <TransactionButtonModal>
          <ButtonRadiusModal
            type="button"
            onClick={() => {setTypeOutlay("deposit");}}
            isActive={typeOutlay === "deposit"}
            activeColor = "green">

            <img src="../../assets/income.svg" alt="entrada"></img>
            <span>Entrada</span>
          </ButtonRadiusModal>

          <ButtonRadiusModal
            type="button"
            onClick={() => {
              setTypeOutlay("withdraw");
            }}
            isActive={typeOutlay === "withdraw"}
            activeColor = "red"
          >
            <img src="../../assets/outcome.svg" alt="saida"></img>
            <span>Saída</span>
          </ButtonRadiusModal>
        </TransactionButtonModal>
        <input value={category} onChange={event=>setCategory(event.target.value)} className="inputs-modal" type="text"placeholder="Categoria"></input>
        <button className="inputs-modal submit" type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
