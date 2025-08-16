import React from 'react';
import { Star } from 'lucide-react';

interface ReviewSummaryProps {
  rating?: number;
  totalReviews?: number;
  image?: string;
}

const ReviewSummary: React.FC<ReviewSummaryProps> = ({
  rating = 5.0,
  totalReviews = 145,
  image = '/image.png', // single combined image
}) => {
  return (
    <div className='relative flex justify-center items-center h-36 '>
      {/* Review Card */}
      <div className='z-10 flex items-center gap-3 bg-white shadow-xl rounded-lg px-6 py-4'>
        {/* Combined Image */}
        <img
          src={image}
          alt='Reviewers'
          className='w-32 h-8 object-cover rounded-full border border-gray-200'
        />

        {/* Rating & Reviews */}
        <div className='absolute inset-0 bg-blue-500 opacity-20'></div>

        <div className='flex flex-col z-10'>
          <span className='text-sm font-medium text-black'>
            {rating.toFixed(1)} Based On{' '}
            <span className='font-semibold'>{totalReviews}</span> Reviews
          </span>
          {/* Stars */}
          <div className='flex text-yellow-500'>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className='w-4 h-4 fill-yellow-500 stroke-yellow-500'
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSummary;
