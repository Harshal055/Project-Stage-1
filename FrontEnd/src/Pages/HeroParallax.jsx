import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

export const HeroParallax = ({ products }) => {
  const { scrollY } = useScroll();

  return (
    <div>
      {products.map((product, index) => {
        const y = useTransform(scrollY, [0, 500], [0, -50 * index]);

        return (
          <motion.div key={index} style={{ y }}>
            <Link to={product.link} target="_blank" rel="noopener noreferrer">
              <img
                src={product.thumbnail}
                alt={product.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <h3>{product.title}</h3>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};