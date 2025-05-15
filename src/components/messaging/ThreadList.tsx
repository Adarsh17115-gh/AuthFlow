import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface ThreadAuthor {
  id: string;
  name: string;
  avatar: string;
  initials: string;
}

interface ThreadSummary {
  id: string;
  title: string;
  author: ThreadAuthor;
  lastActivity: string;
  replyCount: number;
  lastReplyBy?: string;
  hasUnread: boolean;
  isPinned: boolean;
  isMuted: boolean;
  isSubscribed: boolean;
  tags: string[];
}

interface ThreadListProps {
  channel: string;
  workspace: string;
  onSelectThread: (threadId: string) => void;
  activeThreadId?: string;
}

const ThreadList = ({ channel, workspace, onSelectThread, activeThreadId }: ThreadListProps) => {
  const [threads, setThreads] = useState<ThreadSummary[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // all, unread, subscribed, muted
  const { toast } = useToast();

  useEffect(() => {
    const fetchThreads = async () => {
      setIsLoading(true);

      try {
        // Mock data for development
        setTimeout(() => {
          setThreads([
          {
            id: "thread-1",
            title: "New user onboarding flow improvements",
            author: {
              id: "user-1",
              name: "Sarah Johnson",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
              initials: "SJ"
            },
            lastActivity: "2 hours ago",
            replyCount: 3,
            lastReplyBy: "Alex Rodriguez",
            hasUnread: true,
            isPinned: true,
            isMuted: false,
            isSubscribed: true,
            tags: ["design", "ux"]
          },
          {
            id: "thread-2",
            title: "Backend API optimization for upcoming launch",
            author: {
              id: "user-3",
              name: "Jamie Liu",
              avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              initials: "JL"
            },
            lastActivity: "Yesterday at 4:23 PM",
            replyCount: 0,
            hasUnread: false,
            isPinned: false,
            isMuted: false,
            isSubscribed: true,
            tags: ["backend", "performance"]
          },
          {
            id: "thread-3",
            title: "Weekly team check-in and project updates",
            author: {
              id: "user-2",
              name: "Alex Rodriguez",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              initials: "AR"
            },
            lastActivity: "3 days ago",
            replyCount: 8,
            lastReplyBy: "Sarah Johnson",
            hasUnread: true,
            isPinned: false,
            isMuted: false,
            isSubscribed: true,
            tags: ["team", "updates"]
          },
          {
            id: "thread-4",
            title: "New marketing campaign calendar for Q3",
            author: {
              id: "user-4",
              name: "Taylor Kim",
              avatar: "",
              initials: "TK"
            },
            lastActivity: "5 days ago",
            replyCount: 4,
            lastReplyBy: "Jamie Liu",
            hasUnread: false,
            isPinned: false,
            isMuted: true,
            isSubscribed: false,
            tags: ["marketing", "planning"]
          }]
          );
          setIsLoading(false);
        }, 1000);

        // In production, uncomment this code
        /*
        try {
          const { data, error } = await window.ezsite.apis.tablePage(5067, {
            PageNo: 1,
            PageSize: 50,
            OrderByField: "last_message_at",
            IsAsc: false,
            Filters: [
              {
                name: "is_archived",
                op: "Equal",
                value: false
              }
            ]
          });
          
          if (error) throw error;
          
          // Transform the data
          const threadItems = data.List.map((item: any) => ({
            id: item.id,
            title: item.title,
            author: {
              id: item.created_by,
              name: item.author_name || "Unknown",
              avatar: item.author_avatar || "",
              initials: item.author_name ? item.author_name.split(" ").map((n: string) => n[0]).join("") : "UN"
            },
            lastActivity: new Date(item.last_message_at).toLocaleString(),
            replyCount: item.reply_count || 0,
            lastReplyBy: item.last_reply_by || "",
            hasUnread: item.has_unread || false,
            isPinned: item.is_pinned || false,
            isMuted: item.is_muted || false,
            isSubscribed: true,
            tags: item.tags ? item.tags.split(",") : []
          }));
          
          setThreads(threadItems);
        } catch (error) {
          console.error("Error fetching threads:", error);
          toast({
            title: "Error",
            description: "Failed to load threads",
            variant: "destructive"
          });
        } finally {
          setIsLoading(false);
        }
        */
      } catch (error) {
        console.error("Error setting up threads:", error);
        setIsLoading(false);
      }
    };

    fetchThreads();
  }, [channel, workspace, toast]);

  const handleTogglePinned = (threadId: string, isPinned: boolean) => {
    const updatedThreads = threads.map((thread) =>
    thread.id === threadId ? { ...thread, isPinned: !isPinned } : thread
    );

    setThreads(updatedThreads);

    toast({
      title: isPinned ? "Thread Unpinned" : "Thread Pinned",
      description: `The thread has been ${isPinned ? 'unpinned' : 'pinned'} successfully.`
    });
  };

  const handleToggleMuted = (threadId: string, isMuted: boolean) => {
    const updatedThreads = threads.map((thread) =>
    thread.id === threadId ? { ...thread, isMuted: !isMuted } : thread
    );

    setThreads(updatedThreads);

    toast({
      title: isMuted ? "Thread Unmuted" : "Thread Muted",
      description: `The thread has been ${isMuted ? 'unmuted' : 'muted'} successfully.`
    });
  };

  const handleToggleSubscribed = (threadId: string, isSubscribed: boolean) => {
    const updatedThreads = threads.map((thread) =>
    thread.id === threadId ? { ...thread, isSubscribed: !isSubscribed } : thread
    );

    setThreads(updatedThreads);

    toast({
      title: isSubscribed ? "Unsubscribed" : "Subscribed",
      description: `You have ${isSubscribed ? 'unsubscribed from' : 'subscribed to'} the thread.`
    });
  };

  const getFilteredThreads = () => {
    let filteredThreads = [...threads];

    if (filter === "unread") {
      filteredThreads = filteredThreads.filter((thread) => thread.hasUnread);
    } else if (filter === "subscribed") {
      filteredThreads = filteredThreads.filter((thread) => thread.isSubscribed);
    } else if (filter === "muted") {
      filteredThreads = filteredThreads.filter((thread) => thread.isMuted);
    }

    // Always show pinned threads first
    filteredThreads.sort((a, b) => {
      if (a.isPinned && !b.isPinned) return -1;
      if (!a.isPinned && b.isPinned) return 1;
      return 0;
    });

    return filteredThreads;
  };

  return (
    <div className="flex flex-col h-full" data-id="ups083dq3" data-path="src/components/messaging/ThreadList.tsx">
      <div className="p-3 border-b" data-id="7heyvmrxd" data-path="src/components/messaging/ThreadList.tsx">
        <div className="flex justify-between items-center mb-3" data-id="van8adovm" data-path="src/components/messaging/ThreadList.tsx">
          <h3 className="text-sm font-medium" data-id="v1r0w31gs" data-path="src/components/messaging/ThreadList.tsx">Threads in #{channel}</h3>
          <Button variant="ghost" size="sm" className="h-7">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-1" data-id="7a4lzyd98" data-path="src/components/messaging/ThreadList.tsx">
              <circle cx="11" cy="11" r="8" data-id="iu0q5xo4z" data-path="src/components/messaging/ThreadList.tsx" />
              <path d="m21 21-4.3-4.3" data-id="wmjbxe6yu" data-path="src/components/messaging/ThreadList.tsx" />
            </svg>
            Search
          </Button>
        </div>
        <div className="flex space-x-1" data-id="fh9xsf0uu" data-path="src/components/messaging/ThreadList.tsx">
          <Button
            variant={filter === "all" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs h-7"
            onClick={() => setFilter("all")}>

            All
          </Button>
          <Button
            variant={filter === "unread" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs h-7"
            onClick={() => setFilter("unread")}>

            Unread
          </Button>
          <Button
            variant={filter === "subscribed" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs h-7"
            onClick={() => setFilter("subscribed")}>

            Subscribed
          </Button>
          <Button
            variant={filter === "muted" ? "secondary" : "ghost"}
            size="sm"
            className="text-xs h-7"
            onClick={() => setFilter("muted")}>

            Muted
          </Button>
        </div>
      </div>
      
      <ScrollArea className="flex-1">
        {isLoading ?
        <div className="flex items-center justify-center h-40" data-id="9lwv6kkr9" data-path="src/components/messaging/ThreadList.tsx">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" data-id="0r0obwu89" data-path="src/components/messaging/ThreadList.tsx" />
          </div> :
        getFilteredThreads().length === 0 ?
        <div className="p-4 text-center text-muted-foreground" data-id="b9q2o71so" data-path="src/components/messaging/ThreadList.tsx">
            <p data-id="twdh9o384" data-path="src/components/messaging/ThreadList.tsx">No threads found</p>
          </div> :

        <div className="p-2" data-id="iezi3zfgk" data-path="src/components/messaging/ThreadList.tsx">
            {getFilteredThreads().map((thread) =>
          <Card
            key={thread.id}
            className={`mb-2 p-3 hover:bg-accent/50 transition-colors cursor-pointer ${
            activeThreadId === thread.id ? 'bg-accent/70 border-blue-200' : ''} ${
            thread.hasUnread ? 'border-l-4 border-l-blue-500' : ''}`}
            onClick={() => onSelectThread(thread.id)}>

                <div className="flex items-start gap-2" data-id="b5m3vc3ku" data-path="src/components/messaging/ThreadList.tsx">
                  {thread.isPinned &&
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" data-id="7u54t7deh" data-path="src/components/messaging/ThreadList.tsx">
                      <line x1="12" x2="12" y1="17" y2="22" data-id="0zsr104dd" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" data-id="9mqrc38hv" data-path="src/components/messaging/ThreadList.tsx" />
                    </svg>
              }
                  <div className="flex-1 min-w-0" data-id="i5zg3l77u" data-path="src/components/messaging/ThreadList.tsx">
                    <div className="flex justify-between items-start" data-id="b6r00pfoa" data-path="src/components/messaging/ThreadList.tsx">
                      <h4 className="text-sm font-medium truncate" data-id="i2qx9zymv" data-path="src/components/messaging/ThreadList.tsx">{thread.title}</h4>
                      <div className="flex gap-1 flex-shrink-0" data-id="8zed3y6ht" data-path="src/components/messaging/ThreadList.tsx">
                        {thread.isMuted &&
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3 text-muted-foreground" data-id="vdcd9okfd" data-path="src/components/messaging/ThreadList.tsx">
                            <path d="M12 6v12" data-id="pcinipqvk" data-path="src/components/messaging/ThreadList.tsx" />
                            <path d="M6 12h12" data-id="ol252jupq" data-path="src/components/messaging/ThreadList.tsx" />
                          </svg>
                    }
                        {thread.hasUnread &&
                    <span className="w-2 h-2 bg-blue-500 rounded-full" data-id="g6o26o6yr" data-path="src/components/messaging/ThreadList.tsx" />
                    }
                      </div>
                    </div>
                    <div className="flex items-center text-xs text-muted-foreground mt-1" data-id="cqh49t2lr" data-path="src/components/messaging/ThreadList.tsx">
                      <div className="flex items-center" data-id="0v1pf4fvc" data-path="src/components/messaging/ThreadList.tsx">
                        <Avatar className="h-4 w-4 mr-1">
                          <AvatarImage src={thread.author.avatar} alt={thread.author.name} />
                          <AvatarFallback>{thread.author.initials}</AvatarFallback>
                        </Avatar>
                        <span data-id="27ugz8snn" data-path="src/components/messaging/ThreadList.tsx">{thread.author.name}</span>
                      </div>
                      <span className="mx-1" data-id="x1wh39uvh" data-path="src/components/messaging/ThreadList.tsx">•</span>
                      <span data-id="3h6s6sjvs" data-path="src/components/messaging/ThreadList.tsx">{thread.lastActivity}</span>
                      <span className="mx-1" data-id="uimqj8ic1" data-path="src/components/messaging/ThreadList.tsx">•</span>
                      <span data-id="vf2syas9y" data-path="src/components/messaging/ThreadList.tsx">{thread.replyCount} {thread.replyCount === 1 ? 'reply' : 'replies'}</span>
                    </div>
                    {thread.tags.length > 0 &&
                <div className="flex flex-wrap gap-1 mt-1" data-id="06gpgctc9" data-path="src/components/messaging/ThreadList.tsx">
                        {thread.tags.map((tag) =>
                  <Badge key={tag} variant="outline" className="text-xs py-0 h-5">
                            {tag}
                          </Badge>
                  )}
                      </div>
                }
                  </div>
                </div>
                <div className="mt-2 flex justify-end gap-1" data-id="m5qpxoa2b" data-path="src/components/messaging/ThreadList.tsx">
                  <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  handleTogglePinned(thread.id, thread.isPinned);
                }}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 ${thread.isPinned ? 'text-amber-500' : 'text-muted-foreground'}`} data-id="30nmxme8j" data-path="src/components/messaging/ThreadList.tsx">
                      <line x1="12" x2="12" y1="17" y2="22" data-id="tbwcwmpzb" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0-4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" data-id="wnioxbnfy" data-path="src/components/messaging/ThreadList.tsx" />
                    </svg>
                  </Button>
                  <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleMuted(thread.id, thread.isMuted);
                }}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 ${thread.isMuted ? 'text-red-500' : 'text-muted-foreground'}`} data-id="to4c328yy" data-path="src/components/messaging/ThreadList.tsx">
                      <path d="M18.63 13A17.89 17.89 0 0 1 18 8" data-id="clgk42d1y" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7 3 9 3 9h4" data-id="bb6a5dx65" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M2 2l20 20" data-id="g7hrls044" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M7 17c-2.5-2.5-3-5.5-3-9" data-id="u638ylabf" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M12 19c-1 0-1.5-.5-1.5-1" data-id="h1e0zc6y0" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M18 12c0-5.5-4.5-10-10-10" data-id="e66ziv7h2" data-path="src/components/messaging/ThreadList.tsx" />
                    </svg>
                  </Button>
                  <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleSubscribed(thread.id, thread.isSubscribed);
                }}>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`w-3 h-3 ${thread.isSubscribed ? 'text-blue-500' : 'text-muted-foreground'}`} data-id="l8qkwf5wf" data-path="src/components/messaging/ThreadList.tsx">
                      <path d="M19 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" data-id="3cdk2nr2u" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M12 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" data-id="fz7y06f6t" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" data-id="hphzvfvcz" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="m12 15-3-3a5.05 5.05 0 0 1 7 0l-3 3Z" data-id="yctda6ej4" data-path="src/components/messaging/ThreadList.tsx" />
                      <path d="M19 11a7 7 0 0 1-14 0" data-id="9an4bchgn" data-path="src/components/messaging/ThreadList.tsx" />
                    </svg>
                  </Button>
                </div>
              </Card>
          )}
          </div>
        }
      </ScrollArea>
    </div>);

};

export default ThreadList;