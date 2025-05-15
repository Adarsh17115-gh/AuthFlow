import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      toast({
        title: "Invalid Reset Link",
        description: "The password reset link is invalid or has expired.",
        variant: "destructive"
      });
      navigate("/auth");
    }
  }, [token, toast, navigate]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "The passwords you entered do not match.",
        variant: "destructive"
      });
      return;
    }

    if (!token) {
      toast({
        title: "Missing Token",
        description: "Password reset token is missing.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await window.ezsite.apis.resetPassword({
        token,
        password
      });

      if (error) throw error;

      toast({
        title: "Password Reset Successful",
        description: "Your password has been reset. Please log in with your new password."
      });

      // Redirect to login page after 3 seconds
      setTimeout(() => {
        navigate("/auth");
      }, 3000);
    } catch (error) {
      console.error("Password reset error:", error);
      toast({
        title: "Reset Failed",
        description: String(error),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100" data-id="chapnxvh1" data-path="src/pages/ResetPasswordPage.tsx">
      <div className="w-full max-w-md" data-id="65954p3f0" data-path="src/pages/ResetPasswordPage.tsx">
        <div className="text-center mb-8" data-id="zbtecumx6" data-path="src/pages/ResetPasswordPage.tsx">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="8q0w06pfo" data-path="src/pages/ResetPasswordPage.tsx">
            MessageFlow
          </h1>
          <p className="text-slate-600 mt-2" data-id="rao9t3pds" data-path="src/pages/ResetPasswordPage.tsx">
            Reset your password
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Create a new password</CardTitle>
            <CardDescription>
              Please enter a new password for your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleResetPassword} data-id="7pn3e7sxn" data-path="src/pages/ResetPasswordPage.tsx">
              <div className="grid gap-4" data-id="xcx98t4hu" data-path="src/pages/ResetPasswordPage.tsx">
                <div className="grid gap-2" data-id="a6rl87ouf" data-path="src/pages/ResetPasswordPage.tsx">
                  <Label htmlFor="new-password">New Password</Label>
                  <Input
                    id="new-password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required />

                </div>
                <div className="grid gap-2" data-id="ytmr4u3w4" data-path="src/pages/ResetPasswordPage.tsx">
                  <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                  <Input
                    id="confirm-new-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required />

                </div>
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={isLoading}>

                  {isLoading ? "Resetting..." : "Reset Password"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => navigate("/auth")}>

                  Back to Login
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>);

};

export default ResetPasswordPage;