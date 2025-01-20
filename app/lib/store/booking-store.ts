import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { BookingStore } from '@/app/types'

export const useBookingStore = create<BookingStore>()(
  persist(
    (set) => ({
      bookings: [],
      selectedSlot: null,
      isBooking: false,

      setSelectedSlot: (slot) => 
        set({ 
          selectedSlot: slot,
          isBooking: true 
        }),

      addBooking: (booking) => 
        set((state) => ({ 
          bookings: [...state.bookings, booking],
          selectedSlot: null,
          isBooking: false
        })),

      removeBooking: (code) => 
        set((state) => ({
          bookings: state.bookings.filter(b => b.code !== code)
        })),

      modifyBooking: (code, newBooking) => 
        set((state) => ({
          bookings: state.bookings.map(b => 
            b.code === code ? newBooking : b
          )
        }))
    }),
    {
      name: 'booking-store',
      // Only persist the bookings array
      partialize: (state) => ({ bookings: state.bookings })
    }
  )
)