import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface NotificationItem {
  id: string;
  type: "mention" | "reply" | "system";
  content: string;
  sender: {
    name: string;
    avatar: string;
    initials: string;
  };
  workspace: string;
  channel: string;
  threadId?: string;
  timestamp: string;
  isRead: boolean;
}

interface NotificationCenterProps {
  onClose: () => void;
}

const NotificationCenter = ({ onClose }: NotificationCenterProps) => {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // In a real implementation, we would fetch notifications from the database
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setIsLoading(true);

        // Mock data for development
        setTimeout(() => {
          setNotifications([
          {
            id: "notification-1",
            type: "mention",
            content: "mentioned you in #project-updates",
            sender: {
              name: "Sarah Johnson",
              avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
              initials: "SJ"
            },
            workspace: "Engineering",
            channel: "project-updates",
            threadId: "thread-1",
            timestamp: "2 hours ago",
            isRead: false
          },
          {
            id: "notification-2",
            type: "reply",
            content: "replied to your thread in #general",
            sender: {
              name: "Alex Rodriguez",
              avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
              initials: "AR"
            },
            workspace: "Marketing",
            channel: "general",
            threadId: "thread-2",
            timestamp: "Yesterday",
            isRead: true
          },
          {
            id: "notification-3",
            type: "system",
            content: "You were added to the Design workspace",
            sender: {
              name: "System",
              avatar: "",
              initials: "SY"
            },
            workspace: "Design",
            channel: "",
            timestamp: "3 days ago",
            isRead: true
          }]
          );
          setIsLoading(false);
        }, 1000);

        // In production, uncomment this code
        /*
        try {
          const { data, error } = await window.ezsite.apis.tablePage(5068, {
            PageNo: 1,
            PageSize: 20,
            OrderByField: "created_at",
            IsAsc: false,
            Filters: [
              {
                name: "user_id",
                op: "Equal",
                value: userInfo.ID
              },
              {
                name: "is_read",
                op: "Equal",
                value: false
              }
            ]
          });
          
          if (error) throw error;
          
          // Transform the data
          const notificationItems = data.List.map((item: any) => ({
            id: item.ID,
            type: item.type,
            content: item.content,
            sender: {
              name: item.sender_name || "System",
              avatar: item.sender_avatar || "",
              initials: item.sender_name ? item.sender_name.split(" ").map((n: string) => n[0]).join("") : "SY"
            },
            workspace: item.workspace || "",
            channel: item.channel || "",
            threadId: item.related_id,
            timestamp: new Date(item.created_at).toLocaleString(),
            isRead: item.is_read
          }));
          
          setNotifications(notificationItems);
        } catch (error) {
          console.error("Error fetching notifications:", error);
          toast({
            title: "Error",
            description: "Failed to load notifications",
            variant: "destructive"
          });
        } finally {
          setIsLoading(false);
        }
        */
      } catch (error) {
        console.error("Error setting up notifications:", error);
        setIsLoading(false);
      }
    };

    fetchNotifications();
  }, [toast]);

  const markAsRead = async (notificationId: string) => {
    try {
      // In a real app, we would update the notification in the database
      const updatedNotifications = notifications.map((notification) =>
      notification.id === notificationId ?
      { ...notification, isRead: true } :
      notification
      );

      setNotifications(updatedNotifications);

      // In production, uncomment this code
      /*
      const { error } = await window.ezsite.apis.tableUpdate(5068, {
        ID: notificationId,
        is_read: true
      });
      
      if (error) throw error;
      */

      toast({
        title: "Notification marked as read",
        description: "The notification has been marked as read."
      });
    } catch (error) {
      console.error("Error marking notification as read:", error);
      toast({
        title: "Error",
        description: "Failed to update notification",
        variant: "destructive"
      });
    }
  };

  const markAllAsRead = async () => {
    try {
      // In a real app, we would update all notifications in the database
      const updatedNotifications = notifications.map((notification) => ({
        ...notification,
        isRead: true
      }));

      setNotifications(updatedNotifications);

      // In production, uncomment this code
      /*
      const unreadNotifications = notifications.filter(n => !n.isRead);
      for (const notification of unreadNotifications) {
        const { error } = await window.ezsite.apis.tableUpdate(5068, {
          ID: notification.id,
          is_read: true
        });
        
        if (error) throw error;
      }
      */

      toast({
        title: "All notifications marked as read",
        description: "All notifications have been marked as read."
      });
    } catch (error) {
      console.error("Error marking all notifications as read:", error);
      toast({
        title: "Error",
        description: "Failed to update notifications",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-80 max-h-[80vh] flex flex-col">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between" data-id="ijs3vldm6" data-path="src/components/notifications/NotificationCenter.tsx">
          <CardTitle>Notifications</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="y6owzoqzw" data-path="src/components/notifications/NotificationCenter.tsx">
              <path d="M18 6 6 18" data-id="r3297q4y6" data-path="src/components/notifications/NotificationCenter.tsx" />
              <path d="m6 6 12 12" data-id="kdp4smfuu" data-path="src/components/notifications/NotificationCenter.tsx" />
            </svg>
          </Button>
        </div>
        <CardDescription>
          Your recent notifications
        </CardDescription>
        <div className="flex justify-between items-center mt-2" data-id="vkgxy5tpn" data-path="src/components/notifications/NotificationCenter.tsx">
          <Button variant="outline" size="sm" onClick={markAllAsRead}>
            Mark all as read
          </Button>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="p-0 flex-1 overflow-hidden">
        <ScrollArea className="h-full max-h-[calc(80vh-8rem)]">
          {isLoading ?
          <div className="flex items-center justify-center p-6" data-id="dml84dm92" data-path="src/components/notifications/NotificationCenter.tsx">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600" data-id="o7t6zhfxy" data-path="src/components/notifications/NotificationCenter.tsx" />
            </div> :
          notifications.length === 0 ?
          <div className="p-6 text-center text-muted-foreground" data-id="mxrhj1z20" data-path="src/components/notifications/NotificationCenter.tsx">
              <p data-id="0hl2pqb3i" data-path="src/components/notifications/NotificationCenter.tsx">No notifications</p>
            </div> :

          <div className="py-2" data-id="nibnp8v52" data-path="src/components/notifications/NotificationCenter.tsx">
              {notifications.map((notification) =>
            <div
              key={notification.id}
              className={`flex items-start gap-3 p-3 hover:bg-muted/50 transition-colors ${
              !notification.isRead ? "bg-muted/30" : ""}`
              } data-id="r9xqekfu2" data-path="src/components/notifications/NotificationCenter.tsx">

                  <Avatar className="h-8 w-8">
                    {notification.sender.avatar ?
                <AvatarImage src={notification.sender.avatar} alt={notification.sender.name} /> :
                null}
                    <AvatarFallback>{notification.sender.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-1" data-id="a4wcti1ir" data-path="src/components/notifications/NotificationCenter.tsx">
                    <div className="flex justify-between" data-id="4qdbkdrph" data-path="src/components/notifications/NotificationCenter.tsx">
                      <p className="text-sm font-medium leading-none" data-id="h0k67kmz8" data-path="src/components/notifications/NotificationCenter.tsx">
                        {notification.sender.name}
                      </p>
                      <span className="text-xs text-muted-foreground" data-id="lwxer0onh" data-path="src/components/notifications/NotificationCenter.tsx">
                        {notification.timestamp}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground" data-id="ho37b9vx0" data-path="src/components/notifications/NotificationCenter.tsx">
                      {notification.content}
                    </p>
                    <div className="flex items-center gap-2 mt-1" data-id="q940yw8ap" data-path="src/components/notifications/NotificationCenter.tsx">
                      {notification.type === "mention" &&
                  <Badge variant="secondary" className="text-xs bg-blue-100 text-blue-800">
                          @mention
                        </Badge>
                  }
                      {notification.type === "reply" &&
                  <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                          reply
                        </Badge>
                  }
                      {notification.type === "system" &&
                  <Badge variant="secondary" className="text-xs bg-purple-100 text-purple-800">
                          system
                        </Badge>
                  }
                      <span className="text-xs text-muted-foreground" data-id="w5o9tzvhv" data-path="src/components/notifications/NotificationCenter.tsx">
                        {notification.workspace}
                        {notification.channel && ` • #${notification.channel}`}
                      </span>
                    </div>
                    <div className="flex gap-2 mt-2" data-id="ot6jrx9pp" data-path="src/components/notifications/NotificationCenter.tsx">
                      {!notification.isRead &&
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => markAsRead(notification.id)}>

                          Mark as read
                        </Button>
                  }
                      {notification.threadId &&
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => {
                      toast({
                        title: "View Thread",
                        description: `Navigating to thread in ${notification.workspace} • #${notification.channel}`
                      });
                      onClose();
                    }}>

                          View thread
                        </Button>
                  }
                    </div>
                  </div>
                </div>
            )}
            </div>
          }
        </ScrollArea>
      </CardContent>
    </Card>);

};

export default NotificationCenter;