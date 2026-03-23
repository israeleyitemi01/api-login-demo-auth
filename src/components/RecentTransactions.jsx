import React from 'react';

const RecentTransactions = () => {
  const transactions = [
    { id: 1, name: 'Apple Store Purchase', date: '2026-03-22', amount: '-$999.00', status: 'Completed', type: 'Technology' },
    { id: 2, name: 'Salary Deposit', date: '2026-03-21', amount: '+$4,500.00', status: 'Completed', type: 'Income' },
    { id: 3, name: 'Monthly Rent', date: '2026-03-01', amount: '-$1,200.00', status: 'Pending', type: 'Housing' },
    { id: 4, name: 'Netflix Subscription', date: '2026-02-28', amount: '-$15.99', status: 'Completed', type: 'Entertainment' },
    { id: 5, name: 'Starbucks Coffee', date: '2026-02-28', amount: '-$6.50', status: 'Failed', type: 'Food' },
  ];

  const statusStyles = {
    Completed: 'bg-emerald-50 text-emerald-600',
    Pending: 'bg-amber-50 text-amber-600',
    Failed: 'bg-rose-50 text-rose-600',
  };

  return (
    <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 overflow-hidden">
      <div className="p-8 border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-800">Recent Activity</h2>
          <p className="text-sm text-slate-500 mt-1">Latest transactions from your account</p>
        </div>
        <button className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 rounded-xl text-sm font-semibold transition-all">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50/50">
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Transaction</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Category</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-right">Amount</th>
              <th className="px-8 py-4 text-xs font-bold text-slate-400 uppercase tracking-widest text-center">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-slate-50/50 transition-all group cursor-pointer">
                <td className="px-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-500 transition-all font-bold">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-800">{t.name}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{t.date}</p>
                    </div>
                  </div>
                </td>
                <td className="px-8 py-6">
                  <span className="text-sm font-medium text-slate-600">{t.type}</span>
                </td>
                <td className={`px-8 py-6 text-right font-bold ${t.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-800'}`}>
                  {t.amount}
                </td>
                <td className="px-8 py-6 text-center">
                  <span className={`px-4 py-1.5 rounded-full text-xs font-bold ${statusStyles[t.status]}`}>
                    {t.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;
