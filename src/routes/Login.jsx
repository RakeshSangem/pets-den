import { useForm } from "react-hook-form";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, user } = useAuth();

  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/pets");
  });

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate("/pets");
    } catch (error) {
      console.error("Failed to login", error);
    }
  };

  return (
    <section className="min-h-screen grid place-items-center">
      <Card color="transparent" className="mx-auto" shadow={false}>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Welcome back!
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>

            <Input
              defaultValue={""}
              {...register("email")}
              size="lg"
              variant="outlined"
              placeholder="name@mail.com"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              {...register("password")}
              type="password"
              size="lg"
              placeholder="********"
              className=" "
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Login
          </Button>
        </form>
      </Card>
    </section>
  );
}
