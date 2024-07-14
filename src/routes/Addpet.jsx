import { API_BASE_URL } from "../../constants";
import Form from "../components/Form";

export default function AddPet() {
  const onFormSubmit = async (data) => {
    const res = await fetch(`${API_BASE_URL}/pets`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // Corrected
    });
    if (res.ok) {
      const responseJson = await res.json();
      alert("Pet added successfully!"); // Display a success message
      console.log(responseJson); // Log the response JSON
    } else {
      alert("Failed to add pet."); // Handle error case
    }
  };

  return (
    <div className="container mx-auto mt-8 max-w-screen-lg">
      <h2 className="text-2xl font-bold mb-4">Add new Pet</h2>
      <Form onSubmit={onFormSubmit} />
    </div>
  );
}
