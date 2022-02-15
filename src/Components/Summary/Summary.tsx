import { useContext } from "react";
import { TransactionContext } from "../../TransactionContext";
import { Container } from "../Summary/style";

export function Summary() {

  const {transactions} = useContext(TransactionContext)
 
  const result = transactions.reduce((acc, transaction) =>{

    if(transaction.typeOutlay ==="deposit"){
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;

    
    
    }else{
      acc.withdraw += transaction.amount;
      acc.total -= transaction.amount;
    }
    
    return acc;
    
  },{
      deposits:0,
      withdraw:0,
      total:0
  
  })
  return (
      <Container>
        <div>
        <header>
          <p>Entradas</p>
          <img src="../../assets/income.svg" alt="Entrada" />
        </header>
        <strong className="deposits">{new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"}).format(result.deposits)}</strong>
      </div>
      <div>
        <header>
          <p>Saída</p>
          <img src="../../assets/outcome.svg" alt="Saída" />
        </header>
        <strong className="withdraw">{new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"}).format(result.withdraw)}</strong>
      </div>
      <div className="total">
        <header>
          <p className="total">Total</p>
          <img src="../../assets/total.svg" alt="Total" />
        </header>
        <strong className="total">{new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"}).format(result.total)}</strong>
        </div>
      </Container>
  );
}

export default Summary;
