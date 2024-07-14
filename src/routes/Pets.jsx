import { Button, Card, Spinner, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { API_BASE_URL } from "../../constants";
import axios from "axios";
import Edit from "../components/icon/Edit.icon";
import BinIcon from "../components/icon/Bin.icon";

const TABLE_HEAD = [
  "Pet Name",
  "Owner Email",
  "Owner Phone",
  "Date of Birth",
  "Gender",
  "Adoption Status",
  "",
];

export default function Pets() {
  const queryClient = useQueryClient();
  const {
    isLoading,
    error,
    data: pets,
  } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axios.get(`${API_BASE_URL}/pets`);
      return res;
    },
  });

  const mutation = useMutation({
    mutationFn: async (id) => {
      const res = await axios.delete(`${API_BASE_URL}/pets/${id}`);
      console.log(res);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pets"] });
    },
  });

  if (error) return <p>{JSON.stringify(error)}</p>;

  return (
    <section className="py-10 px-4 max-w-screen-lg mx-auto">
      <div className="flex items-center justify-between py-5">
        <h2 className="text-2xl font-semibold">Pets</h2>
        <Link to="/add-pet">
          <Button>Add pet</Button>
        </Link>
      </div>
      {isLoading ? (
        <div className="flex  justify-center py-10">
          <Spinner />
        </div>
      ) : (
        <Card className="h-full w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {pets?.data.map((pet, index) => {
                const isLast = index === pets.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={pet._id}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.petName}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.ownerEmail}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.ownerPhone}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.dob}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.gender}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pet.adoptionStatus}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex gap-x-2">
                        <Link to={`/edit-pet?id=${pet._id}`}>
                          <Button>
                            <Edit />
                          </Button>
                        </Link>

                        <Button
                          color="red"
                          onClick={() => mutation.mutate(pet._id)}
                        >
                          <BinIcon />
                        </Button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      )}
    </section>
  );
}
