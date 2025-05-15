import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface SidebarProps {
  activeWorkspace: string;
  setActiveWorkspace: (workspace: string) => void;
  activeChannel: string;
  setActiveChannel: (channel: string) => void;
}

const Sidebar = ({
  activeWorkspace,
  setActiveWorkspace,
  activeChannel,
  setActiveChannel
}: SidebarProps) => {
  const [workspaces, setWorkspaces] = useState([
  { id: "engineering", name: "Engineering" },
  { id: "design", name: "Design" },
  { id: "marketing", name: "Marketing" }]
  );

  const [channels, setChannels] = useState([
  { id: "general", name: "general", unread: false },
  { id: "random", name: "random", unread: true },
  { id: "announcements", name: "announcements", unread: false },
  { id: "projects", name: "projects", unread: true }]
  );

  const [newWorkspaceName, setNewWorkspaceName] = useState("");
  const [newChannelName, setNewChannelName] = useState("");
  const [isCreateWorkspaceOpen, setIsCreateWorkspaceOpen] = useState(false);
  const [isCreateChannelOpen, setIsCreateChannelOpen] = useState(false);

  const { toast } = useToast();

  const handleCreateWorkspace = () => {
    if (newWorkspaceName.trim()) {
      const newWorkspace = {
        id: newWorkspaceName.toLowerCase().replace(/\s+/g, "-"),
        name: newWorkspaceName
      };
      setWorkspaces([...workspaces, newWorkspace]);
      setNewWorkspaceName("");
      setIsCreateWorkspaceOpen(false);

      toast({
        title: "Workspace Created",
        description: `${newWorkspaceName} workspace has been created successfully.`
      });
    }
  };

  const handleCreateChannel = () => {
    if (newChannelName.trim()) {
      const newChannel = {
        id: newChannelName.toLowerCase().replace(/\s+/g, "-"),
        name: newChannelName,
        unread: false
      };
      setChannels([...channels, newChannel]);
      setNewChannelName("");
      setIsCreateChannelOpen(false);

      toast({
        title: "Channel Created",
        description: `#${newChannelName} channel has been created in ${activeWorkspace}.`
      });
    }
  };

  return (
    <div className="w-64 border-r border-border flex flex-col bg-background" data-id="2utcd93li" data-path="src/components/sidebar/Sidebar.tsx">
      <div className="p-4" data-id="1b4b72eju" data-path="src/components/sidebar/Sidebar.tsx">
        <div className="flex items-center justify-between" data-id="75r6el2yp" data-path="src/components/sidebar/Sidebar.tsx">
          <h2 className="font-semibold text-sm" data-id="dg9yk4m4v" data-path="src/components/sidebar/Sidebar.tsx">WORKSPACES</h2>
          <Dialog open={isCreateWorkspaceOpen} onOpenChange={setIsCreateWorkspaceOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="c26qwp2ru" data-path="src/components/sidebar/Sidebar.tsx">
                  <path d="M12 5v14M5 12h14" data-id="sjpikyjtb" data-path="src/components/sidebar/Sidebar.tsx" />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Workspace</DialogTitle>
                <DialogDescription>
                  Create a new workspace for your team.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4" data-id="grswoge70" data-path="src/components/sidebar/Sidebar.tsx">
                <div className="grid gap-2" data-id="frn97zvff" data-path="src/components/sidebar/Sidebar.tsx">
                  <Label htmlFor="workspace-name">Workspace Name</Label>
                  <Input
                    id="workspace-name"
                    value={newWorkspaceName}
                    onChange={(e) => setNewWorkspaceName(e.target.value)}
                    placeholder="e.g. Project Phoenix" />

                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateWorkspaceOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateWorkspace}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className="h-[120px] mt-2">
          <div className="space-y-1" data-id="sgw3vgfdh" data-path="src/components/sidebar/Sidebar.tsx">
            {workspaces.map((workspace) =>
            <Button
              key={workspace.id}
              variant={activeWorkspace === workspace.name ? "secondary" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveWorkspace(workspace.name)}>

                {workspace.name}
              </Button>
            )}
          </div>
        </ScrollArea>
      </div>
      
      <Separator />
      
      <div className="p-4 flex-1 overflow-hidden flex flex-col" data-id="e4hh1h79w" data-path="src/components/sidebar/Sidebar.tsx">
        <div className="flex items-center justify-between" data-id="l2g2hm5za" data-path="src/components/sidebar/Sidebar.tsx">
          <h2 className="font-semibold text-sm" data-id="9peg9re6c" data-path="src/components/sidebar/Sidebar.tsx">CHANNELS</h2>
          <Dialog open={isCreateChannelOpen} onOpenChange={setIsCreateChannelOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="icon" className="h-5 w-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="qzzmo6o88" data-path="src/components/sidebar/Sidebar.tsx">
                  <path d="M12 5v14M5 12h14" data-id="gvy8d0cc8" data-path="src/components/sidebar/Sidebar.tsx" />
                </svg>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create Channel</DialogTitle>
                <DialogDescription>
                  Create a new channel in the {activeWorkspace} workspace.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4" data-id="23vhnyb19" data-path="src/components/sidebar/Sidebar.tsx">
                <div className="grid gap-2" data-id="pgqvsd3bl" data-path="src/components/sidebar/Sidebar.tsx">
                  <Label htmlFor="channel-name">Channel Name</Label>
                  <Input
                    id="channel-name"
                    value={newChannelName}
                    onChange={(e) => setNewChannelName(e.target.value)}
                    placeholder="e.g. project-updates" />

                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsCreateChannelOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={handleCreateChannel}>Create</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <ScrollArea className="flex-1 mt-2">
          <div className="space-y-1" data-id="dwa3fz7bm" data-path="src/components/sidebar/Sidebar.tsx">
            {channels.map((channel) =>
            <Button
              key={channel.id}
              variant={activeChannel === channel.id ? "secondary" : "ghost"}
              className="w-full justify-start relative"
              onClick={() => setActiveChannel(channel.id)}>

                # {channel.name}
                {channel.unread &&
              <span className="absolute right-2 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full" data-id="zdwmc7x02" data-path="src/components/sidebar/Sidebar.tsx" />
              }
              </Button>
            )}
          </div>
        </ScrollArea>
      </div>
      
      <Separator />
      
      <div className="p-4" data-id="htaozeazd" data-path="src/components/sidebar/Sidebar.tsx">
        <Collapsible className="space-y-2">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm font-medium w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="s1a3cfv4q" data-path="src/components/sidebar/Sidebar.tsx">
              <path d="M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7a3 3 0 0 0-6 0 3 3 0 0 0-6 0 3 3 0 1 0-6 0Z" data-id="qdjfrrojj" data-path="src/components/sidebar/Sidebar.tsx" />
            </svg>
            Direct Messages
          </CollapsibleTrigger>
          <CollapsibleContent>
            <ScrollArea className="h-[100px]">
              <div className="space-y-1" data-id="zn6sdhc5v" data-path="src/components/sidebar/Sidebar.tsx">
                <Button variant="ghost" className="w-full justify-start">
                  Sarah Johnson
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Alex Rodriguez
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  Jamie Liu
                </Button>
              </div>
            </ScrollArea>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>);

};

export default Sidebar;