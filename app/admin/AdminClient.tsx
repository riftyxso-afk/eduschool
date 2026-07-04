"use client";

import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import {
  LogIn, LogOut, LayoutDashboard, CalendarCheck,
  Check, X, Trash2, Eye, EyeOff,
} from "lucide-react";
import { useLang } from "@/lib/lang";
import { getBookings, updateBookingStatus, deleteBooking, type TourBooking } from "@/lib/store";
import settings from "@/data/settings.json";

const ADMIN_USER = "admin";
const ADMIN_PASS = "eduschool2025";

export default function AdminClient() {
  const { lang } = useLang();
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [bookings, setBookings] = useState<TourBooking[]>([]);
  const [activeTab, setActiveTab] = useState<"dashboard" | "bookings">("dashboard");
  const [showPass, setShowPass] = useState(false);

  useEffect(() => {
    const saved = sessionStorage.getItem("eduschool-admin");
    if (saved === "true") setLoggedIn(true);
  }, []);

  useEffect(() => {
    if (loggedIn) setBookings(getBookings());
  }, [loggedIn]);

  const refresh = () => setBookings(getBookings());

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setLoginError("");
      sessionStorage.setItem("eduschool-admin", "true");
    } else {
      setLoginError(lang === "id" ? "Username atau password salah" : "Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("eduschool-admin");
  };

  const handleStatus = (id: string, status: TourBooking["status"]) => {
    updateBookingStatus(id, status);
    refresh();
  };

  const handleDelete = (id: string) => {
    if (confirm(lang === "id" ? "Hapus booking ini?" : "Delete this booking?")) {
      deleteBooking(id);
      refresh();
    }
  };

  const stats = useMemo(() => {
    const total = bookings.length;
    const pending = bookings.filter((b) => b.status === "pending").length;
    const confirmed = bookings.filter((b) => b.status === "confirmed").length;
    const cancelled = bookings.filter((b) => b.status === "cancelled").length;
    return { total, pending, confirmed, cancelled };
  }, [bookings]);

  if (!loggedIn) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-sm rounded-[var(--radius-card)] bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 p-8"
        >
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white mx-auto mb-3">
              <LogIn size={22} />
            </div>
            <h1 className="font-heading font-bold text-xl text-neutral-900 dark:text-white">
              {lang === "id" ? "Admin Panel" : "Admin Panel"}
            </h1>
            <p className="text-sm text-neutral-500 mt-1">
              {lang === "id" ? `${settings.siteNameShort} Management` : `${settings.siteNameShort} Management`}
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2.5 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2.5 pr-10 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            {loginError && (
              <p className="text-sm text-danger bg-danger/10 px-3 py-2 rounded-[var(--radius-element)]">
                {loginError}
              </p>
            )}

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-[var(--radius-button)] bg-primary text-white font-semibold hover:bg-primary-dark transition-all"
            >
              <LogIn size={16} />
              {lang === "id" ? "Masuk" : "Login"}
            </button>
          </form>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      <section className="pt-24 pb-6 md:pt-32 md:pb-8 bg-neutral-50 dark:bg-neutral-800/50 border-b dark:border-neutral-700">
        <div className="container-wide">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">
                {lang === "id" ? "Panel Admin" : "Admin Panel"}
              </h1>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">
                {settings.siteNameShort} — {lang === "id" ? "Management Tur Sekolah" : "School Tour Management"}
              </p>
            </div>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 transition-colors text-sm"
            >
              <LogOut size={16} />
              {lang === "id" ? "Keluar" : "Logout"}
            </button>
          </div>

          <div className="flex gap-2 mt-6">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${
                activeTab === "dashboard"
                  ? "bg-primary text-white"
                  : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              <LayoutDashboard size={16} />
              {lang === "id" ? "Dashboard" : "Dashboard"}
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${
                activeTab === "bookings"
                  ? "bg-primary text-white"
                  : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700"
              }`}
            >
              <CalendarCheck size={16} />
              {lang === "id" ? "Booking" : "Bookings"}
              {stats.pending > 0 && (
                <span className="px-1.5 py-0.5 rounded-full bg-accent text-white text-xs font-bold">
                  {stats.pending}
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {activeTab === "dashboard" && (
        <section className="py-10">
          <div className="container-wide">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              {[
                { label: lang === "id" ? "Total Booking" : "Total Bookings", value: stats.total, color: "bg-primary" },
                { label: lang === "id" ? "Pending" : "Pending", value: stats.pending, color: "bg-accent" },
                { label: lang === "id" ? "Dikonfirmasi" : "Confirmed", value: stats.confirmed, color: "bg-success" },
                { label: lang === "id" ? "Dibatalkan" : "Cancelled", value: stats.cancelled, color: "bg-danger" },
              ].map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-6"
                >
                  <div className={`w-10 h-10 rounded-xl ${card.color} flex items-center justify-center text-white mb-3`}>
                    <LayoutDashboard size={18} />
                  </div>
                  <p className="text-2xl font-heading font-bold text-neutral-900 dark:text-white">{card.value}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{card.label}</p>
                </motion.div>
              ))}
            </div>

            {bookings.length === 0 && (
              <div className="text-center py-20 text-neutral-400">
                <CalendarCheck size={40} className="mx-auto mb-3 opacity-50" />
                <p>{lang === "id" ? "Belum ada booking" : "No bookings yet"}</p>
              </div>
            )}

            {bookings.length > 0 && (
              <div className="rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden">
                <div className="p-4 border-b border-neutral-200 dark:border-neutral-700">
                  <h3 className="font-heading font-semibold text-neutral-900 dark:text-white">
                    {lang === "id" ? "Booking Terbaru" : "Recent Bookings"}
                  </h3>
                </div>
                <div className="divide-y divide-neutral-200 dark:divide-neutral-700 max-h-96 overflow-y-auto">
                  {bookings.slice(0, 5).map((b) => (
                    <div key={b.id} className="p-4 flex items-center justify-between">
                      <div>
                        <p className="font-medium text-sm text-neutral-900 dark:text-white">{b.name}</p>
                        <p className="text-xs text-neutral-400">{b.date} &middot; {b.guests} tamu</p>
                      </div>
                      <span className={`px-2 py-0.5 rounded-[var(--radius-element)] text-xs font-medium ${
                        b.status === "confirmed" ? "bg-success/10 text-success" :
                        b.status === "cancelled" ? "bg-danger/10 text-danger" :
                        "bg-accent/10 text-accent"
                      }`}>
                        {b.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {activeTab === "bookings" && (
        <section className="py-10">
          <div className="container-wide">
            {bookings.length === 0 ? (
              <div className="text-center py-20 text-neutral-400">
                <CalendarCheck size={40} className="mx-auto mb-3 opacity-50" />
                <p>{lang === "id" ? "Belum ada booking tur" : "No tour bookings yet"}</p>
              </div>
            ) : (
              <div className="rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800/50">
                        <th className="text-left px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">{lang === "id" ? "Nama" : "Name"}</th>
                        <th className="text-left px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">Email</th>
                        <th className="text-left px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">{lang === "id" ? "Tanggal" : "Date"}</th>
                        <th className="text-left px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">{lang === "id" ? "Program" : "Program"}</th>
                        <th className="text-left px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">{lang === "id" ? "Status" : "Status"}</th>
                        <th className="text-right px-4 py-3 font-medium text-neutral-600 dark:text-neutral-300">{lang === "id" ? "Aksi" : "Actions"}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                      {bookings.map((b) => (
                        <tr key={b.id} className="hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors">
                          <td className="px-4 py-3 text-neutral-900 dark:text-white">
                            <div className="font-medium">{b.name}</div>
                            <div className="text-xs text-neutral-400">{b.phone}</div>
                          </td>
                          <td className="px-4 py-3 text-neutral-500">{b.email}</td>
                          <td className="px-4 py-3 text-neutral-500">{b.date}</td>
                          <td className="px-4 py-3">
                            <span className="px-2 py-0.5 rounded-[var(--radius-element)] bg-primary-lighter dark:bg-primary/20 text-primary text-xs font-medium">
                              {b.program}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-0.5 rounded-[var(--radius-element)] text-xs font-medium ${
                              b.status === "confirmed" ? "bg-success/10 text-success" :
                              b.status === "cancelled" ? "bg-danger/10 text-danger" :
                              "bg-accent/10 text-accent"
                            }`}>
                              {b.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-1">
                              {b.status === "pending" && (
                                <button
                                  onClick={() => handleStatus(b.id, "confirmed")}
                                  className="p-1.5 rounded-[var(--radius-element)] text-success hover:bg-success/10 transition-colors"
                                  title={lang === "id" ? "Konfirmasi" : "Confirm"}
                                >
                                  <Check size={15} />
                                </button>
                              )}
                              {b.status === "pending" && (
                                <button
                                  onClick={() => handleStatus(b.id, "cancelled")}
                                  className="p-1.5 rounded-[var(--radius-element)] text-danger hover:bg-danger/10 transition-colors"
                                  title={lang === "id" ? "Batalkan" : "Cancel"}
                                >
                                  <X size={15} />
                                </button>
                              )}
                              <button
                                onClick={() => handleDelete(b.id)}
                                className="p-1.5 rounded-[var(--radius-element)] text-neutral-400 hover:text-danger hover:bg-danger/10 transition-colors"
                                title={lang === "id" ? "Hapus" : "Delete"}
                              >
                                <Trash2 size={15} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}
