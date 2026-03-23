import React from 'react';

const StatCard = ({ title, value, icon, trend, color = 'blue' }) => {
  const colorMap = {
    blue: 'from-blue-500 to-indigo-600 shadow-blue-500/20',
    emerald: 'from-emerald-500 to-teal-600 shadow-emerald-500/20',
    rose: 'from-rose-500 to-pink-600 shadow-rose-500/20',
    amber: 'from-amber-500 to-orange-600 shadow-amber-500/20',
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-300/50 transition-all duration-300 group">
      <div className="flex items-start justify-between">
        <div className={`p-4 rounded-2xl bg-gradient-to-tr ${colorMap[color]} text-white group-hover:scale-110 transition-transform duration-300`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
          </svg>
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-lg ${trend > 0 ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
            <span>{trend > 0 ? '+' : ''}{trend}%</span>
            <svg className={`w-3 h-3 ${trend < 0 ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </div>
        )}
      </div>
      <div className="mt-6">
        <h3 className="text-slate-500 text-sm font-medium uppercase tracking-wider">{title}</h3>
        <p className="text-3xl font-black text-slate-800 mt-1">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
