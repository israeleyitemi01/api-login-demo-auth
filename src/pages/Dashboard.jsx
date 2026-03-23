/*
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCard from "../components/StatCard";
import RecentTransactions from "../components/RecentTransactions";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    // Simulate loading
    setTimeout(() => setLoading(false), 800);
  }, []);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-slate-500 font-medium animate-pulse">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex">
      <Sidebar />

      <div className="flex-1 ml-64 flex flex-col">
        <Header user={user} />

        <main className="mt-16 p-8 flex-1">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-black text-slate-800 tracking-tight">
                Welcome back, {user?.firstName}! 👋
              </h1>
              <p className="text-slate-500 mt-2 font-medium">
                Here's what's happening with your account today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <StatCard 
                title="Total Balance" 
                value="$24,560.00" 
                icon="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                trend={12}
                color="blue"
              />
              <StatCard 
                title="Monthly Income" 
                value="$5,240.00" 
                icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                trend={8}
                color="emerald"
              />
              <StatCard 
                title="Total Expenses" 
                value="$1,890.00" 
                icon="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                trend={-5}
                color="rose"
              />
              <StatCard 
                title="Savings Goal" 
                value="85%" 
                icon="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                trend={2}
                color="amber"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <RecentTransactions />
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Account Details</h3>
                  <div className="space-y-4">
                    <DetailItem label="Full Name" value={`${user?.firstName} ${user?.lastName}`} />
                    <DetailItem label="Email Address" value={user?.email} />
                    <DetailItem label="Phone Number" value={user?.phone} />
                    <DetailItem label="Card Number" value={`**** **** **** ${user?.cardNumber?.slice(-4)}`} />
                    <DetailItem label="Account Role" value={user?.role} className="capitalize" />
                    <DetailItem label="Mailing Address" value={user?.address} />
                    <DetailItem label="Date of Birth" value={user?.dateOfBirth} />
                  </div>
                  <button className="w-full mt-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all active:scale-[0.98]">
                    Edit Profile
                  </button>
                </div>

                <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-[2rem] text-white shadow-xl shadow-blue-500/30 relative overflow-hidden group">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold">Premium Support</h3>
                    <p className="text-blue-100 text-sm mt-2">Get 24/7 dedicated support for all your banking needs.</p>
                    <button className="mt-6 px-6 py-2.5 bg-white text-blue-600 rounded-xl font-bold text-sm hover:shadow-lg transition-all group-hover:scale-105">
                      Contact Us
                    </button>
                  </div>
                  <svg className="absolute -right-8 -bottom-8 w-48 h-48 text-blue-500/20 group-hover:rotate-12 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const DetailItem = ({ label, value, className = "" }) => (
  <div className="flex flex-col">
    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</span>
    <span className={`text-slate-700 font-semibold mt-1 break-words ${className}`}>{value || 'Not provided'}</span>
  </div>
);

export default Dashboard;
*/
