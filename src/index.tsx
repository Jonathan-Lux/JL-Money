import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createServer, Model} from "miragejs"


createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[{
        id:1,
        title:"FreeLancer",
        amount: 4000,
        typeOutlay: "deposit",
        category: "venda",
        date: new Date()
      },
      {
        id:2,
        title:"PC",
        amount: 2000,
        typeOutlay: "withdraw",
        category: "Compra",
        date: new Date()
      }],
      
    })
  },

  routes(){
    this.namespace ="api"
    this.get("/transactions",()=>{
      return this.schema.all("transaction")
    })

    this.post("/transactions",(schema,res)=>{
      const data = JSON.parse(res.requestBody);
      return schema.create("transaction",data);
    })
}})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
