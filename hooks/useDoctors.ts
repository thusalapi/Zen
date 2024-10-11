import { useState, useEffect } from "react";
import { Doctor } from "../types/Doctor";

// This is a mock function. Replace it with actual API call in production.
const fetchDoctors = async (): Promise<Doctor[]> => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      name: "Dr. Avishka Rodrigo",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Avishka Rodrigo is a highly skilled clinical psychologist with over 10 years of experience in the field. She specializes in helping patients navigate complex mental health challenges, including trauma, depression, and anxiety. Dr. Rodrigo believes in a holistic approach to mental wellness, incorporating mindfulness practices alongside cognitive behavioral therapy. She is passionate about providing compassionate care tailored to each individual's unique needs.",
      phone: "+94 712345678",
      email: "avishka.rodrigo@hemas.lk",
      availability: ["Monday", "Wednesday", "Friday"],
    },
    {
      id: "2",
      name: "Dr. Thusala Priyanka",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Thusala Priyanka has dedicated her career to specializing in cognitive behavioral therapy (CBT), with a particular focus on treating anxiety disorders. With more than a decade of clinical experience, she helps individuals overcome obstacles such as social anxiety, generalized anxiety disorder, and panic attacks. Dr. Priyanka is known for her calm demeanor and evidence-based therapeutic methods, ensuring her patients feel supported every step of the way.",
      phone: "+94 712345679",
      email: "thusala.priyanka@hemas.lk",
      availability: ["Tuesday", "Thursday"],
    },
    {
      id: "3",
      name: "Dr. Rivin Fernando",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Rivin Fernando is a renowned clinical psychologist with extensive experience in treating depression and offering family counseling services. His compassionate and thorough approach allows him to assist families and individuals through difficult transitions and mental health challenges. He places a strong emphasis on creating a safe, supportive space for patients to explore their thoughts and feelings, helping them to gain clarity and improve their emotional well-being.",
      phone: "+94 712345680",
      email: "rivin.fernando@hemas.lk",
      availability: ["Monday", "Thursday", "Saturday"],
    },
    {
      id: "4",
      name: "Dr. Sachila De Silva",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Sachila De Silva is highly regarded for her work in trauma recovery and PTSD treatment. She has worked extensively with both individuals and groups affected by trauma, helping them reclaim their lives through structured therapeutic interventions. Dr. De Silva combines innovative techniques such as EMDR (Eye Movement Desensitization and Reprocessing) with traditional talk therapy to provide comprehensive care for her patients.",
      phone: "+94 712345681",
      email: "sachila.desilva@hemas.lk",
      availability: ["Wednesday", "Friday"],
    },
    {
      id: "5",
      name: "Dr. Nimal Rajakaruna",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Nimal Rajakaruna focuses on mindfulness therapy and holistic mental health practices. With over 15 years of experience, Dr. Rajakaruna has helped patients from all walks of life manage stress, anxiety, and emotional imbalance through mindfulness-based cognitive therapy (MBCT) and other holistic approaches. His methods not only aim at symptom relief but also promote long-term emotional resilience and psychological well-being.",
      phone: "+94 712345682",
      email: "nimal.rajakaruna@hemas.lk",
      availability: ["Tuesday", "Thursday", "Saturday"],
    },
    {
      id: "6",
      name: "Dr. Kamal Senanayake",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Kamal Senanayake is a leading expert in stress management and psychological well-being. He offers workshops and counseling sessions to help individuals and corporate clients cope with work-related stress, improve mental resilience, and enhance their overall productivity. With a blend of clinical knowledge and practical techniques, Dr. Senanayake’s sessions provide effective tools for managing both everyday stress and chronic anxiety.",
      phone: "+94 712345683",
      email: "kamal.senanayake@hemas.lk",
      availability: ["Monday", "Wednesday", "Friday"],
    },
    {
      id: "7",
      name: "Dr. Tharindu Wijesekara",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Tharindu Wijesekara has a vast range of expertise in clinical psychology, specializing in family therapy and child development issues. He has spent years developing programs that support family dynamics and children struggling with behavioral or emotional issues. His empathetic approach and dedication to helping young individuals and their families build healthy relationships make him highly sought after in his field.",
      phone: "+94 712345684",
      email: "tharindu.wijesekara@hemas.lk",
      availability: ["Wednesday", "Saturday"],
    },

    // Add more doctors...
  ];
};

export function useDoctors() {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetchDoctors()
      .then((data) => {
        setDoctors(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return { doctors, loading, error };
}
