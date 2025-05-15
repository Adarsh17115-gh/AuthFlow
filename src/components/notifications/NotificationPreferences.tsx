import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface NotificationPreferencesProps {
  onClose: () => void;
}

const NotificationPreferences = ({ onClose }: NotificationPreferencesProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Global preferences
  const [realTimeEnabled, setRealTimeEnabled] = useState(true);
  const [digestFrequency, setDigestFrequency] = useState("daily");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [focusModeEnabled, setFocusModeEnabled] = useState(false);
  const [focusHoursStart, setFocusHoursStart] = useState("09:00");
  const [focusHoursEnd, setFocusHoursEnd] = useState("17:00");

  // Type-specific preferences
  const [mentionNotifications, setMentionNotifications] = useState(true);
  const [replyNotifications, setReplyNotifications] = useState(true);
  const [threadNotifications, setThreadNotifications] = useState(true);
  const [channelNotifications, setChannelNotifications] = useState(false);
  const [systemNotifications, setSystemNotifications] = useState(true);

  const handleSavePreferences = async () => {
    setIsLoading(true);

    try {
      // In a real app, we would save these preferences to the database

      toast({
        title: "Preferences Saved",
        description: "Your notification preferences have been updated."
      });

      onClose();
    } catch (error) {
      console.error("Error saving preferences:", error);
      toast({
        title: "Error",
        description: "Failed to save notification preferences",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-[520px] max-h-[80vh] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between" data-id="xuosw0z81" data-path="src/components/notifications/NotificationPreferences.tsx">
          <CardTitle>Notification Preferences</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="99e4bwzn5" data-path="src/components/notifications/NotificationPreferences.tsx">
              <path d="M18 6 6 18" data-id="k8drjnmzf" data-path="src/components/notifications/NotificationPreferences.tsx" />
              <path d="m6 6 12 12" data-id="5oj9crjcy" data-path="src/components/notifications/NotificationPreferences.tsx" />
            </svg>
          </Button>
        </div>
        <CardDescription>
          Customize how and when you receive notifications
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="general" className="flex-1 overflow-hidden">
        <div className="px-6" data-id="mpsxt866h" data-path="src/components/notifications/NotificationPreferences.tsx">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="general" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="mpcmkr761" data-path="src/components/notifications/NotificationPreferences.tsx">
            <div className="space-y-4" data-id="rctca82lz" data-path="src/components/notifications/NotificationPreferences.tsx">
              <h3 className="text-sm font-medium" data-id="dpdte81og" data-path="src/components/notifications/NotificationPreferences.tsx">Notification Delivery</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="mfckdeiqo" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="real-time" className="flex flex-col space-y-1">
                  <span data-id="r667o6xzj" data-path="src/components/notifications/NotificationPreferences.tsx">Real-time notifications</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="l67t3ztnm" data-path="src/components/notifications/NotificationPreferences.tsx">
                    Receive notifications as they happen
                  </span>
                </Label>
                <Switch
                  id="real-time"
                  checked={realTimeEnabled}
                  onCheckedChange={setRealTimeEnabled} />

              </div>
              
              <div className="space-y-2" data-id="wb0xrmfl1" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label className="text-sm">Digest summary frequency</Label>
                <RadioGroup defaultValue={digestFrequency} onValueChange={setDigestFrequency}>
                  <div className="flex items-center space-x-2" data-id="flulw8uub" data-path="src/components/notifications/NotificationPreferences.tsx">
                    <RadioGroupItem value="hourly" id="hourly" />
                    <Label htmlFor="hourly">Hourly</Label>
                  </div>
                  <div className="flex items-center space-x-2" data-id="29jdiagr9" data-path="src/components/notifications/NotificationPreferences.tsx">
                    <RadioGroupItem value="daily" id="daily" />
                    <Label htmlFor="daily">Daily</Label>
                  </div>
                  <div className="flex items-center space-x-2" data-id="9e96hf7vg" data-path="src/components/notifications/NotificationPreferences.tsx">
                    <RadioGroupItem value="weekly" id="weekly" />
                    <Label htmlFor="weekly">Weekly</Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="bgcmqxa9i" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                  <span data-id="25oye0594" data-path="src/components/notifications/NotificationPreferences.tsx">Email notifications</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="jeg5b6odl" data-path="src/components/notifications/NotificationPreferences.tsx">
                    Receive important notifications via email
                  </span>
                </Label>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="6sb497vpl" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="sound-enabled" className="flex flex-col space-y-1">
                  <span data-id="cmsurrzsr" data-path="src/components/notifications/NotificationPreferences.tsx">Notification sounds</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="wspyzszzn" data-path="src/components/notifications/NotificationPreferences.tsx">
                    Play a sound when notifications arrive
                  </span>
                </Label>
                <Switch
                  id="sound-enabled"
                  checked={soundEnabled}
                  onCheckedChange={setSoundEnabled} />

              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="nhy3ri45b" data-path="src/components/notifications/NotificationPreferences.tsx">
              <h3 className="text-sm font-medium" data-id="yv017rgyy" data-path="src/components/notifications/NotificationPreferences.tsx">Notification Types</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="sgm4ffwj5" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="mention-notifications" className="flex flex-col space-y-1">
                  <span data-id="trdiugr2t" data-path="src/components/notifications/NotificationPreferences.tsx">@Mentions</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="79e2wz3we" data-path="src/components/notifications/NotificationPreferences.tsx">
                    When someone mentions you directly
                  </span>
                </Label>
                <Switch
                  id="mention-notifications"
                  checked={mentionNotifications}
                  onCheckedChange={setMentionNotifications} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="4arf0nphc" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="reply-notifications" className="flex flex-col space-y-1">
                  <span data-id="7s5c4d5l0" data-path="src/components/notifications/NotificationPreferences.tsx">Replies</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="u2jjkwgtc" data-path="src/components/notifications/NotificationPreferences.tsx">
                    When someone replies to your messages
                  </span>
                </Label>
                <Switch
                  id="reply-notifications"
                  checked={replyNotifications}
                  onCheckedChange={setReplyNotifications} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="xfh865517" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="thread-notifications" className="flex flex-col space-y-1">
                  <span data-id="qsdccp3dr" data-path="src/components/notifications/NotificationPreferences.tsx">Thread activity</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="vwu68758a" data-path="src/components/notifications/NotificationPreferences.tsx">
                    When there's activity in threads you're part of
                  </span>
                </Label>
                <Switch
                  id="thread-notifications"
                  checked={threadNotifications}
                  onCheckedChange={setThreadNotifications} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="gidonl0vl" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="channel-notifications" className="flex flex-col space-y-1">
                  <span data-id="1nr3gppkt" data-path="src/components/notifications/NotificationPreferences.tsx">Channel updates</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="v3r53qna4" data-path="src/components/notifications/NotificationPreferences.tsx">
                    All new messages in followed channels
                  </span>
                </Label>
                <Switch
                  id="channel-notifications"
                  checked={channelNotifications}
                  onCheckedChange={setChannelNotifications} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="ky425qyp4" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="system-notifications" className="flex flex-col space-y-1">
                  <span data-id="mq75ys8y3" data-path="src/components/notifications/NotificationPreferences.tsx">System notifications</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="xzpyp9k8r" data-path="src/components/notifications/NotificationPreferences.tsx">
                    Important system and workspace updates
                  </span>
                </Label>
                <Switch
                  id="system-notifications"
                  checked={systemNotifications}
                  onCheckedChange={setSystemNotifications} />

              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="sup1tata6" data-path="src/components/notifications/NotificationPreferences.tsx">
            <div className="space-y-4" data-id="5od1qlaa3" data-path="src/components/notifications/NotificationPreferences.tsx">
              <h3 className="text-sm font-medium" data-id="466vqe2n8" data-path="src/components/notifications/NotificationPreferences.tsx">Focus Mode</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="rwkjssu9n" data-path="src/components/notifications/NotificationPreferences.tsx">
                <Label htmlFor="focus-mode" className="flex flex-col space-y-1">
                  <span data-id="c6qgf6kmj" data-path="src/components/notifications/NotificationPreferences.tsx">Enable focus mode</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="s7q8l719j" data-path="src/components/notifications/NotificationPreferences.tsx">
                    Pause notifications during specific hours
                  </span>
                </Label>
                <Switch
                  id="focus-mode"
                  checked={focusModeEnabled}
                  onCheckedChange={setFocusModeEnabled} />

              </div>
              
              {focusModeEnabled &&
              <div className="grid grid-cols-2 gap-4 mt-2" data-id="djvcqelzn" data-path="src/components/notifications/NotificationPreferences.tsx">
                  <div className="space-y-2" data-id="h2sj81oyb" data-path="src/components/notifications/NotificationPreferences.tsx">
                    <Label htmlFor="focus-start">Start time</Label>
                    <input
                    id="focus-start"
                    type="time"
                    value={focusHoursStart}
                    onChange={(e) => setFocusHoursStart(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" data-id="e46zdv9yw" data-path="src/components/notifications/NotificationPreferences.tsx" />

                  </div>
                  <div className="space-y-2" data-id="mpqjysve8" data-path="src/components/notifications/NotificationPreferences.tsx">
                    <Label htmlFor="focus-end">End time</Label>
                    <input
                    id="focus-end"
                    type="time"
                    value={focusHoursEnd}
                    onChange={(e) => setFocusHoursEnd(e.target.value)}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50" data-id="vb2n3h0jc" data-path="src/components/notifications/NotificationPreferences.tsx" />

                  </div>
                </div>
              }
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="wlgbzn4el" data-path="src/components/notifications/NotificationPreferences.tsx">
              <h3 className="text-sm font-medium" data-id="dmhdtm8ee" data-path="src/components/notifications/NotificationPreferences.tsx">Muted Channels and Threads</h3>
              <p className="text-sm text-muted-foreground" data-id="t2gghrspa" data-path="src/components/notifications/NotificationPreferences.tsx">
                You can mute specific channels and threads from their respective menus.
              </p>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Manage Muted Items",
                    description: "This feature is coming soon!"
                  });
                }}>

                Manage muted items
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="n7pslkrjp" data-path="src/components/notifications/NotificationPreferences.tsx">
              <h3 className="text-sm font-medium" data-id="ea14zhg3f" data-path="src/components/notifications/NotificationPreferences.tsx">Reset Preferences</h3>
              <p className="text-sm text-muted-foreground" data-id="egynfors1" data-path="src/components/notifications/NotificationPreferences.tsx">
                Reset all notification preferences to default settings.
              </p>
              
              <Button
                variant="destructive"
                className="w-full"
                onClick={() => {
                  toast({
                    title: "Preferences Reset",
                    description: "Your notification preferences have been reset to defaults."
                  });

                  // Reset all states to defaults
                  setRealTimeEnabled(true);
                  setDigestFrequency("daily");
                  setEmailNotifications(true);
                  setSoundEnabled(true);
                  setFocusModeEnabled(false);
                  setFocusHoursStart("09:00");
                  setFocusHoursEnd("17:00");
                  setMentionNotifications(true);
                  setReplyNotifications(true);
                  setThreadNotifications(true);
                  setChannelNotifications(false);
                  setSystemNotifications(true);
                }}>

                Reset to defaults
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <CardFooter className="border-t p-4 bg-slate-50">
        <div className="flex justify-end gap-2 w-full" data-id="7cptdyccw" data-path="src/components/notifications/NotificationPreferences.tsx">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSavePreferences}
            disabled={isLoading}>

            {isLoading ? "Saving..." : "Save preferences"}
          </Button>
        </div>
      </CardFooter>
    </Card>);

};

export default NotificationPreferences;