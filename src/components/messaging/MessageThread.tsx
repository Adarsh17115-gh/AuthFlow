import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface Author {
  name: string;
  avatar: string;
  initials: string;
  id: string;
}

interface Reaction {
  emoji: string;
  count: number;
}

interface Reply {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  reactions: Reaction[];
}

interface ThreadProps {
  id: string;
  author: Author;
  content: string;
  timestamp: string;
  reactions: Reaction[];
  replies: Reply[];
}

interface MessageThreadProps {
  thread: ThreadProps;
  onThreadUpdate?: (updatedThread: ThreadProps) => void;
}

const MessageThread = ({ thread, onThreadUpdate }: MessageThreadProps) => {
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState("");
  const [threadData, setThreadData] = useState(thread);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Update local state when thread prop changes
  useEffect(() => {
    setThreadData(thread);
  }, [thread]);

  const handleAddReaction = async (emoji: string) => {
    try {
      // In a real app, we would save this reaction to the database
      // For now, we're just updating the UI
      const updatedReactions = [...threadData.reactions];
      const existingReaction = updatedReactions.find((r) => r.emoji === emoji);

      if (existingReaction) {
        existingReaction.count += 1;
      } else {
        updatedReactions.push({ emoji, count: 1 });
      }

      const updatedThread = {
        ...threadData,
        reactions: updatedReactions
      };

      setThreadData(updatedThread);

      // Notify parent component about the update
      if (onThreadUpdate) {
        onThreadUpdate(updatedThread);
      }

      toast({
        title: "Reaction Added",
        description: `You reacted with ${emoji} to the message.`
      });
    } catch (error) {
      console.error("Error adding reaction:", error);
      toast({
        title: "Error",
        description: "Failed to add reaction. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleSendReply = async () => {
    if (!replyText.trim()) return;

    setIsLoading(true);

    try {
      // Create a new reply
      const newReply: Reply = {
        id: `reply-${Date.now()}`,
        author: {
          name: "Me", // This would come from the authenticated user
          avatar: "https://github.com/shadcn.png",
          initials: "ME",
          id: "current-user-id" // This would come from the authenticated user
        },
        content: replyText,
        timestamp: "Just now",
        reactions: []
      };

      // In a real app, we would save this to the database using the message table
      // For now, we're just updating the UI
      const updatedThread = {
        ...threadData,
        replies: [...threadData.replies, newReply]
      };

      setThreadData(updatedThread);

      // Notify parent component about the update
      if (onThreadUpdate) {
        onThreadUpdate(updatedThread);
      }

      setReplyText("");
      setIsReplying(false);

      toast({
        title: "Reply Posted",
        description: "Your reply has been added to the thread."
      });
    } catch (error) {
      console.error("Error sending reply:", error);
      toast({
        title: "Error",
        description: "Failed to send reply. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4" data-id="lsn9uiq8w" data-path="src/components/messaging/MessageThread.tsx">
      <div className="flex gap-3" data-id="4aqj4lx1l" data-path="src/components/messaging/MessageThread.tsx">
        <Avatar className="h-10 w-10">
          <AvatarImage src={threadData.author.avatar} alt={threadData.author.name} />
          <AvatarFallback>{threadData.author.initials}</AvatarFallback>
        </Avatar>
        <div className="flex-1" data-id="ey56emdtr" data-path="src/components/messaging/MessageThread.tsx">
          <div className="flex items-center gap-2 mb-1" data-id="0sfn92sky" data-path="src/components/messaging/MessageThread.tsx">
            <span className="font-medium" data-id="7i2puiov3" data-path="src/components/messaging/MessageThread.tsx">{threadData.author.name}</span>
            <span className="text-xs text-muted-foreground" data-id="hyldt1q6p" data-path="src/components/messaging/MessageThread.tsx">{threadData.timestamp}</span>
          </div>
          <div className="mb-2" data-id="hoyvinx3e" data-path="src/components/messaging/MessageThread.tsx">
            <p className="text-sm text-foreground" data-id="qsbmiwl58" data-path="src/components/messaging/MessageThread.tsx">{threadData.content}</p>
          </div>
          <div className="flex items-center gap-4" data-id="9sd9z054s" data-path="src/components/messaging/MessageThread.tsx">
            <div className="flex gap-1" data-id="yutzmuj7s" data-path="src/components/messaging/MessageThread.tsx">
              {threadData.reactions.map((reaction, index) =>
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => handleAddReaction(reaction.emoji)}>

                  {reaction.emoji} {reaction.count}
                </Button>
              )}
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2 text-xs"
                onClick={() => handleAddReaction("👍")}>

                <span className="mr-1" data-id="kvsly75p2" data-path="src/components/messaging/MessageThread.tsx">+</span>
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="h-7 px-2 text-xs"
              onClick={() => setIsReplying(!isReplying)}>

              Reply
            </Button>
          </div>
        </div>
      </div>

      {threadData.replies.length > 0 &&
      <div className="ml-12 border-l-2 border-border pl-4 space-y-4" data-id="ha55f9w28" data-path="src/components/messaging/MessageThread.tsx">
          {threadData.replies.map((reply) =>
        <div key={reply.id} className="flex gap-3" data-id="bru7hhub1" data-path="src/components/messaging/MessageThread.tsx">
              <Avatar className="h-8 w-8">
                <AvatarImage src={reply.author.avatar} alt={reply.author.name} />
                <AvatarFallback>{reply.author.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1" data-id="1x3ftsuem" data-path="src/components/messaging/MessageThread.tsx">
                <div className="flex items-center gap-2 mb-1" data-id="0517mr1ep" data-path="src/components/messaging/MessageThread.tsx">
                  <span className="font-medium" data-id="4f05u2y0w" data-path="src/components/messaging/MessageThread.tsx">{reply.author.name}</span>
                  <span className="text-xs text-muted-foreground" data-id="13px2u49i" data-path="src/components/messaging/MessageThread.tsx">{reply.timestamp}</span>
                </div>
                <div className="mb-2" data-id="0o0a46bix" data-path="src/components/messaging/MessageThread.tsx">
                  <p className="text-sm text-foreground" data-id="d85mn0eiu" data-path="src/components/messaging/MessageThread.tsx">{reply.content}</p>
                </div>
                <div className="flex items-center gap-2" data-id="wn30zrfho" data-path="src/components/messaging/MessageThread.tsx">
                  <div className="flex gap-1" data-id="q6ddp8had" data-path="src/components/messaging/MessageThread.tsx">
                    {reply.reactions.map((reaction, index) =>
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="h-6 px-2 text-xs">

                        {reaction.emoji} {reaction.count}
                      </Button>
                )}
                    <Button
                  variant="ghost"
                  size="sm"
                  className="h-6 px-2 text-xs">

                      <span className="mr-1" data-id="jeq84bsfs" data-path="src/components/messaging/MessageThread.tsx">+</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
        )}
        </div>
      }

      {isReplying &&
      <div className="ml-12 border-l-2 border-border pl-4" data-id="vrhy8xtb4" data-path="src/components/messaging/MessageThread.tsx">
          <Card className="p-3">
            <div className="flex gap-3" data-id="he079gogx" data-path="src/components/messaging/MessageThread.tsx">
              <Avatar className="h-8 w-8">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="flex-1" data-id="a3pa08x01" data-path="src/components/messaging/MessageThread.tsx">
                <Textarea
                placeholder="Write a reply..."
                className="resize-none border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0 min-h-[60px]"
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)} />

                <div className="flex justify-between items-center mt-2" data-id="oemdtjb5b" data-path="src/components/messaging/MessageThread.tsx">
                  <div className="flex gap-2" data-id="yu6zbb7uj" data-path="src/components/messaging/MessageThread.tsx">
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="3sul35xvc" data-path="src/components/messaging/MessageThread.tsx">
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" data-id="k6urjhpoh" data-path="src/components/messaging/MessageThread.tsx" />
                        <path d="M8.5 8.5v.01" data-id="njp5cfxip" data-path="src/components/messaging/MessageThread.tsx" />
                        <path d="M16 15.5v.01" data-id="2hs12rgqy" data-path="src/components/messaging/MessageThread.tsx" />
                        <path d="M12 12v.01" data-id="gtpebt53d" data-path="src/components/messaging/MessageThread.tsx" />
                      </svg>
                    </Button>
                    <Button variant="ghost" size="icon" className="h-7 w-7">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="eqhzuwer4" data-path="src/components/messaging/MessageThread.tsx">
                        <path d="M15 8h.01" data-id="3t6iiw4wf" data-path="src/components/messaging/MessageThread.tsx" />
                        <rect width="16" height="13" x="4" y="5" rx="2" data-id="ybg5e9scl" data-path="src/components/messaging/MessageThread.tsx" />
                        <path d="m4 17 4-4h8" data-id="0e846gq66" data-path="src/components/messaging/MessageThread.tsx" />
                      </svg>
                    </Button>
                  </div>
                  <div className="flex gap-2" data-id="qbrd11624" data-path="src/components/messaging/MessageThread.tsx">
                    <Button
                    variant="outline"
                    size="sm"
                    className="h-8"
                    onClick={() => setIsReplying(false)}>

                      Cancel
                    </Button>
                    <Button
                    size="sm"
                    className="h-8 bg-blue-600 hover:bg-blue-700"
                    onClick={handleSendReply}
                    disabled={isLoading}>

                      {isLoading ? "Sending..." : "Reply"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      }
    </div>);

};

export default MessageThread;