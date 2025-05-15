import { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import MessageThread from "./MessageThread";

interface ThreadViewProps {
  channel: string;
  workspace: string;
}

// Sample data for messages
const sampleThreads = [
{
  id: "thread-1",
  author: {
    id: "user-1",
    name: "Sarah Johnson",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    initials: "SJ"
  },
  content: "I've been working on the new user onboarding flow. Here are my initial thoughts about how we can improve the experience for new users:",
  timestamp: "2 hours ago",
  reactions: [
  { emoji: "👍", count: 3 },
  { emoji: "🎉", count: 2 }],

  replies: [
  {
    id: "reply-1",
    author: {
      id: "user-2",
      name: "Alex Rodriguez",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
      initials: "AR"
    },
    content: "This looks great! I think we should also consider adding tooltips for first-time users.",
    timestamp: "1 hour ago",
    reactions: [{ emoji: "💡", count: 1 }]
  }]

},
{
  id: "thread-2",
  author: {
    id: "user-3",
    name: "Jamie Liu",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    initials: "JL"
  },
  content: "I just pushed the bugfix for the notification system. Can someone review the PR when they have a chance?",
  timestamp: "Yesterday at 4:23 PM",
  reactions: [
  { emoji: "👀", count: 1 }],

  replies: []
}];


const ThreadView = ({ channel, workspace }: ThreadViewProps) => {
  const [threads, setThreads] = useState(sampleThreads);
  const [newMessage, setNewMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState<any>({
    ID: "user-1",
    Name: "John Doe",
    Email: "john@example.com"
  });
  const { toast } = useToast();

  // In a real app, this would fetch user info
  // For now, we'll use mock data in development mode
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Mock user info for development
        setUserInfo({
          ID: "user-1",
          Name: "John Doe",
          Email: "john@example.com"
        });

        // In production, uncomment this
        /*
        const { data, error } = await window.ezsite.apis.getUserInfo();
        if (error) throw error;
        setUserInfo(data);
        */
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    };

    fetchUserInfo();
  }, []);

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    setIsLoading(true);

    try {
      // In a real implementation, we would save this message to the database
      // For now, we'll just update the UI with mock data
      const newThread = {
        id: `thread-${Date.now()}`,
        author: {
          id: userInfo?.ID || "current-user",
          name: userInfo?.Name || "Me",
          avatar: "https://github.com/shadcn.png",
          initials: userInfo?.Name?.split(' ').map((n: string) => n[0]).join('') || "ME"
        },
        content: newMessage,
        timestamp: "Just now",
        reactions: [],
        replies: []
      };

      setThreads([newThread, ...threads]);
      setNewMessage("");

      toast({
        title: "Message Posted",
        description: "Your message has been posted to the channel."
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleThreadUpdate = (updatedThread: any) => {
    // Update the thread in our state
    const updatedThreads = threads.map((thread) =>
    thread.id === updatedThread.id ? updatedThread : thread
    );
    setThreads(updatedThreads);
  };

  return (
    <div className="flex-1 flex flex-col" data-id="o2t9138dn" data-path="src/components/messaging/ThreadView.tsx">
      <div className="p-4 border-b" data-id="vv4dpz8xk" data-path="src/components/messaging/ThreadView.tsx">
        <div className="flex justify-between items-center" data-id="rvxzelyla" data-path="src/components/messaging/ThreadView.tsx">
          <div data-id="t422rcwbg" data-path="src/components/messaging/ThreadView.tsx">
            <h2 className="text-lg font-semibold" data-id="niz5l2xoe" data-path="src/components/messaging/ThreadView.tsx">#{channel}</h2>
            <p className="text-sm text-muted-foreground" data-id="kl7pg60kr" data-path="src/components/messaging/ThreadView.tsx">
              {workspace} • {threads.length} threads
            </p>
          </div>
          <div className="flex gap-2" data-id="vnwl7406x" data-path="src/components/messaging/ThreadView.tsx">
            <Button variant="outline" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" data-id="lvpv7nccf" data-path="src/components/messaging/ThreadView.tsx">
                <circle cx="11" cy="11" r="8" data-id="mt0c9fnjq" data-path="src/components/messaging/ThreadView.tsx" />
                <path d="m21 21-4.3-4.3" data-id="w3039txjs" data-path="src/components/messaging/ThreadView.tsx" />
              </svg>
              Search
            </Button>
            <Button variant="outline" size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2" data-id="0e98ajfoy" data-path="src/components/messaging/ThreadView.tsx">
                <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z" data-id="1qndk592z" data-path="src/components/messaging/ThreadView.tsx" />
                <path d="M10 2c1 .5 2 2 2 5" data-id="dfv4jihii" data-path="src/components/messaging/ThreadView.tsx" />
              </svg>
              Pin
            </Button>
          </div>
        </div>
      </div>
      
      <div className="flex-1 overflow-hidden flex flex-col" data-id="lommf9yqw" data-path="src/components/messaging/ThreadView.tsx">
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-6" data-id="o8txxbkg9" data-path="src/components/messaging/ThreadView.tsx">
            {threads.map((thread) =>
            <MessageThread
              key={thread.id}
              thread={thread}
              onThreadUpdate={handleThreadUpdate} />

            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t" data-id="j6gqtk5rj" data-path="src/components/messaging/ThreadView.tsx">
          <Card className="p-4">
            <div className="flex gap-3" data-id="4ezj1il05" data-path="src/components/messaging/ThreadView.tsx">
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt={userInfo?.Name || "User avatar"} />

                <AvatarFallback>
                  {userInfo?.Name ? userInfo.Name.split(' ').map((n: string) => n[0]).join('') : "ME"}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1" data-id="fur29jj31" data-path="src/components/messaging/ThreadView.tsx">
                <Textarea
                  placeholder="Start a new thread..."
                  className="resize-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)} />

                <div className="flex justify-between items-center mt-4" data-id="h9czvlkus" data-path="src/components/messaging/ThreadView.tsx">
                  <div className="flex gap-2" data-id="bqwln5ece" data-path="src/components/messaging/ThreadView.tsx">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="w1bjst7ry" data-path="src/components/messaging/ThreadView.tsx">
                        <rect width="18" height="18" x="3" y="3" rx="2" data-id="p33s3gebk" data-path="src/components/messaging/ThreadView.tsx" />
                        <path d="M9.75 9.75v4.5M14.25 9.75v4.5M8.25 9.75h7.5" data-id="ax6c4zjsc" data-path="src/components/messaging/ThreadView.tsx" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="ax61n6rt5" data-path="src/components/messaging/ThreadView.tsx">
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" data-id="90163icd6" data-path="src/components/messaging/ThreadView.tsx" />
                        <path d="M8.5 8.5v.01" data-id="hl2pgzqbr" data-path="src/components/messaging/ThreadView.tsx" />
                        <path d="M16 15.5v.01" data-id="rw147tatx" data-path="src/components/messaging/ThreadView.tsx" />
                        <path d="M12 12v.01" data-id="dq6vqsf67" data-path="src/components/messaging/ThreadView.tsx" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5" data-id="jxvzshch7" data-path="src/components/messaging/ThreadView.tsx">
                        <rect width="18" height="12" x="3" y="6" rx="2" data-id="6ixcjt4h1" data-path="src/components/messaging/ThreadView.tsx" />
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" data-id="8n9lwtne5" data-path="src/components/messaging/ThreadView.tsx" />
                      </svg>
                    </Button>
                  </div>
                  <Button
                    onClick={handleSendMessage}
                    className="bg-blue-600 hover:bg-blue-700"
                    disabled={isLoading}>

                    {isLoading ? "Sending..." : "Send"}
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>);

};

export default ThreadView;