import { Quiz } from "../Models/Quiz.model";
import { topics } from "./Topics";

export const quizes: Quiz[] = [
  { quiz_id: 1, topic_id: 201, course_id: 101, quiz_title: 'Newtonian Mechanics' },
  { quiz_id: 2, topic_id: 201, course_id: 101, quiz_title: 'Kinematics ' },
  { quiz_id: 3, topic_id: 201, course_id: 101, quiz_title: 'Dynamics ' },
  { quiz_id: 4, topic_id: 201, course_id: 101, quiz_title: 'Statics ' },
  { quiz_id: 5, topic_id: 201, course_id: 101, quiz_title: 'Fluid Mechanics ' },

  { quiz_id: 6, topic_id: 202, course_id: 101, quiz_title: ' Laws of Thermodynamics' },
  { quiz_id: 7, topic_id: 202, course_id: 101, quiz_title: ' Heat Transfer' },
  { quiz_id: 8, topic_id: 202, course_id: 101, quiz_title: ' Thermodynamic Processes' },
  { quiz_id: 9, topic_id: 202, course_id: 101, quiz_title: ' Entropy and Enthalpy' },
  { quiz_id: 10, topic_id: 202, course_id: 101, quiz_title: ' Applications of Thermodynamics' },

  { quiz_id: 11, topic_id: 203, course_id: 101, quiz_title: ' Electric Fields and Forces' },
  { quiz_id: 12, topic_id: 203, course_id: 101, quiz_title: ' Magnetic Fields and Forces' },
  { quiz_id: 13, topic_id: 203, course_id: 101, quiz_title: ' Electromagnetic Induction' },
  { quiz_id: 14, topic_id: 203, course_id: 101, quiz_title: ' Maxwell\'s Equations' },
  { quiz_id: 15, topic_id: 203, course_id: 101, quiz_title: ' Applications and Phenomena' },

  { quiz_id: 16, topic_id: 204, course_id: 101, quiz_title: 'Geometric Optics' },
  { quiz_id: 17, topic_id: 204, course_id: 101, quiz_title: 'Wave Optics' },
  { quiz_id: 18, topic_id: 204, course_id: 101, quiz_title: 'Interference and Diffraction' },
  { quiz_id: 19, topic_id: 204, course_id: 101, quiz_title: 'Polarization' },
  { quiz_id: 20, topic_id: 204, course_id: 101, quiz_title: 'Optical Instruments' },
  
  { quiz_id: 21, topic_id: 205, course_id: 101, quiz_title: 'Wave-Particle Duality' },
  { quiz_id: 22, topic_id: 205, course_id: 101, quiz_title: 'Schrödinger Equation' },
  { quiz_id: 23, topic_id: 205, course_id: 101, quiz_title: 'Quantum States and Operators' },
  { quiz_id: 24, topic_id: 205, course_id: 101, quiz_title: 'Quantum Mechanics Postulates' },
  { quiz_id: 25, topic_id: 205, course_id: 101, quiz_title: 'Applications in Modern Physics' },



  { quiz_id: 26, topic_id: 206, course_id: 102, quiz_title: 'Periodic Table and Elements' },
  { quiz_id: 27, topic_id: 206, course_id: 102, quiz_title: 'Chemical Bonding' },
  { quiz_id: 28, topic_id: 206, course_id: 102, quiz_title: 'Coordination Compounds' },
  { quiz_id: 29, topic_id: 206, course_id: 102, quiz_title: 'Transition Metals' },
  { quiz_id: 30, topic_id: 206, course_id: 102, quiz_title: 'Main Group Elements' },
  { quiz_id: 31, topic_id: 207, course_id: 102, quiz_title: 'Hydrocarbons' },
  { quiz_id: 32, topic_id: 207, course_id: 102, quiz_title: 'Functional Groups' },
  { quiz_id: 33, topic_id: 207, course_id: 102, quiz_title: 'Stereochemistry' },
  { quiz_id: 34, topic_id: 207, course_id: 102, quiz_title: 'Organic Reactions' },
  { quiz_id: 35, topic_id: 207, course_id: 102, quiz_title: 'Polymers and Biomolecules' },
  { quiz_id: 36, topic_id: 208, course_id: 102, quiz_title: 'Thermodynamics' },
  { quiz_id: 37, topic_id: 208, course_id: 102, quiz_title: 'Chemical Kinetics' },
  { quiz_id: 38, topic_id: 208, course_id: 102, quiz_title: 'Quantum Mechanics' },
  { quiz_id: 39, topic_id: 208, course_id: 102, quiz_title: 'Electrochemistry' },
  { quiz_id: 40, topic_id: 208, course_id: 102, quiz_title: 'Molecular Spectroscopy' },
  { quiz_id: 41, topic_id: 209, course_id: 102, quiz_title: 'Biomolecules' },
  { quiz_id: 42, topic_id: 209, course_id: 102, quiz_title: 'Enzymes and Metabolism' },
  { quiz_id: 43, topic_id: 209, course_id: 102, quiz_title: 'Nucleic Acids and Genetic Information' },
  { quiz_id: 44, topic_id: 209, course_id: 102, quiz_title: 'Cell Structure and Function' },
  { quiz_id: 45, topic_id: 209, course_id: 102, quiz_title: 'Hormones and Signaling Molecules' },
  { quiz_id: 46, topic_id: 210, course_id: 102, quiz_title: 'Basics of Analytical Chemistry' },
  { quiz_id: 47, topic_id: 210, course_id: 102, quiz_title: 'Spectroscopy Techniques' },
  { quiz_id: 48, topic_id: 210, course_id: 102, quiz_title: 'Chromatography Methods' },
  { quiz_id: 49, topic_id: 210, course_id: 102, quiz_title: 'Electroanalytical Techniques' },
  { quiz_id: 50, topic_id: 210, course_id: 102, quiz_title: 'Mass Spectrometry' },



  { quiz_id: 51, topic_id: 211, course_id: 103, quiz_title: 'Basic Algebraic Operations' },
  { quiz_id: 52, topic_id: 211, course_id: 103, quiz_title: 'Equations and Inequalities' },
  { quiz_id: 53, topic_id: 211, course_id: 103, quiz_title: 'Polynomials and Factoring' },
  { quiz_id: 54, topic_id: 211, course_id: 103, quiz_title: 'Functions and Graphs' },
  { quiz_id: 55, topic_id: 211, course_id: 103, quiz_title: 'Exponents and Logarithms' },
  { quiz_id: 56, topic_id: 212, course_id: 103, quiz_title: 'Limits and Continuity' },
  { quiz_id: 57, topic_id: 212, course_id: 103, quiz_title: 'Derivatives' },
  { quiz_id: 58, topic_id: 212, course_id: 103, quiz_title: 'Integrals' },
  { quiz_id: 59, topic_id: 212, course_id: 103, quiz_title: 'Applications of Derivatives' },
  { quiz_id: 60, topic_id: 212, course_id: 103, quiz_title: 'Applications of Integrals' },
  { quiz_id: 61, topic_id: 213, course_id: 103, quiz_title: 'Euclidean Geometry' },
  { quiz_id: 62, topic_id: 213, course_id: 103, quiz_title: 'Transformations and Symmetry' },
  { quiz_id: 63, topic_id: 213, course_id: 103, quiz_title: 'Trigonometry' },
  { quiz_id: 64, topic_id: 213, course_id: 103, quiz_title: 'Geometric Proofs' },
  { quiz_id: 65, topic_id: 213, course_id: 103, quiz_title: 'Three-Dimensional Geometry' },
  { quiz_id: 66, topic_id: 214, course_id: 103, quiz_title: 'Descriptive Statistics' },
  { quiz_id: 67, topic_id: 214, course_id: 103, quiz_title: 'Probability Distributions' },
  { quiz_id: 68, topic_id: 214, course_id: 103, quiz_title: 'Statistical Inference' },
  { quiz_id: 69, topic_id: 214, course_id: 103, quiz_title: 'Regression Analysis' },
  { quiz_id: 70, topic_id: 214, course_id: 103, quiz_title: 'Hypothesis Testing' },
  { quiz_id: 71, topic_id: 215, course_id: 103, quiz_title: 'Prime Numbers' },
  { quiz_id: 72, topic_id: 215, course_id: 103, quiz_title: 'Divisibility and Modular Arithmetic' },
  { quiz_id: 73, topic_id: 215, course_id: 103, quiz_title: 'Diophantine Equations' },
  { quiz_id: 74, topic_id: 215, course_id: 103, quiz_title: 'Congruences and Residues' },
  { quiz_id: 75, topic_id: 215, course_id: 103, quiz_title: 'Cryptography' },



  { quiz_id: 76, topic_id: 216, course_id: 104, quiz_title: 'Cell Structure and Function' },
  { quiz_id: 77, topic_id: 216, course_id: 104, quiz_title: 'Cellular Processes' },
  { quiz_id: 78, topic_id: 216, course_id: 104, quiz_title: 'Cell Cycle and Division' },
  { quiz_id: 79, topic_id: 216, course_id: 104, quiz_title: 'Cell Signaling' },
  { quiz_id: 80, topic_id: 216, course_id: 104, quiz_title: 'Cellular Respiration and Photosynthesis' },
  { quiz_id: 81, topic_id: 217, course_id: 104, quiz_title: 'Mendelian Inheritance' },
  { quiz_id: 82, topic_id: 217, course_id: 104, quiz_title: 'Chromosomal Aberrations' },
  { quiz_id: 83, topic_id: 217, course_id: 104, quiz_title: 'DNA Replication and Repair' },
  { quiz_id: 84, topic_id: 217, course_id: 104, quiz_title: 'Gene Expression and Regulation' },
  { quiz_id: 85, topic_id: 217, course_id: 104, quiz_title: 'Biotechnology and Genetic Engineering' },
  { quiz_id: 86, topic_id: 218, course_id: 104, quiz_title: 'Ecosystems and Biotic Interactions' },
  { quiz_id: 87, topic_id: 218, course_id: 104, quiz_title: 'Population Ecology' },
  { quiz_id: 88, topic_id: 218, course_id: 104, quiz_title: 'Community Ecology' },
  { quiz_id: 89, topic_id: 218, course_id: 104, quiz_title: 'Ecosystem Dynamics' },
  { quiz_id: 90, topic_id: 218, course_id: 104, quiz_title: 'Conservation Biology' },
  
  { quiz_id: 91, topic_id: 219, course_id: 104, quiz_title: 'Human Skeletal System' },
  { quiz_id: 92, topic_id: 219, course_id: 104, quiz_title: 'Muscular System' },
  { quiz_id: 93, topic_id: 219, course_id: 104, quiz_title: 'Circulatory System' },
  { quiz_id: 94, topic_id: 219, course_id: 104, quiz_title: 'Nervous System' },
  { quiz_id: 95, topic_id: 219, course_id: 104, quiz_title: 'Respiratory and Digestive Systems' },
  { quiz_id: 96, topic_id: 220, course_id: 104, quiz_title: 'Darwinian Evolution' },
  { quiz_id: 97, topic_id: 220, course_id: 104, quiz_title: 'Evidence for Evolution' },
  { quiz_id: 98, topic_id: 220, course_id: 104, quiz_title: 'Mechanisms of Evolution' },
  { quiz_id: 99, topic_id: 220, course_id: 104, quiz_title: 'Human Evolution' },
  { quiz_id: 100, topic_id: 220, course_id: 104, quiz_title: 'Evolutionary Ecology' },


  
  { quiz_id: 101, topic_id: 221, course_id: 105, quiz_title: 'Literary Elements and Techniques' },
  { quiz_id: 102, topic_id: 221, course_id: 105, quiz_title: 'Plot and Character Analysis' },
  { quiz_id: 103, topic_id: 221, course_id: 105, quiz_title: 'Themes and Motifs' },
  { quiz_id: 104, topic_id: 221, course_id: 105, quiz_title: 'Literary Movements' },
  { quiz_id: 105, topic_id: 221, course_id: 105, quiz_title: 'Critical Approaches' },
  { quiz_id: 106, topic_id: 222, course_id: 105, quiz_title: 'Parts of Speech' },
  { quiz_id: 107, topic_id: 222, course_id: 105, quiz_title: 'Sentence Structure' },
  { quiz_id: 108, topic_id: 222, course_id: 105, quiz_title: 'Punctuation and Mechanics' },
  { quiz_id: 109, topic_id: 222, course_id: 105, quiz_title: 'Verb Tenses and Agreement' },
  { quiz_id: 110, topic_id: 222, course_id: 105, quiz_title: 'Common Grammar Mistakes' },
  { quiz_id: 111, topic_id: 223, course_id: 105, quiz_title: 'Writing Techniques and Styles' },
  { quiz_id: 112, topic_id: 223, course_id: 105, quiz_title: 'Character Development' },
  { quiz_id: 113, topic_id: 223, course_id: 105, quiz_title: 'Plot and Conflict' },
  { quiz_id: 114, topic_id: 223, course_id: 105, quiz_title: 'Setting and Atmosphere' },
  { quiz_id: 115, topic_id: 223, course_id: 105, quiz_title: 'Editing and Revision' },
  { quiz_id: 116, topic_id: 224, course_id: 105, quiz_title: 'Poetic Forms and Structures' },
  { quiz_id: 117, topic_id: 224, course_id: 105, quiz_title: 'Figurative Language' },
  { quiz_id: 118, topic_id: 224, course_id: 105, quiz_title: 'Poetic Devices and Techniques' },
  { quiz_id: 119, topic_id: 224, course_id: 105, quiz_title: 'Famous Poets and Movements' },
  { quiz_id: 120, topic_id: 224, course_id: 105, quiz_title: 'Analyzing Poetry' },
  { quiz_id: 121, topic_id: 225, course_id: 105, quiz_title: 'Language Diversity' },
  { quiz_id: 122, topic_id: 225, course_id: 105, quiz_title: 'Sociolinguistics' },
  { quiz_id: 123, topic_id: 225, course_id: 105, quiz_title: 'Language Acquisition' },
  { quiz_id: 124, topic_id: 225, course_id: 105, quiz_title: 'Cultural Influence on Language' },
  { quiz_id: 125, topic_id: 225, course_id: 105, quiz_title: 'Bilingualism and Multilingualism' },







]







