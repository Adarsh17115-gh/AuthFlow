import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AuthSuccessPage = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate("/auth");
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100" data-id="t6dl1yj2r" data-path="src/pages/AuthSuccessPage.tsx">
      <div className="w-full max-w-md" data-id="njt6skt24" data-path="src/pages/AuthSuccessPage.tsx">
        <div className="text-center mb-8" data-id="n9xje066p" data-path="src/pages/AuthSuccessPage.tsx">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="55ld47upm" data-path="src/pages/AuthSuccessPage.tsx">
            MessageFlow
          </h1>
          <p className="text-slate-600 mt-2" data-id="x3v49jii9" data-path="src/pages/AuthSuccessPage.tsx">
            Email verification successful
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Account Verified!</CardTitle>
            <CardDescription>
              Your email has been successfully verified
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-col items-center gap-4" data-id="3u810dnj9" data-path="src/pages/AuthSuccessPage.tsx">
              <div className="rounded-full bg-green-100 p-3" data-id="xw3wo1ypi" data-path="src/pages/AuthSuccessPage.tsx">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-10 w-10 text-green-600" data-id="5qpmib3hn" data-path="src/pages/AuthSuccessPage.tsx">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" data-id="7wqs70is1" data-path="src/pages/AuthSuccessPage.tsx"></path>
                  <polyline points="22 4 12 14.01 9 11.01" data-id="0vwknjfrr" data-path="src/pages/AuthSuccessPage.tsx"></polyline>
                </svg>
              </div>
              <p className="text-lg font-medium" data-id="36fdhra5m" data-path="src/pages/AuthSuccessPage.tsx">Thank you for verifying your email address</p>
              <p className="text-muted-foreground" data-id="dij0nrsu5" data-path="src/pages/AuthSuccessPage.tsx">
                You will be redirected to the login page in <span className="font-semibold" data-id="tnnhjo06q" data-path="src/pages/AuthSuccessPage.tsx">{countdown}</span> seconds.
              </p>
              <Button
                className="bg-blue-600 hover:bg-blue-700 mt-2"
                onClick={() => navigate("/auth")}>

                Login Now
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default AuthSuccessPage;