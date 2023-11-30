import React, { useState, useEffect } from 'react';
import { getClient } from '~/lib/sanity.client';
import { getAboutImages } from '~/lib/sanity.queries';
import { ChevronLeft, ChevronRight } from "react-feather"

const ImageSlider: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [curr, setCurr] = useState(0);

  const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === images.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    const fetchImages = async () => {
      const client = getClient();
      try {
        const aboutImages = await getAboutImages(client);
        setImages(aboutImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className='overflow-hidden relative max-h-[40rem]'>
      <div className='flex transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider Image ${index + 1}`}
            className="h-full w-full object-cover"
          />
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronLeft />
        </button>
        <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
          <ChevronRight />
        </button>
      </div>
      <div className='absolute bottom-4 right-0 left-0'>
        <div className='flex items-center justify-center gap-2'>
          {images.map((s, i) => (
            <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
