import axios from "axios";
import { API_BASE_URL } from "../../constants";
import Form from "../components/Form";

export default function AddPet() {
  const onFormSubmit = async (data) => {
    try {
      const res = await axios.post(`${API_BASE_URL}/pets`, data);
      if (res.status === 201) {
        alert("Pet added successfully!");
        console.log(res.data);
      } else {
        alert("Failed to add pet. Please try again.");
      }
    } catch (error) {
      console.error("Error adding pet:", error);
      alert("An error occurred while adding the pet. Please try again.");
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-screen-lg">
      <h2 className="text-2xl font-bold mb-4">Add new Pet</h2>
      <Form onSubmit={onFormSubmit} />
    </div>
  );
}
