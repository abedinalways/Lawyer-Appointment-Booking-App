import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';
import { getBookingsData, removeBookings } from '../../Utilities';
import BookingsShowcase from '../../Components/BookingsShowcase/BookingsShowcase';
import EmptyState from '../../Components/EmptyState/EmptyState';
const COLORS = ['#0088FE', '#FFBB28', '#00C49F', '#FF8042', '#FF6384', '#36A2EB'];
const getPath = (x, y, width, height) =>
  `M${x},${y + height}
   C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${
    x + width / 2
  }, ${y}
   C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
    x + width
  }, ${y + height}
   Z`;

const TriangleBar = props => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const getIntroOfLawyer = label => {
  
  if (label === 'Alexander Hartwell') return 'Specialist in criminal defense.';
  
  return 'Highly experienced lawyer.';
};

const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border rounded shadow-md text-sm">
        <p className="font-semibold">{label}</p>
        <p>Fee: ${payload[0].value}</p>
        <p>{getIntroOfLawyer(label)}</p>
      </div>
    );
  }
  return null;
};

const MyBookings = () => {
  const [displayLawyers, setDisplayLawyers] = useState([]);

  useEffect(() => {
    const savedBookings = getBookingsData();
    setDisplayLawyers(savedBookings);
  }, []);

  const handleRemove = id => {
    removeBookings(id);
    const bookings = getBookingsData();
    setDisplayLawyers(bookings);
  };
  if (displayLawyers.length < 1) {
    return <EmptyState/>
  }
  const chartData = displayLawyers.map((lawyer,index) => ({
    name: lawyer.name,
    fee: lawyer.Fee,
    color: COLORS[index % COLORS.length],
  }));

  

  return (
    <div>
      {/* Chart Section */}
      <div className="bg-white shadow-md rounded m-2">
        <h2 className="text-xl font-bold mb-4">Lawyers' Appointment</h2>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip content={<CustomTooltip />} />
            <Bar
              dataKey="fee"
              fill="#8884d8"
              shape={props => (
                <TriangleBar {...props} fill={props.payload.color} />
              )}
              isAnimationActive={true}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Cards Section */}
      <div className='flex flex-col justify-center items-center mt-10 font-[lato]'>
        <h1 className='text-2xl font-bold'>Today's Appointment</h1>
        <p className='text-md text-center'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
      </div>
      <div className="grid justify-center md:grid-cols-2 gap-3 m-6 p-4 mx-4">
        {displayLawyers.map(lawyer => (
          <BookingsShowcase
            key={lawyer.id}
            lawyer={lawyer}
            handleRemove={handleRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
