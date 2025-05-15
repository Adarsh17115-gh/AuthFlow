import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";

interface ChannelSettingsProps {
  channelName: string;
  workspaceName: string;
  onClose: () => void;
}

const ChannelSettings = ({ channelName, workspaceName, onClose }: ChannelSettingsProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const { toast } = useToast();

  // Form states
  const [channelDisplayName, setChannelDisplayName] = useState(channelName);
  const [channelTopic, setChannelTopic] = useState("Discussion about current projects and updates");
  const [isPrivate, setIsPrivate] = useState(false);
  const [enableThreadsOnly, setEnableThreadsOnly] = useState(true);
  const [allowFileUploads, setAllowFileUploads] = useState(true);
  const [autoDeleteMessages, setAutoDeleteMessages] = useState(false);
  const [deleteAfterDays, setDeleteAfterDays] = useState(30);

  const handleSaveGeneral = async () => {
    setIsLoading(true);
    try {
      // In a real app, we would save these details to the database

      toast({
        title: "Channel Updated",
        description: "Channel settings have been updated successfully."
      });
    } catch (error) {
      console.error("Error updating channel:", error);
      toast({
        title: "Error",
        description: "Failed to update channel settings",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteChannel = async () => {
    try {
      // In a real app, we would delete the channel from the database

      toast({
        title: "Channel Deleted",
        description: `The channel #${channelName} has been deleted`
      });

      setShowDeleteDialog(false);
      onClose();
    } catch (error) {
      console.error("Error deleting channel:", error);
      toast({
        title: "Error",
        description: "Failed to delete channel",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-[600px] max-h-[80vh] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between" data-id="n46f6mte7" data-path="src/components/workspace/ChannelSettings.tsx">
          <CardTitle>Channel Settings</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="j6d584hi4" data-path="src/components/workspace/ChannelSettings.tsx">
              <path d="M18 6 6 18" data-id="ee2fxkoge" data-path="src/components/workspace/ChannelSettings.tsx" />
              <path d="m6 6 12 12" data-id="a3tmjjr95" data-path="src/components/workspace/ChannelSettings.tsx" />
            </svg>
          </Button>
        </div>
        <CardDescription>
          Manage settings for #{channelName} in {workspaceName}
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="general" className="flex-1 overflow-hidden">
        <div className="px-6" data-id="4to325mm1" data-path="src/components/workspace/ChannelSettings.tsx">
          <TabsList className="w-full grid grid-cols-2">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="general" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="veflbyhu7" data-path="src/components/workspace/ChannelSettings.tsx">
            <div className="space-y-4" data-id="2kui3rg1p" data-path="src/components/workspace/ChannelSettings.tsx">
              <h3 className="text-sm font-medium" data-id="vqkvz60r5" data-path="src/components/workspace/ChannelSettings.tsx">Channel Information</h3>
              
              <div className="space-y-2" data-id="coenobzt5" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="channel-name">Channel Name</Label>
                <Input
                  id="channel-name"
                  value={channelDisplayName}
                  onChange={(e) => setChannelDisplayName(e.target.value)}
                  placeholder="e.g. project-updates" />

                <p className="text-xs text-muted-foreground" data-id="dhgsljv4o" data-path="src/components/workspace/ChannelSettings.tsx">
                  Channel names can't contain spaces or special characters
                </p>
              </div>
              
              <div className="space-y-2" data-id="txns0ddtn" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="channel-topic">Channel Topic</Label>
                <Textarea
                  id="channel-topic"
                  value={channelTopic}
                  onChange={(e) => setChannelTopic(e.target.value)}
                  placeholder="What is this channel about?"
                  rows={3} />

                <p className="text-xs text-muted-foreground" data-id="4patlrip2" data-path="src/components/workspace/ChannelSettings.tsx">
                  A brief topic helps others understand the channel's purpose
                </p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="n1rmk8cgu" data-path="src/components/workspace/ChannelSettings.tsx">
              <h3 className="text-sm font-medium" data-id="8jrvtxo95" data-path="src/components/workspace/ChannelSettings.tsx">Channel Access</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="3uytmw3nc" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="private-channel" className="flex flex-col space-y-1">
                  <span data-id="waoroop7d" data-path="src/components/workspace/ChannelSettings.tsx">Private channel</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="lnh7nz021" data-path="src/components/workspace/ChannelSettings.tsx">
                    Only invited members can access this channel
                  </span>
                </Label>
                <Switch
                  id="private-channel"
                  checked={isPrivate}
                  onCheckedChange={setIsPrivate} />

              </div>
            </div>
            
            <div className="pt-4" data-id="syx77i0h9" data-path="src/components/workspace/ChannelSettings.tsx">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSaveGeneral}
                disabled={isLoading}>

                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="advanced" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="aaqj52hx1" data-path="src/components/workspace/ChannelSettings.tsx">
            <div className="space-y-4" data-id="f1n8bo0o9" data-path="src/components/workspace/ChannelSettings.tsx">
              <h3 className="text-sm font-medium" data-id="niyvxx8zl" data-path="src/components/workspace/ChannelSettings.tsx">Communication Settings</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="iog1sghfo" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="threads-only" className="flex flex-col space-y-1">
                  <span data-id="smk9s8vne" data-path="src/components/workspace/ChannelSettings.tsx">Threads only mode</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="dojfzun3f" data-path="src/components/workspace/ChannelSettings.tsx">
                    Only allow thread-based communication (no direct messages)
                  </span>
                </Label>
                <Switch
                  id="threads-only"
                  checked={enableThreadsOnly}
                  onCheckedChange={setEnableThreadsOnly} />

              </div>
              
              <div className="flex items-center justify-between space-x-2" data-id="ycz5spzg2" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="allow-uploads" className="flex flex-col space-y-1">
                  <span data-id="jjllhvzjf" data-path="src/components/workspace/ChannelSettings.tsx">Allow file uploads</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="frpourehr" data-path="src/components/workspace/ChannelSettings.tsx">
                    Enable file and image attachments in this channel
                  </span>
                </Label>
                <Switch
                  id="allow-uploads"
                  checked={allowFileUploads}
                  onCheckedChange={setAllowFileUploads} />

              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="u1ezknrh2" data-path="src/components/workspace/ChannelSettings.tsx">
              <h3 className="text-sm font-medium" data-id="kkhpubfxc" data-path="src/components/workspace/ChannelSettings.tsx">Retention Policy</h3>
              
              <div className="flex items-center justify-between space-x-2" data-id="cnoewfqso" data-path="src/components/workspace/ChannelSettings.tsx">
                <Label htmlFor="auto-delete" className="flex flex-col space-y-1">
                  <span data-id="d9ma2e05d" data-path="src/components/workspace/ChannelSettings.tsx">Automatically delete messages</span>
                  <span className="text-xs font-normal text-muted-foreground" data-id="jxym6788m" data-path="src/components/workspace/ChannelSettings.tsx">
                    Messages will be permanently deleted after a specified time
                  </span>
                </Label>
                <Switch
                  id="auto-delete"
                  checked={autoDeleteMessages}
                  onCheckedChange={setAutoDeleteMessages} />

              </div>
              
              {autoDeleteMessages &&
              <div className="space-y-2 pl-6" data-id="n3lgoij9j" data-path="src/components/workspace/ChannelSettings.tsx">
                  <Label htmlFor="delete-after">Delete after (days)</Label>
                  <Input
                  id="delete-after"
                  type="number"
                  min="1"
                  value={deleteAfterDays}
                  onChange={(e) => setDeleteAfterDays(parseInt(e.target.value))}
                  className="w-20" />

                </div>
              }
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="bwo8d77d4" data-path="src/components/workspace/ChannelSettings.tsx">
              <h3 className="text-sm font-medium" data-id="g48c8qyj4" data-path="src/components/workspace/ChannelSettings.tsx">Danger Zone</h3>
              <p className="text-sm text-muted-foreground" data-id="ip8hexnyo" data-path="src/components/workspace/ChannelSettings.tsx">
                Once you delete a channel, there is no going back. Please be certain.
              </p>
              
              <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogTrigger asChild>
                  <Button variant="destructive">
                    Delete Channel
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Channel</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete #{channelName}? All messages and files will be permanently removed. This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4" data-id="2x2yz919h" data-path="src/components/workspace/ChannelSettings.tsx">
                    <div className="grid gap-2" data-id="d6qjwc80a" data-path="src/components/workspace/ChannelSettings.tsx">
                      <Label htmlFor="confirm-delete">Type the channel name to confirm</Label>
                      <Input id="confirm-delete" placeholder={channelName} />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDeleteChannel}>
                      Delete Channel
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <CardFooter className="border-t p-4 bg-slate-50">
        <div className="flex justify-between w-full" data-id="4brx64jk0" data-path="src/components/workspace/ChannelSettings.tsx">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSaveGeneral}
            disabled={isLoading}>

            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </CardFooter>
    </Card>);

};

export default ChannelSettings;