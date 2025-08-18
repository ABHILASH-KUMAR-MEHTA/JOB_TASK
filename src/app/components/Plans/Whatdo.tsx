'use client';

import {
  FiSun,
  FiStar,
  FiMonitor,
  FiShoppingBag,
  FiUsers,
} from 'react-icons/fi';
import Image from 'next/image';
import image1 from '../../../../public/image1.png';
import image2 from '../../../../public/image2.png';
import image from '../../../../public/image3.png';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Web Design',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: <FiSun className='text-2xl text-purple-500' />,
    },
    {
      id: 2,
      title: 'UI/UX Design',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: <FiStar className='text-2xl text-purple-500' />,
    },
    {
      id: 3,
      title: 'Responsive Design',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: <FiMonitor className='text-2xl text-purple-500' />,
    },
    {
      id: 4,
      title: 'E-commerce Solutions:',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: <FiShoppingBag className='text-2xl text-purple-500' />,
      image: image1,
      layout: 'bottom',
    },
    {
      id: 6,
      title: 'Custom Development',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: <FiUsers className='text-2xl text-purple-500' />,
    },
    {
      id: 5,
      title: 'Webflow',
      desc: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.',
      icon: (
        <Image
          src={image}
          alt='Webflow Icon'
          width={32}
          height={32}
          className='rounded-md object-contain'
        />
      ),
      image: image2,
      layout: 'right',
    },
  ];

  return (
    <section className='w-full bg-gray-50 py-12 sm:py-16 lg:py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Overlay */}
        <div className='absolute inset-0 bg-blue-500 opacity-20'></div>

        {/* Section Title */}
        <div className='relative z-20 text-center sm:text-left mb-10 sm:mb-12'>
          <h2 className='font-bold text-3xl sm:text-4xl lg:text-5xl text-gray-900 leading-tight'>
            What We Do
          </h2>
        </div>

        {/* Features Grid */}
        <div className='relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 auto-rows-fr'>
          {features.map((feature) => {
            // Layout for bottom image (ID 4) → Tall card
            if (feature.layout === 'bottom') {
              return (
                <div
                  key={feature.id}
                  className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col row-span-1 sm:row-span-2 h-full'
                >
                  <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                    {feature.icon}
                  </div>
                  <h5 className='mt-4 font-semibold text-gray-900'>
                    {feature.title}
                  </h5>
                  <p className='mt-2 text-gray-500 text-sm'>{feature.desc}</p>

                  <div className='w-full mt-4'>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className='rounded-lg object-cover w-full h-40 sm:h-48 lg:h-60'
                    />
                  </div>
                </div>
              );
            }

            // Layout for right image (ID 5) → Wide card
            if (feature.layout === 'right') {
              return (
                <div
                  key={feature.id}
                  className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:col-span-2 h-full'
                >
                  {/* Left content */}
                  <div className='flex-1 text-center sm:text-left'>
                    <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mx-auto sm:mx-0'>
                      {feature.icon}
                    </div>
                    <h5 className='mt-4 font-semibold text-gray-900'>
                      {feature.title}
                    </h5>
                    <p className='mt-2 text-gray-500 text-sm'>{feature.desc}</p>
                  </div>

                  {/* Right image */}
                  <div className='flex-shrink-0'>
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      className='rounded-lg object-cover w-32 h-32 sm:w-40 sm:h-40'
                    />
                  </div>
                </div>
              );
            }

            // Default layout
            return (
              <div
                key={feature.id}
                className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex flex-col h-full '
              >
                <div className='w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full'>
                  {feature.icon}
                </div>
                <h5 className='mt-4 font-semibold text-gray-900'>
                  {feature.title}
                </h5>
                <p className='mt-2 text-gray-500 text-sm'>{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
