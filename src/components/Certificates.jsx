import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Award } from 'lucide-react';
import './Certificates.css';

// Import certificate images
import CombinatronicsAndProbability from '../assets/Combinatronics.png';
import DataStructuresImage from '../assets/DataStructures.png';
import FundamentalsImage from '../assets/Fundamentals.png';
import GreedyAlgorithmsImage from '../assets/GreedyAlgorithms.png';
import IntroToCompSci from '../assets/IntroToCompSci.png';
import GoogleCybersecurity from '../assets/GoogleCybersecurity.png';



const Certificates = () => {
  const certificates = [
    {
      title: "Combinatorics and Probability",
      issuer: "University of California San Diego",
      date: "March 9, 2025",
      url: "https://coursera.org/share/3ca122a712aae9b415f55dc80f8ab348",
      image: CombinatronicsAndProbability
    },
    {
      title: "Data Structures",
      issuer: "University of California San Diego",
      date: "August 1, 2024",
      url: "https://coursera.org/share/87ab9ea837cbc98268980ec6c8f3cfc3",
      image: DataStructuresImage
    },
    {
      title: "Fundamentals of UI/UX Design",
      issuer: "Microsoft",
      date: "July 26, 2025",
      url: "https://coursera.org/share/2b2d7b5e754c12d46c5d3fd317cbbc1b",
      image: FundamentalsImage
    },
    {
      title: "Greedy Algorithms, Minimum Spanning Trees, and Dynamic Programming",
      issuer: "Stanford University",
      date: "March 11, 2025",
      url: "https://coursera.org/share/d5e7d557b0474305c89b6701a90b170c",
      image: GreedyAlgorithmsImage
    },
    {
      title: "Introduction to Computer Science and Programming Specialization",
      issuer: "University of London",
      date: "October 30, 2023",
      url: "https://coursera.org/share/8a7d7dadb0285cdfcff7ab41a83059e3",
      image: IntroToCompSci
    },
    {
      title: "Google Cybersecurity Specialization",
      issuer: "Google",
      date: "March 16, 2026",
      url: "https://coursera.org/share/f34ab64e6bb957ff71a9d651b2f99686",
      image: GoogleCybersecurity
    }
  ];

  return (
    <div className="certificates">
      <h3>Certificates</h3>
      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <motion.div
            key={index}
            className="certificate-item"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <div className="certificate-image">
              <img 
                src={cert.image} 
                alt={cert.title}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="certificate-placeholder">
                <Award size={40} />
              </div>
            </div>
            <div className="certificate-content">
              <h4>{cert.title}</h4>
              <p className="certificate-issuer">{cert.issuer}</p>
              <p className="certificate-date">{cert.date}</p>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                View Certificate
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates; 