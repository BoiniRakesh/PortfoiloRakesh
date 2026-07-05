import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 500);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 50,
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #4338ca, #6366f1)',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 20px -4px rgba(99,102,241,0.5)',
          }}
        >
          <FaArrowUp size={15} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ('ontouchstart' in window) return;

    let x = 0, y = 0;
    let fx = 0, fy = 0;
    let animId: number;

    const move = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = `${x - 6}px`;
        cursorRef.current.style.top = `${y - 6}px`;
      }
    };

    const animate = () => {
      fx += (x - fx) * 0.12;
      fy += (y - fy) * 0.12;
      if (followerRef.current) {
        followerRef.current.style.left = `${fx - 16}px`;
        followerRef.current.style.top = `${fy - 16}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', move);
    animate();

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}

export function LoadingScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 1800);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: 'var(--bg-primary)' }}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-2xl mb-6"
        style={{ background: 'linear-gradient(135deg, var(--brand-dark), var(--brand-light))' }}
      >
        BR
      </motion.div>
      <motion.div
        className="w-48 h-0.5 rounded-full overflow-hidden"
        style={{ background: 'var(--border)' }}
      >
        <motion.div
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, var(--brand-dark), var(--brand-light))' }}
        />
      </motion.div>
      <p className="mt-4 text-xs font-mono" style={{ color: 'var(--text-tertiary)' }}>
        Loading portfolio...
      </p>
    </motion.div>
  );
}
