import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState<"login" | "signup" | "forgot">("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await window.ezsite.apis.login({
        email,
        password
      });

      if (error) throw error;

      // Get user info after successful login
      const { data: userInfo, error: userError } = await window.ezsite.apis.getUserInfo();
      if (userError) throw userError;

      toast({
        title: "Login Successful",
        description: `Welcome back, ${userInfo.Name || email}!`
      });

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      toast({
        title: "Login Failed",
        description: String(error),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "The passwords you entered do not match.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await window.ezsite.apis.register({
        email,
        password,
        name
      });

      if (error) throw error;

      toast({
        title: "Account Created",
        description: "Please check your email to verify your account."
      });

      setActiveTab("login");
    } catch (error) {
      console.error("Signup error:", error);
      toast({
        title: "Signup Failed",
        description: String(error),
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await window.ezsite.apis.sendResetPwdEmail({
        email
      });

      if (error) throw error;

      toast({
        title: "Reset Email Sent",
        description: "Please check your email for password reset instructions."
      });

      setActiveTab("login");
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

  const handleOAuthLogin = (provider: string) => {
    toast({
      title: "OAuth Authentication",
      description: `Redirecting to ${provider} for authentication...`
    });
    // OAuth implementation would go here
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-slate-50 to-slate-100" data-id="zbtgp3bfw" data-path="src/pages/AuthPage.tsx">
      <div className="w-full max-w-md" data-id="tm6pcgz4g" data-path="src/pages/AuthPage.tsx">
        <div className="text-center mb-8" data-id="263u78i4g" data-path="src/pages/AuthPage.tsx">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="btsybg109" data-path="src/pages/AuthPage.tsx">
            MessageFlow
          </h1>
          <p className="text-slate-600 mt-2" data-id="m1w9m7aeu" data-path="src/pages/AuthPage.tsx">
            Calm, asynchronous team collaboration
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "login" | "signup" | "forgot")} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card>
              <CardHeader>
                <CardTitle>Welcome back</CardTitle>
                <CardDescription>
                  Sign in to access your workspaces and channels
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} data-id="i4krcgoov" data-path="src/pages/AuthPage.tsx">
                  <div className="grid gap-4" data-id="gpj5rd9td" data-path="src/pages/AuthPage.tsx">
                    <div className="grid gap-2" data-id="brntlvnvi" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    </div>
                    <div className="grid gap-2" data-id="6c7cdmzi6" data-path="src/pages/AuthPage.tsx">
                      <div className="flex items-center justify-between" data-id="zrptzsaga" data-path="src/pages/AuthPage.tsx">
                        <Label htmlFor="password">Password</Label>
                        <Button
                          type="button"
                          variant="link"
                          className="px-0 text-xs text-blue-600"
                          onClick={() => setActiveTab("forgot")}>

                          Forgot password?
                        </Button>
                      </div>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}>

                      {isLoading ? "Logging in..." : "Login"}
                    </Button>
                  </div>
                </form>

                <div className="relative my-6" data-id="f5h8hi8im" data-path="src/pages/AuthPage.tsx">
                  <div className="absolute inset-0 flex items-center" data-id="mkit4n9hq" data-path="src/pages/AuthPage.tsx">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase" data-id="m564ii4qx" data-path="src/pages/AuthPage.tsx">
                    <span className="bg-white px-2 text-slate-500" data-id="et2u2yj9z" data-path="src/pages/AuthPage.tsx">Or continue with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4" data-id="6lfhtveb6" data-path="src/pages/AuthPage.tsx">
                  <Button
                    variant="outline"
                    onClick={() => handleOAuthLogin("Google")}
                    className="border-slate-300">

                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleOAuthLogin("GitHub")}
                    className="border-slate-300">

                    GitHub
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="signup">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Join MessageFlow to collaborate with your team
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} data-id="cxuzzfao1" data-path="src/pages/AuthPage.tsx">
                  <div className="grid gap-4" data-id="r72pokjxi" data-path="src/pages/AuthPage.tsx">
                    <div className="grid gap-2" data-id="ced37sjvw" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required />

                    </div>
                    <div className="grid gap-2" data-id="g9y1odhcd" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="signup-email">Email</Label>
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    </div>
                    <div className="grid gap-2" data-id="ksjwq3uj4" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="signup-password">Password</Label>
                      <Input
                        id="signup-password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required />

                    </div>
                    <div className="grid gap-2" data-id="1q4kealwv" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="confirm-password">Confirm Password</Label>
                      <Input
                        id="confirm-password"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required />

                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}>

                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </div>
                </form>

                <div className="relative my-6" data-id="xzlg1tock" data-path="src/pages/AuthPage.tsx">
                  <div className="absolute inset-0 flex items-center" data-id="msknj3x63" data-path="src/pages/AuthPage.tsx">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase" data-id="u4nfdaqs7" data-path="src/pages/AuthPage.tsx">
                    <span className="bg-white px-2 text-slate-500" data-id="7gbxvnbmf" data-path="src/pages/AuthPage.tsx">Or sign up with</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4" data-id="4j324zp7m" data-path="src/pages/AuthPage.tsx">
                  <Button
                    variant="outline"
                    onClick={() => handleOAuthLogin("Google")}
                    className="border-slate-300">

                    Google
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleOAuthLogin("GitHub")}
                    className="border-slate-300">

                    GitHub
                  </Button>
                </div>
              </CardContent>
              <CardFooter className="justify-center">
                <p className="text-xs text-slate-500" data-id="nqjdunmcx" data-path="src/pages/AuthPage.tsx">
                  By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="forgot">
            <Card>
              <CardHeader>
                <CardTitle>Reset your password</CardTitle>
                <CardDescription>
                  Enter your email and we'll send you a password reset link
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} data-id="9excry60j" data-path="src/pages/AuthPage.tsx">
                  <div className="grid gap-4" data-id="5w4xu8ni6" data-path="src/pages/AuthPage.tsx">
                    <div className="grid gap-2" data-id="7t31jhuae" data-path="src/pages/AuthPage.tsx">
                      <Label htmlFor="reset-email">Email</Label>
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="name@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />

                    </div>
                    <Button
                      type="submit"
                      className="bg-blue-600 hover:bg-blue-700"
                      disabled={isLoading}>

                      {isLoading ? "Sending..." : "Send Reset Link"}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setActiveTab("login")}>

                      Back to Login
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>);

};

export default AuthPage;