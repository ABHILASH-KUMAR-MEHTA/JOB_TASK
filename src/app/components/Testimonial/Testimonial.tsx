'use client';

import { useState } from 'react';

interface AccordionItem {
  id: number;
  title: string;
  desc: string;
}

const accordionData: AccordionItem[] = [
  {
    id: 1,
    title: 'How can I contact Inkyy Team?',
    desc: 'You can reach us through our contact form on our website or by emailing us at hello@inkyy.com. We typically respond within 24 hours.',
  },
  {
    id: 2,
    title: 'What services do you offer?',
    desc: 'We offer web design, development, maintenance, and digital marketing services to help your business grow online.',
  },
  {
    id: 3,
    title: 'Do you provide website maintenance services?',
    desc: 'Yes, we provide regular maintenance, updates, and security monitoring to keep your website running smoothly.',
  },
  {
    id: 4,
    title: 'How long does it take to design and develop a website?',
    desc: 'The time depends on project complexity, but typically 2-6 weeks for standard websites.',
  },
  {
    id: 5,
    title: 'Do you require a deposit for projects?',
    desc: 'Yes, a 50% deposit is required before starting the project, with the remainder due upon completion.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(1);

  return (
    <section className='w-full py-16 relative'>
      <div className='absolute inset-0 bg-blue-500 opacity-20'></div>

      <div className='container mx-auto relative'>
        <div className='flex flex-col lg:flex-row items-stretch relative z-10'>
          {/* Left Side Image with full height */}
          <div
            className='lg:w-1/2 w-full flex items-center justify-center relative '
            style={{
              backgroundImage: "url('/bg.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center left',
              paddingLeft: '-20px',
            }}
          >
            <h2 className='text-4xl md:text-5xl font-bold text-black lg:pl-16'>
              Frequently <br /> Asked <br /> Questions
            </h2>
          </div>

          {/* Right Side FAQ */}
          <div className='lg:w-1/2 w-full px-10'>
            <div className='space-y-4'>
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className='bg-white rounded-xl shadow hover:shadow-lg transition'
                >
                  <button
                    className={`w-full text-left px-6 py-4 font-medium text-gray-800 flex justify-between items-center rounded-xl focus:outline-none ${
                      activeIndex === item.id ? 'bg-gray-100' : 'bg-white'
                    }`}
                    onClick={() =>
                      setActiveIndex(activeIndex === item.id ? null : item.id)
                    }
                  >
                    {item.title}
                    <span className='text-2xl'>
                      {activeIndex === item.id ? '-' : '+'}
                    </span>
                  </button>
                  {activeIndex === item.id && (
                    <div className='px-6 py-4 text-gray-600 border-t border-gray-200'>
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
