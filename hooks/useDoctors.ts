import { useState, useEffect } from "react";
import { Doctor } from "../types/Doctor";

// This is a mock function. Replace it with actual API call in production.
const fetchDoctors = async (): Promise<Doctor[]> => {
  // Simulating API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "1",
      name: "Dr. Avishka Senaretha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Avishka Senaretha is a highly skilled clinical psychologist with over 10 years of experience.",
      phone: "+94 712345678",
      email: "avishka.senaretha@hemas.lk",
      availability: ["Monday", "Wednesday", "Friday"],
    },
    {
      id: "2",
      name: "Dr. Thusala Piyarisi",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Thusala Piyarisi specializes in cognitive behavioral therapy with a focus on anxiety disorders.",
      phone: "+94 712345679",
      email: "thusala.piyarisi@hemas.lk",
      availability: ["Tuesday", "Thursday"],
    },
    {
      id: "3",
      name: "Dr. Rivin Senaretha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Rivin Senaretha has expertise in treating depression and providing family counseling.",
      phone: "+94 712345680",
      email: "rivin.senaretha@hemas.lk",
      availability: ["Monday", "Thursday", "Saturday"],
    },
    {
      id: "4",
      name: "Dr. Sachila Deepitha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Sachila Deepitha is known for her work with trauma patients and PTSD.",
      phone: "+94 712345681",
      email: "sachila.deepitha@hemas.lk",
      availability: ["Wednesday", "Friday"],
    },
    {
      id: "5",
      name: "Dr. Avishka Senaretha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Avishka Senaretha is an experienced psychologist who focuses on cognitive therapy.",
      phone: "+94 712345678",
      email: "avishka.senaretha@hemas.lk",
      availability: ["Monday", "Wednesday", "Friday"],
    },
    {
      id: "6",
      name: "Dr. Nimal Senaretha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Nimal Senaretha has a focus on mindfulness therapy and holistic mental health practices.",
      phone: "+94 712345682",
      email: "nimal.senaretha@hemas.lk",
      availability: ["Tuesday", "Thursday", "Saturday"],
    },
    {
      id: "7",
      name: "Dr. Kamal Senaretha",
      specialty: "Clinical Psychologist | Hemas",
      rating: 4.9,
      reviews: 1000,
      image: require("../assets/images/doctor-placeholder.png"),
      about:
        "Dr. Kamal Senaretha specializes in stress management and offers workshops for corporate clients.",
      phone: "+94 712345683",
      email: "kamal.senaretha@hemas.lk",
      availability: ["Monday", "Wednesday", "Friday"],
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
