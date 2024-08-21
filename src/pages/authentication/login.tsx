import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginAuth } from "@/utils/apis/user/api";
import { LoginSchema, loginSchema } from "@/utils/apis/user/type";
import { useToken } from "@/utils/contexts/token";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const { changeToken } = useToken();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const result = await loginAuth(data);

      changeToken(result.data.token);

      toast(result.message);
      navigate("/");
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <div className="relative min-h-screen max-w-full h-screen overflow-auto container flex">
      <div className="absolute inset-x-0 bottom-0 z-0">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "#FFC14D", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#FFDB4D", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            d="M0,128L48,122.7C96,117,192,107,288,133.3C384,160,480,224,576,218.7C672,213,768,139,864,122.7C960,107,1056,149,1152,170.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <Card className="z-10 mx-auto my-auto flex-wrap flex-col rounded-3xl shadow-lg py-8 w-11/12 md:w-1/2 md:py-14 md:px-4 xl:w-1/3 xl:px-8">
        <Form {...form}>
          <form action="" onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader className="text-center mb-0 md:mb-4">
              <img
                className="h-10 w-auto md:h-14 md:-mt-8 xl:h-16 mx-auto"
                src="/logo-lintashomebyljn.png"
                alt=""
              />
              <CardTitle className="text-dark text-base md:text-2xl font-semibold">
                Welcome back
              </CardTitle>
              <CardDescription className="text-dark text-xs md:text-sm xl:text-base">
                Please insert your email and password
                <span className="block">to enter this website.</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 text-dark">
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
              >
                {(field) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="johndoe@mail.com"
                    disabled={form.formState.isSubmitting}
                    aria-disabled={form.formState.isSubmitting}
                    value={field.value as string}
                  />
                )}
              </CustomFormField>
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
              >
                {(field) => (
                  <div className="relative">
                    <Input
                      {...field}
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                      className="relative"
                    />
                    <span
                      onClick={toggleShowPassword}
                      className="absolute cursor-pointer px-2 pt-3 top-0 right-0"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5 text-sky-500" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </span>
                  </div>
                )}
              </CustomFormField>
              <Button className="bg-yellow-300 text-dark rounded-xl font-semibold hover:bg-yellow-200 transition duration-300 ease-in-out">
                Login
              </Button>
              <p className="text-xs md:text-sm text-center">
                Don't have an account?
                <span className="font-semibold">
                  <Link to={"/register"}> Register</Link>
                </span>
              </p>
            </CardContent>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
