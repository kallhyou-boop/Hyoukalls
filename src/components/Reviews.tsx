import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { name: 'Andi', text: 'Fast response and trusted seller.', rating: 5 },
  { name: 'Rizky', text: 'Product delivered instantly, recommended.', rating: 5 },
  { name: 'Fajar', text: "Best digital store I've used.", rating: 5 },
  { name: 'Siti', text: 'Harganya murah tapi kualitas bukan murahan.', rating: 5 },
  { name: 'Budi', text: 'VPS kencang, support ramah banget.', rating: 5 },
  { name: 'Dewi', text: 'Langganan Netflix di sini aman terus, no on hold.', rating: 5 },
  { name: 'Eko', text: 'Proses cepat, admin fast respon.', rating: 5 },
  { name: 'Gita', text: 'ChatGPT Plus nya lancar jaya, mantap!', rating: 5 },
  { name: 'Hadi', text: 'Trusted seller, jangan ragu beli di sini.', rating: 5 },
  { name: 'Indra', text: 'VCC nya work 100% buat bayar tagihan luar.', rating: 5 },
  { name: 'Joko', text: 'Akun Spotify nya awet sampai sebulan penuh.', rating: 5 },
  { name: 'Kartika', text: 'RDP nya anti lag, cocok buat kerja.', rating: 5 },
  { name: 'Lina', text: 'Sangat membantu buat kebutuhan digital kantor.', rating: 5 },
  { name: 'Maman', text: 'Adminnya sabar jelasin satu-satu.', rating: 5 },
  { name: 'Nina', text: 'Viu Premium nya murah banget di sini.', rating: 5 },
  { name: 'Oky', text: 'AWS account langsung aktif, jos!', rating: 5 },
  { name: 'Putri', text: 'Langganan terus di sini, terpercaya.', rating: 5 },
  { name: 'Qori', text: 'Respon cepat meski malam hari.', rating: 5 },
];

const ReviewCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => (
  <div className="px-3">
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="w-[280px] bg-slate-900/80 border border-white/5 p-6 rounded-3xl relative group hover:border-blue-500/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300 backdrop-blur-sm"
    >
      <Quote className="absolute top-4 right-6 text-blue-500/5 group-hover:text-blue-500/10 transition-colors" size={32} />
      
      <div className="flex space-x-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="text-amber-500 fill-amber-500" size={12} />
        ))}
      </div>

      <p className="text-slate-300 text-sm mb-5 whitespace-normal leading-relaxed italic line-clamp-2">
        "{review.text}"
      </p>

      <div className="flex items-center">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-xs">
          {review.name.charAt(0)}
        </div>
        <div className="ml-3">
          <h4 className="text-white font-bold text-xs">{review.name}</h4>
          <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">Verified Buyer</p>
        </div>
      </div>
    </motion.div>
  </div>
);

const ReviewRow: React.FC<{ items: typeof reviews, direction?: 'left' | 'right', speed?: number }> = ({ items, direction = 'left', speed = 40 }) => {
  const duplicatedItems = [...items, ...items, ...items]; // Triple to ensure no gaps
  
  return (
    <div className="relative flex overflow-hidden py-4">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{
          x: direction === 'left' ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((review, i) => (
          <ReviewCard key={`${review.name}-${i}`} review={review} />
        ))}
      </motion.div>
    </div>
  );
};

const Reviews = () => {
  // Split reviews into three groups
  const row1 = reviews.slice(0, 6);
  const row2 = reviews.slice(6, 12);
  const row3 = reviews.slice(12, 18);

  return (
    <section id="reviews" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-1 rounded-full mb-4"
          >
            <Star className="text-blue-500 fill-blue-500" size={14} />
            <span className="text-blue-500 text-xs font-bold uppercase tracking-widest">Trusted by 100+ customers</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Customer <span className="text-blue-500">Reviews</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Join hundreds of satisfied customers who trust Hyoukall for their digital needs.
          </motion.p>
        </div>
      </div>

      {/* Multi-row Infinite Sliders */}
      <div className="relative z-10 space-y-2">
        <ReviewRow items={row1} direction="left" speed={35} />
        <ReviewRow items={row2} direction="right" speed={45} />
        <ReviewRow items={row3} direction="left" speed={40} />
      </div>

      {/* Fading Edges Overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-950 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-950 to-transparent z-20 pointer-events-none"></div>
    </section>
  );
};

export default Reviews;
