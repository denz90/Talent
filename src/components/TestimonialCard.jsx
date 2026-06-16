import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, avatar }) => {
  return (
    <div className="border border-site-accent p-8 rounded-sm bg-site-bg text-left flex flex-col gap-6 h-full shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-site-text/80 font-bold text-sm leading-relaxed italic flex-grow">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        {avatar ? (
          <img src={avatar} alt={author} className="w-10 h-10 rounded-full object-cover grayscale" />
        ) : (
          <div className="w-10 h-10 rounded-full bg-site-primary/60 flex items-center justify-center font-bold text-site-text text-xs border border-site-primary/10">
            {author[0]}
          </div>
        )}
        <div>
          <h4 className="font-bold text-site-text text-[13px] leading-none mb-1.5 uppercase tracking-tight">{author}</h4>
          <span className="text-site-text/80 text-[10px] font-bold uppercase tracking-wider">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
