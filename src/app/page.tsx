'use client';

import Slider from './ui/Components/Slider';
import Navbar from './ui/navbar/navbar';
import Ventures from './ui/Components/Ventures';
import { Footer } from './ui/Components/Footer';
import Meet_us from './ui/Components/Meet_us';

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Slider></Slider>
      <Ventures></Ventures>
      <Meet_us></Meet_us>
      <Footer></Footer>
    </>

  )
}
