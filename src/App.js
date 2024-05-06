import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";
// import AppReducer from "./context/AppReducer";
import { GlobaProvider } from "./context/GlobalState";

function App() {
  return (
      <GlobaProvider >
      <Header />
      <div className="container">
        <Balance />
      </div>
      <IncomeExpenses />
      <TransactionList />
      <AddTransaction />
      </GlobaProvider>
  );
}

export default App;
