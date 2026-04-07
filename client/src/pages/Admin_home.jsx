import React from "react";

import {
  LayoutDashboard,
  ShoppingBag,
  Users,
  Package,
  IndianRupee,
  Menu,
  Link,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "1,248",
    icon: ShoppingBag,
    change: "+12% this month",
  },
  {
    title: "Total Products",
    value: "326",
    icon: Package,
    change: "+8 new today",
  },
  {
    title: "Total Users",
    value: "892",
    icon: Users,
    change: "+21 this week",
  },
  {
    title: "Revenue",
    value: "₹84,560",
    icon: IndianRupee,
    change: "+18% from last month",
  },
];

const recentOrders = [
  {
    id: "#ORD1024",
    customer: "Aarav Sharma",
    product: "Handmade Clay Vase",
    amount: "₹1,499",
    status: "Delivered",
  },
  {
    id: "#ORD1025",
    customer: "Priya Singh",
    product: "Wooden Wall Art",
    amount: "₹2,299",
    status: "Pending",
  },
  {
    id: "#ORD1026",
    customer: "Riya Patel",
    product: "Traditional Lamp",
    amount: "₹899",
    status: "Shipped",
  },
  {
    id: "#ORD1027",
    customer: "Kabir Khan",
    product: "Handcrafted Basket",
    amount: "₹699",
    status: "Cancelled",
  },
];

const topProducts = [
  {
    name: "Clay Pot Set",
    stock: 18,
    sales: 96,
    price: "₹1,299",
  },
  {
    name: "Bamboo Lamp",
    stock: 10,
    sales: 74,
    price: "₹1,999",
  },
  {
    name: "Artisan Cushion Cover",
    stock: 36,
    sales: 58,
    price: "₹599",
  },
];

const getStatusStyle = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    case "Shipped":
      return "bg-blue-100 text-blue-700";
    case "Cancelled":
      return "bg-red-100 text-red-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <aside className="hidden w-72 flex-col bg-slate-900 text-white lg:flex">
          <div className="border-b border-slate-800 px-6 py-5">
            <h1 className="text-2xl font-bold tracking-wide text-amber-400">
              Admin Panel
            </h1>
            <p className="mt-1 text-sm text-slate-300">
              Handicrafts Marketplace
            </p>
          </div>

          <nav className="flex-1 space-y-2 px-4 py-6">
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl bg-amber-500/15 px-4 py-3 text-amber-300"
            >
              <LayoutDashboard size={20} />
              Dashboard
            </a>
            <a
              to="/orders"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <ShoppingBag size={20} />
              Orders
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Package size={20} />
              Products
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <Users size={20} />
              Customers
            </a>
            <a
              href="#"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-slate-300 transition hover:bg-slate-800 hover:text-white"
            >
              <IndianRupee size={20} />
              Revenue
            </a>
          </nav>

          <div className="border-t border-slate-800 px-4 py-4">
            <div className="rounded-2xl bg-slate-800 p-4">
              <p className="text-sm text-slate-300">Admin Access</p>
              <p className="mt-1 font-semibold">Manage your full store</p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {/* Topbar */}
          <div className="mb-6 flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <button className="rounded-xl border p-2 text-gray-600 lg:hidden">
                <Menu size={20} />
              </button>
              <div>
                <h2 className="text-2xl font-bold">Admin Dashboard</h2>
                <p className="text-sm text-gray-500">
                  Welcome back, manage your store performance here.
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm text-gray-500">{item.title}</p>
                      <h3 className="mt-2 text-3xl font-bold">{item.value}</h3>
                    </div>
                    <div className="rounded-2xl bg-amber-100 p-3 text-amber-600">
                      <Icon size={22} />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-green-600">{item.change}</p>
                </div>
              );
            })}
          </section>
        </main>
      </div>
    </div>
  );
}
