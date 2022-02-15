
import { Container } from "../Table/style";
import { TransactionContext } from "../../TransactionContext";
import { useContext } from "react";
function Table() {
 const {transactions} = useContext(TransactionContext)
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.typeOutlay}>{new Intl.NumberFormat("pt-BR",{
                style:"currency",
                currency:"BRL"}).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat("pt-BR").format(
                new Date(transaction.date)
              )}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Table;
