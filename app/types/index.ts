export interface TimeSlot {
  date: string;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface Booking {
  name: string;
  studentNumber: string;
  company?: string;
  notes?: string;
  slot: string;
  code: string;
}

export interface BookingStore {
  bookings: Booking[];
  selectedSlot: TimeSlot | null;
  isBooking: boolean;
  setSelectedSlot: (slot: TimeSlot) => void;
  addBooking: (booking: Booking) => void;
  removeBooking: (code: string) => void;
  modifyBooking: (code: string, newBooking: Booking) => void;
}