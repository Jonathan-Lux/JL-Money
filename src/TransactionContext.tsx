import { useState, useEffect, ReactNode } from "react";
import {createContext} from "react"
import api from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    category: string;
    date: string;
    typeOutlay: string;
  }
  
  type TransactionInput = Omit<Transaction, "id" |"date">

  interface TransactionProviderProps {
      children: ReactNode;
  }

interface TransactionData{
    transactions: Transaction[];
    creatTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionData>({}as TransactionData)

export function TransactionProvider ({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

  async  function creatTransaction (transactionInput: TransactionInput){

         const res = await api.post("/transactions", {
             ...transactionInput,
            date: new Date()})
        const {transaction} = res.data
        setTransactions([...transactions, transaction])
    }

    useEffect(() => {
      api
        .get("/transactions")
        .then((res) => setTransactions(res.data.transactions));
    }, []);

    return (
        <TransactionContext.Provider value={{transactions,creatTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
}