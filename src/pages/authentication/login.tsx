import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
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
      <Card className="z-10 w-1/3 mx-auto my-auto px-8 py-14 flex-wrap flex-col rounded-3xl shadow-lg">
        <CardHeader className="text-center mb-4">
          <img
            className="h-16 -mt-8 mx-auto"
            src="/src/assets/logo-lintashomebyljn.png"
            alt=""
          />
          <CardTitle className="text-dark text-2xl font-semibold">
            Welcome back
          </CardTitle>
          <CardDescription className="text-dark">
            Please insert your email and password
            <span className="block">to enter this website.</span>
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 text-dark">
          <Label>Email</Label>
          <Input
            type="email"
            placeholder="johndoe@mail.com"
            className="rounded-xl"
          />
          <Label>Password</Label>
          <Input type="password" placeholder="******" className="rounded-xl" />
          <p className="font-semibold text-sm text-end">Forgot Password?</p>
          <Button className="bg-yellow-300 text-dark rounded-xl font-semibold hover:bg-yellow-200 transition duration-300 ease-in-out">
            Login
          </Button>
          <p className="text-sm text-center">
            Don't have an account?
            <span className="font-semibold"> Register</span>
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
