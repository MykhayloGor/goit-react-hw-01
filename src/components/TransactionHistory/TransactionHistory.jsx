import clsx from "clsx";
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
    return (
    <table className={s.transactionHistory}>
      <thead className={s.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={s.row}>
            <td className={s.data}>{type}</td>
            <td className={s.data}>{amount}</td>
            <td className={s.data}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;