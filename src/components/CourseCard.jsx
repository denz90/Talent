import React from 'react';
import { ExternalLink, Clock, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const CourseCard = ({ title, description, duration, rating, image }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="bg-[#DBDBDB] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
          <span>{rating}</span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow text-left">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
          {title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
          {description}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <button className="flex items-center gap-1 text-sm font-semibold text-brand-primary hover:text-brand-accent transition-colors group/btn">
            Learn More
            <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
