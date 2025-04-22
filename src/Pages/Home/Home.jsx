import React, { useState } from 'react';
import Banner from '../../Components/Banner/Banner';
import { useLoaderData } from 'react-router';
import Lawyers from '../../Components/Lawyers/Lawyers';
import Services from '../../Components/Services/Services';

const Home = () => {
  const data = useLoaderData();
  const [lawyers, setLawyers] = useState(data);
  console.log(data);
  return (
    <div>
      <Banner></Banner>
      <Lawyers lawyers={lawyers}></Lawyers>
      <Services></Services>
    </div>
  );
};

export default Home;