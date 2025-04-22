import toast from 'react-hot-toast';

export const getBookingsData = () => {
  try {
    const storedBookings = localStorage.getItem('bookings');
    const parsed = JSON.parse(storedBookings);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error('Error parsing bookings from localStorage:', error);
    return [];
  }
};

export const addBookingsData = lawyer => {
  let bookings = getBookingsData();
  const isExist = bookings.find(b => b.id === lawyer.id);
  if (isExist)
    return toast.success('Appointment Already scheduled for today', {
      style: {
        background: '#FFD700', // Gold background
        color: '#333', // Dark text
        fontWeight: 'bold',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
      },
      iconTheme: {
        primary: '#FF4500', // Orange icon
        secondary: '#fff',
      },
      duration: 3000,
      position: 'bottom-right',
    });

  bookings.push(lawyer);
  localStorage.setItem('bookings', JSON.stringify(bookings));

  toast('Appointment successfully Added to your calendar', {
    duration: 4000,
    position: 'bottom-right',
    style: {
      background: '#4CAF50', // Green background
      color: '#fff', // White text
      fontWeight: 'bold',
      padding: '16px',
      borderRadius: '8px',
      border: '2px solid #388E3C', // Darker green border
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
    icon: '🎉', // Celebration icon
    iconTheme: {
      primary: '#FFEB3B', // Yellow icon
      secondary: '#333',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    removeDelay: 1000,
  });
};

export const removeBookings = id => {
  let bookings = getBookingsData();
  const remaining = bookings.filter(b => b.id !== id);
  localStorage.setItem('bookings', JSON.stringify(remaining));

  toast.success('Appointment canceled', {
    duration: 3000,
    position: 'bottom-right',
    style: {
      background: '#F44336', // Red background
      color: '#fff', // White text
      fontWeight: 'bold',
      padding: '16px',
      borderRadius: '8px',
      border: '2px solid #D32F2F', // Darker red border
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    },
    icon: '❌', // Cross icon
    iconTheme: {
      primary: '#FFCDD2', // Light red icon
      secondary: '#333',
    },
    ariaProps: {
      role: 'status',
      'aria-live': 'polite',
    },
    removeDelay: 1000,
  });
};
