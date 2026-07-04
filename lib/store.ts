export interface TourBooking {
  id: string;
  name: string;
  email: string;
  phone: string;
  date: string;
  guests: number;
  program: string;
  message: string;
  createdAt: string;
  status: "pending" | "confirmed" | "cancelled";
}

export function getBookings(): TourBooking[] {
  if (typeof window === "undefined") return [];
  try {
    return JSON.parse(localStorage.getItem("eduschool-bookings") || "[]");
  } catch {
    return [];
  }
}

export function saveBooking(booking: TourBooking): void {
  const bookings = getBookings();
  bookings.unshift(booking);
  localStorage.setItem("eduschool-bookings", JSON.stringify(bookings));
}

export function updateBookingStatus(id: string, status: TourBooking["status"]): void {
  const bookings = getBookings().map((b) => (b.id === id ? { ...b, status } : b));
  localStorage.setItem("eduschool-bookings", JSON.stringify(bookings));
}

export function deleteBooking(id: string): void {
  const bookings = getBookings().filter((b) => b.id !== id);
  localStorage.setItem("eduschool-bookings", JSON.stringify(bookings));
}
