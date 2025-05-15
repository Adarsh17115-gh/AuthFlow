import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface WorkspaceSettingsProps {
  workspaceName: string;
  onClose: () => void;
}

const WorkspaceSettings = ({ workspaceName, onClose }: WorkspaceSettingsProps) => {
  const [activeTab, setActiveTab] = useState("general");
  const [workspaceDisplayName, setWorkspaceDisplayName] = useState(workspaceName);
  const [workspaceDescription, setWorkspaceDescription] = useState("A collaborative workspace for team communication.");
  const [isLoading, setIsLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showInviteDialog, setShowInviteDialog] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const { toast } = useToast();

  // Mock members data
  const [members, setMembers] = useState([
  {
    id: "user-1",
    name: "Sarah Johnson",
    email: "sarah@example.com",
    role: "admin",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
    initials: "SJ"
  },
  {
    id: "user-2",
    name: "Alex Rodriguez",
    email: "alex@example.com",
    role: "member",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    initials: "AR"
  },
  {
    id: "user-3",
    name: "Jamie Liu",
    email: "jamie@example.com",
    role: "member",
    avatar: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
    initials: "JL"
  }]
  );

  const handleSaveGeneral = async () => {
    setIsLoading(true);
    try {
      // In a real app, we would save these details to the database

      toast({
        title: "Workspace Updated",
        description: "Your workspace details have been updated successfully."
      });
    } catch (error) {
      console.error("Error updating workspace:", error);
      toast({
        title: "Error",
        description: "Failed to update workspace details",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInviteMember = async () => {
    if (!inviteEmail.trim()) return;

    try {
      // In a real app, we would send an invitation email

      toast({
        title: "Invitation Sent",
        description: `An invitation has been sent to ${inviteEmail}`
      });

      setInviteEmail("");
      setShowInviteDialog(false);
    } catch (error) {
      console.error("Error inviting member:", error);
      toast({
        title: "Error",
        description: "Failed to send invitation",
        variant: "destructive"
      });
    }
  };

  const handleUpdateMemberRole = async (userId: string, newRole: string) => {
    try {
      // In a real app, we would update the member's role in the database

      const updatedMembers = members.map((member) =>
      member.id === userId ? { ...member, role: newRole } : member
      );

      setMembers(updatedMembers);

      toast({
        title: "Role Updated",
        description: `Member role has been updated to ${newRole}`
      });
    } catch (error) {
      console.error("Error updating role:", error);
      toast({
        title: "Error",
        description: "Failed to update member role",
        variant: "destructive"
      });
    }
  };

  const handleRemoveMember = async (userId: string) => {
    try {
      // In a real app, we would remove the member from the database

      const updatedMembers = members.filter((member) => member.id !== userId);
      setMembers(updatedMembers);

      toast({
        title: "Member Removed",
        description: "The member has been removed from this workspace"
      });
    } catch (error) {
      console.error("Error removing member:", error);
      toast({
        title: "Error",
        description: "Failed to remove member",
        variant: "destructive"
      });
    }
  };

  const handleDeleteWorkspace = async () => {
    try {
      // In a real app, we would delete the workspace from the database

      toast({
        title: "Workspace Deleted",
        description: "The workspace has been deleted permanently"
      });

      setShowDeleteDialog(false);
      onClose();
    } catch (error) {
      console.error("Error deleting workspace:", error);
      toast({
        title: "Error",
        description: "Failed to delete workspace",
        variant: "destructive"
      });
    }
  };

  return (
    <Card className="w-[700px] max-h-[80vh] flex flex-col">
      <CardHeader>
        <div className="flex items-center justify-between" data-id="4hqnh914o" data-path="src/components/workspace/WorkspaceSettings.tsx">
          <CardTitle>Workspace Settings</CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" data-id="t5z7gi2r" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <path d="M18 6 6 18" data-id="h9d3748y6" data-path="src/components/workspace/WorkspaceSettings.tsx" />
              <path d="m6 6 12 12" data-id="japnbtoxx" data-path="src/components/workspace/WorkspaceSettings.tsx" />
            </svg>
          </Button>
        </div>
        <CardDescription>
          Manage settings for the {workspaceName} workspace
        </CardDescription>
      </CardHeader>
      
      <Tabs defaultValue="general" className="flex-1 overflow-hidden" value={activeTab} onValueChange={setActiveTab}>
        <div className="px-6" data-id="b1d5l70fy" data-path="src/components/workspace/WorkspaceSettings.tsx">
          <TabsList className="w-full grid grid-cols-3">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="danger">Danger Zone</TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="general" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="g14xcx70c" data-path="src/components/workspace/WorkspaceSettings.tsx">
            <div className="space-y-4" data-id="xcqvbtwr4" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="05h5xg94h" data-path="src/components/workspace/WorkspaceSettings.tsx">Workspace Details</h3>
              
              <div className="space-y-2" data-id="2sn5igmf6" data-path="src/components/workspace/WorkspaceSettings.tsx">
                <Label htmlFor="workspace-name">Workspace Name</Label>
                <Input
                  id="workspace-name"
                  value={workspaceDisplayName}
                  onChange={(e) => setWorkspaceDisplayName(e.target.value)} />

              </div>
              
              <div className="space-y-2" data-id="474pbnokg" data-path="src/components/workspace/WorkspaceSettings.tsx">
                <Label htmlFor="workspace-description">Description</Label>
                <Input
                  id="workspace-description"
                  value={workspaceDescription}
                  onChange={(e) => setWorkspaceDescription(e.target.value)} />

                <p className="text-xs text-muted-foreground" data-id="qvvdi4pwy" data-path="src/components/workspace/WorkspaceSettings.tsx">
                  A brief description of the workspace and its purpose.
                </p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="85aatqals" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="v3z7z4yun" data-path="src/components/workspace/WorkspaceSettings.tsx">Workspace Image</h3>
              <div className="flex items-center gap-4" data-id="m0q61ms18" data-path="src/components/workspace/WorkspaceSettings.tsx">
                <Avatar className="h-20 w-20">
                  <AvatarImage src="https://github.com/shadcn.png" alt={workspaceDisplayName} />
                  <AvatarFallback>{workspaceDisplayName.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <Button variant="outline">Upload Image</Button>
              </div>
            </div>
            
            <div className="pt-4" data-id="1fnm5z93a" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <Button
                className="bg-blue-600 hover:bg-blue-700"
                onClick={handleSaveGeneral}
                disabled={isLoading}>

                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="members" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="5yfh6ozph" data-path="src/components/workspace/WorkspaceSettings.tsx">
            <div className="flex items-center justify-between" data-id="u1s5gomot" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="tm9dthduk" data-path="src/components/workspace/WorkspaceSettings.tsx">Workspace Members</h3>
              <Dialog open={showInviteDialog} onOpenChange={setShowInviteDialog}>
                <DialogTrigger asChild>
                  <Button size="sm">Invite Members</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Invite Member</DialogTitle>
                    <DialogDescription>
                      Invite a new member to join the {workspaceName} workspace.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4" data-id="79wphad7o" data-path="src/components/workspace/WorkspaceSettings.tsx">
                    <div className="grid gap-2" data-id="drm55l7bu" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      <Label htmlFor="invite-email">Email Address</Label>
                      <Input
                        id="invite-email"
                        type="email"
                        placeholder="colleague@example.com"
                        value={inviteEmail}
                        onChange={(e) => setInviteEmail(e.target.value)} />

                    </div>
                    <div className="grid gap-2" data-id="df12va6ly" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      <Label>Role</Label>
                      <div className="flex items-center space-x-2" data-id="ld3scsf73" data-path="src/components/workspace/WorkspaceSettings.tsx">
                        <input type="radio" id="role-member" name="role" value="member" defaultChecked data-id="l15v1eq9z" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                        <Label htmlFor="role-member">Member</Label>
                      </div>
                      <div className="flex items-center space-x-2" data-id="ec60krt2g" data-path="src/components/workspace/WorkspaceSettings.tsx">
                        <input type="radio" id="role-admin" name="role" value="admin" data-id="45q58tky1" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                        <Label htmlFor="role-admin">Admin</Label>
                      </div>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowInviteDialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={handleInviteMember}>Send Invitation</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
            
            <ScrollArea className="h-[400px]">
              <div className="space-y-4" data-id="cusz4enf8" data-path="src/components/workspace/WorkspaceSettings.tsx">
                {members.map((member) =>
                <div key={member.id} className="flex items-center justify-between p-3 rounded-md border" data-id="jkertfepy" data-path="src/components/workspace/WorkspaceSettings.tsx">
                    <div className="flex items-center gap-3" data-id="y3to67sj3" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.initials}</AvatarFallback>
                      </Avatar>
                      <div data-id="vo7hskusa" data-path="src/components/workspace/WorkspaceSettings.tsx">
                        <p className="font-medium" data-id="vtdn7zes7" data-path="src/components/workspace/WorkspaceSettings.tsx">{member.name}</p>
                        <p className="text-sm text-muted-foreground" data-id="opshkgffy" data-path="src/components/workspace/WorkspaceSettings.tsx">{member.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2" data-id="8754wtvmz" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      <select
                      value={member.role}
                      onChange={(e) => handleUpdateMemberRole(member.id, e.target.value)}
                      className="rounded-md border-input bg-transparent px-3 py-1 text-sm" data-id="g66oz86lu" data-path="src/components/workspace/WorkspaceSettings.tsx">

                        <option value="admin" data-id="t10wnca6y" data-path="src/components/workspace/WorkspaceSettings.tsx">Admin</option>
                        <option value="member" data-id="2x15uynvm" data-path="src/components/workspace/WorkspaceSettings.tsx">Member</option>
                      </select>
                      <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveMember(member.id)}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-red-500" data-id="gs4qo9br5" data-path="src/components/workspace/WorkspaceSettings.tsx">
                          <path d="M3 6h18" data-id="5zjkxs0xp" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" data-id="5kkyw4xbd" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" data-id="61gq3sl0d" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </TabsContent>
        
        <TabsContent value="danger" className="flex-1 overflow-auto p-6 pt-2">
          <div className="space-y-6" data-id="s1gz4pvvz" data-path="src/components/workspace/WorkspaceSettings.tsx">
            <div className="rounded-md border border-red-200 bg-red-50 p-4" data-id="64n72rk6c" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <div className="flex" data-id="g3zdatl5g" data-path="src/components/workspace/WorkspaceSettings.tsx">
                <div className="flex-shrink-0" data-id="kedvttzyj" data-path="src/components/workspace/WorkspaceSettings.tsx">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-red-500" data-id="cs4vqkl9f" data-path="src/components/workspace/WorkspaceSettings.tsx">
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" data-id="6ttxc2718" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                    <path d="M12 9v4" data-id="ul61y6c9v" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                    <path d="M12 17h.01" data-id="zy5wj81bs" data-path="src/components/workspace/WorkspaceSettings.tsx" />
                  </svg>
                </div>
                <div className="ml-3" data-id="d8z6ayzhd" data-path="src/components/workspace/WorkspaceSettings.tsx">
                  <h3 className="text-sm font-medium text-red-800" data-id="bi1pm28a5" data-path="src/components/workspace/WorkspaceSettings.tsx">Warning</h3>
                  <div className="mt-2 text-sm text-red-700" data-id="jcsyue015" data-path="src/components/workspace/WorkspaceSettings.tsx">
                    <p data-id="y2s620871" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      The actions below are destructive and cannot be undone. Please proceed with caution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4" data-id="377z3vu40" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="qae48po0q" data-path="src/components/workspace/WorkspaceSettings.tsx">Transfer Ownership</h3>
              <p className="text-sm text-muted-foreground" data-id="o9deu0wb0" data-path="src/components/workspace/WorkspaceSettings.tsx">
                Transfer ownership of this workspace to another member.
              </p>
              <div className="flex gap-2" data-id="qrgvgle0u" data-path="src/components/workspace/WorkspaceSettings.tsx">
                <select
                  className="flex h-9 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 flex-1" data-id="og1v59598" data-path="src/components/workspace/WorkspaceSettings.tsx">

                  <option value="" data-id="11mx8bfsy" data-path="src/components/workspace/WorkspaceSettings.tsx">Select a member</option>
                  {members.filter((m) => m.role !== "admin").map((member) =>
                  <option key={member.id} value={member.id} data-id="v5zgxibad" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      {member.name} ({member.email})
                    </option>
                  )}
                </select>
                <Button variant="outline">Transfer</Button>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="h3rx82u21" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="54vyyfpy6" data-path="src/components/workspace/WorkspaceSettings.tsx">Archive Workspace</h3>
              <p className="text-sm text-muted-foreground" data-id="v69ocoxxh" data-path="src/components/workspace/WorkspaceSettings.tsx">
                Archive this workspace. Archived workspaces can be restored later.
              </p>
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-50">
                Archive Workspace
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-4" data-id="8qbmlz84a" data-path="src/components/workspace/WorkspaceSettings.tsx">
              <h3 className="text-sm font-medium" data-id="tihsptxf1" data-path="src/components/workspace/WorkspaceSettings.tsx">Delete Workspace</h3>
              <p className="text-sm text-muted-foreground" data-id="jmm2jz2nm" data-path="src/components/workspace/WorkspaceSettings.tsx">
                Permanently delete this workspace and all of its data. This action cannot be undone.
              </p>
              <Dialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                <DialogTrigger asChild>
                  <Button variant="destructive">
                    Delete Workspace
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Delete Workspace</DialogTitle>
                    <DialogDescription>
                      Are you sure you want to delete the "{workspaceName}" workspace? All data will be permanently removed. This action cannot be undone.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4" data-id="j5eholyhm" data-path="src/components/workspace/WorkspaceSettings.tsx">
                    <div className="grid gap-2" data-id="55gl4gfix" data-path="src/components/workspace/WorkspaceSettings.tsx">
                      <Label htmlFor="confirm-delete">Confirm by typing "delete"</Label>
                      <Input id="confirm-delete" />
                    </div>
                  </div>
                  <DialogFooter>
                    <Button variant="outline" onClick={() => setShowDeleteDialog(false)}>
                      Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDeleteWorkspace}>
                      Delete Permanently
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </TabsContent>
      </Tabs>
      
      <CardFooter className="border-t p-4 bg-slate-50">
        <div className="flex justify-between w-full" data-id="bolmsy026" data-path="src/components/workspace/WorkspaceSettings.tsx">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          {activeTab === "general" &&
          <Button
            className="bg-blue-600 hover:bg-blue-700"
            onClick={handleSaveGeneral}
            disabled={isLoading}>

              {isLoading ? "Saving..." : "Save Changes"}
            </Button>
          }
        </div>
      </CardFooter>
    </Card>);

};

export default WorkspaceSettings;