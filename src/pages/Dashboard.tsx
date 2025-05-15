import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import Sidebar from "@/components/sidebar/Sidebar";
import ThreadView from "@/components/messaging/ThreadView";
import ThreadList from "@/components/messaging/ThreadList";
import NotificationCenter from "@/components/notifications/NotificationCenter";
import NotificationPreferences from "@/components/notifications/NotificationPreferences";
import WorkspaceSettings from "@/components/workspace/WorkspaceSettings";
import ChannelSettings from "@/components/workspace/ChannelSettings";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Dashboard = () => {
  const [activeWorkspace, setActiveWorkspace] = useState("Engineering");
  const [activeChannel, setActiveChannel] = useState("general");
  const [activeThreadId, setActiveThreadId] = useState<string | undefined>(undefined);
  const [showThreadList, setShowThreadList] = useState(true);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [showNotificationPreferences, setShowNotificationPreferences] = useState(false);
  const [showWorkspaceSettings, setShowWorkspaceSettings] = useState(false);
  const [showChannelSettings, setShowChannelSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        setIsLoading(true);
        // Mock user info for now since we might not be authenticated in development
        setUserInfo({
          ID: "user-1",
          Name: "John Doe",
          Email: "john@example.com"
        });

        // Uncomment this in production when authentication is required
        /*
        const { data, error } = await window.ezsite.apis.getUserInfo();
        if (error) throw error;
        setUserInfo(data);
        */
      } catch (error) {
        console.error("Error fetching user info:", error);
        // For development, we'll just show a warning toast but not redirect
        toast({
          title: "Development Mode",
          description: "Using mock user data for development",
          variant: "default"
        });

        // In production, uncomment this to enforce authentication
        /*
        toast({
          title: "Authentication Required",
          description: "Please sign in to access this page",
          variant: "destructive"
        });
        navigate("/auth");
        */
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserInfo();
  }, [navigate, toast]);

  const handleLogout = async () => {
    try {
      // In production, uncomment this to use real logout
      /*
      const { error } = await window.ezsite.apis.logout();
      if (error) throw error;
      */

      toast({
        title: "Logged Out",
        description: "You have been successfully logged out."
      });

      navigate("/auth");
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout Failed",
        description: String(error),
        variant: "destructive"
      });
    }
  };

  const handleNotificationSettings = () => {
    setShowNotificationPreferences(true);
  };

  const handleToggleThreadList = () => {
    setShowThreadList(!showThreadList);
  };

  const handleSelectThread = (threadId: string) => {
    setActiveThreadId(threadId);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');

    toast({
      title: isDarkMode ? "Light Mode Activated" : "Dark Mode Activated",
      description: `Switched to ${isDarkMode ? "light" : "dark"} mode for better ${isDarkMode ? "daytime" : "nighttime"} visibility.`
    });
  };

  const handleWorkspaceSettings = () => {
    setShowWorkspaceSettings(true);
  };

  const handleChannelSettings = () => {
    setShowChannelSettings(true);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center" data-id="bve4l804f" data-path="src/pages/Dashboard.tsx">
        <div className="flex flex-col items-center gap-2" data-id="ofoj7skb2" data-path="src/pages/Dashboard.tsx">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" data-id="nf0qqp1kh" data-path="src/pages/Dashboard.tsx"></div>
          <p className="text-muted-foreground" data-id="algkfvylf" data-path="src/pages/Dashboard.tsx">Loading...</p>
        </div>
      </div>);

  }

  return (
    <div className={`h-screen flex flex-col bg-background ${isDarkMode ? 'dark' : ''}`} data-id="4zss6gc3d" data-path="src/pages/Dashboard.tsx">
      <header className="border-b border-border h-14 px-4 flex items-center justify-between" data-id="dv0ou6qxj" data-path="src/pages/Dashboard.tsx">
        <div className="flex items-center gap-2" data-id="0afhwd17h" data-path="src/pages/Dashboard.tsx">
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent" data-id="sks3bxpbi" data-path="src/pages/Dashboard.tsx">
            MessageFlow
          </h1>
          <div className="flex items-center" data-id="pyau6lh2b" data-path="src/pages/Dashboard.tsx">
            <span className="text-sm text-muted-foreground" data-id="zeyqyjgas" data-path="src/pages/Dashboard.tsx">
              {activeWorkspace} • 
            </span>
            <Button
              variant="link"
              className="text-sm h-auto p-0 ml-1"
              onClick={handleChannelSettings}>

              #{activeChannel}
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-3" data-id="y3gb536jr" data-path="src/pages/Dashboard.tsx">
          <Button
            variant="outline"
            size="sm"
            className="h-8"
            onClick={handleToggleThreadList}>

            {showThreadList ? "Hide Threads" : "Show Threads"}
          </Button>
          
          <Popover open={showNotificationCenter} onOpenChange={setShowNotificationCenter}>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative h-8 w-8">

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="whg0li39g" data-path="src/pages/Dashboard.tsx">
                  <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" data-id="bowcp02z1" data-path="src/pages/Dashboard.tsx" />
                  <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" data-id="2xdkk3i21" data-path="src/pages/Dashboard.tsx" />
                </svg>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500" data-id="4jhogky4d" data-path="src/pages/Dashboard.tsx"></span>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="p-0">
              <NotificationCenter onClose={() => setShowNotificationCenter(false)} />
            </PopoverContent>
          </Popover>
          
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={handleToggleDarkMode}>

            {isDarkMode ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="k24bz9yy6" data-path="src/pages/Dashboard.tsx">
                <circle cx="12" cy="12" r="4" data-id="yyijcrmad" data-path="src/pages/Dashboard.tsx" />
                <path d="M12 2v2" data-id="8z28hiwcq" data-path="src/pages/Dashboard.tsx" />
                <path d="M12 20v2" data-id="cali9ppz1" data-path="src/pages/Dashboard.tsx" />
                <path d="m4.93 4.93 1.41 1.41" data-id="xgsa68u3f" data-path="src/pages/Dashboard.tsx" />
                <path d="m17.66 17.66 1.41 1.41" data-id="7xziqjbmz" data-path="src/pages/Dashboard.tsx" />
                <path d="M2 12h2" data-id="ba3tbk388" data-path="src/pages/Dashboard.tsx" />
                <path d="M20 12h2" data-id="m4ig9ydng" data-path="src/pages/Dashboard.tsx" />
                <path d="m6.34 17.66-1.41 1.41" data-id="dmipjimqx" data-path="src/pages/Dashboard.tsx" />
                <path d="m19.07 4.93-1.41 1.41" data-id="d3yh76frm" data-path="src/pages/Dashboard.tsx" />
              </svg> :

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="o4gikghsc" data-path="src/pages/Dashboard.tsx">
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" data-id="ilrnpj2g5" data-path="src/pages/Dashboard.tsx" />
              </svg>
            }
          </Button>
          
          <div className="flex items-center gap-1" data-id="ck82irxec" data-path="src/pages/Dashboard.tsx">
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="h-8 w-8 cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" alt={userInfo?.Name || "User"} />
                  <AvatarFallback>
                    {userInfo?.Name ? userInfo.Name.split(' ').map((n: string) => n[0]).join('').toUpperCase() : 'U'}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-2">
                <div className="grid gap-1" data-id="6n44wrmow" data-path="src/pages/Dashboard.tsx">
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={handleWorkspaceSettings}>

                    Workspace settings
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start"
                    onClick={handleNotificationSettings}>

                    Notification preferences
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start">

                    Your profile
                  </Button>
                  <Separator className="my-1" />
                  <Button
                    variant="ghost"
                    className="justify-start text-red-500 hover:text-red-500"
                    onClick={handleLogout}>

                    Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </header>
      
      {/* Dialogs */}
      <Dialog open={showNotificationPreferences} onOpenChange={setShowNotificationPreferences}>
        <DialogContent className="p-0 max-w-[550px]">
          <NotificationPreferences onClose={() => setShowNotificationPreferences(false)} />
        </DialogContent>
      </Dialog>
      
      <Dialog open={showWorkspaceSettings} onOpenChange={setShowWorkspaceSettings}>
        <DialogContent className="p-0 max-w-[700px]">
          <WorkspaceSettings
            workspaceName={activeWorkspace}
            onClose={() => setShowWorkspaceSettings(false)} />

        </DialogContent>
      </Dialog>
      
      <Dialog open={showChannelSettings} onOpenChange={setShowChannelSettings}>
        <DialogContent className="p-0 max-w-[600px]">
          <ChannelSettings
            channelName={activeChannel}
            workspaceName={activeWorkspace}
            onClose={() => setShowChannelSettings(false)} />

        </DialogContent>
      </Dialog>

      <div className="flex-1 flex overflow-hidden" data-id="kufm3ut1p" data-path="src/pages/Dashboard.tsx">
        <Sidebar
          activeWorkspace={activeWorkspace}
          setActiveWorkspace={setActiveWorkspace}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel} />

        <main className="flex-1 overflow-hidden flex bg-background" data-id="8aa8ift4e" data-path="src/pages/Dashboard.tsx">
          {showThreadList &&
          <div className="w-80 border-r border-border flex flex-col" data-id="6837gjdni" data-path="src/pages/Dashboard.tsx">
              <ThreadList
              channel={activeChannel}
              workspace={activeWorkspace}
              onSelectThread={handleSelectThread}
              activeThreadId={activeThreadId} />

            </div>
          }
          <div className="flex-1 overflow-hidden flex flex-col" data-id="w9f1gua9b" data-path="src/pages/Dashboard.tsx">
            <ThreadView channel={activeChannel} workspace={activeWorkspace} />
          </div>
        </main>
      </div>
    </div>);

};

export default Dashboard;