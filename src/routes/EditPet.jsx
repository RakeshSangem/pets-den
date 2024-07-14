import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Form from "../components/Form";
import axios from "axios";
import { API_BASE_URL } from "../../constants";
import { useSearchParams } from "react-router-dom";

export default function EditPet() {
  const [searchParams] = useSearchParams();
  const petId = searchParams.get("id");

  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: formData,
  } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/pets/${petId}`);
      return res.data;
    },
  });

  const mutation = useMutation({
    mutationFn: async (data) => {
      const res = await axios.put(`${API_BASE_URL}/pets/${petId}`, {
        adoptionStatus: data?.adoptionStatus,
        dob: data?.dob,
        gender: data?.gender,
        ownerEmail: data?.ownerEmail,
        ownerPhone: data?.ownerPhone,
        petName: data?.petName,
      });
      console.log(res);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pet"] });
    },
  });

  const onFormSubmit = async (data) => {
    mutation.mutate(data);
  };

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto mt-8 max-w-screen-lg pb-20">
      <h2 className="text-2xl font-bold mb-4">Edit Pet</h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Form defaultValues={formData} onSubmit={onFormSubmit} />
      )}
    </div>
  );
}
