import React from "react";
import { FlatList } from "react-native";
import DoctorCard from "./DoctorCard";
import { Doctor } from "@/types/Doctor";

type Props = {
  doctors: Doctor[];
};

export default function DoctorList({ doctors }: Props) {
  return (
    <FlatList
      data={doctors}
      renderItem={({ item }) => <DoctorCard doctor={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
