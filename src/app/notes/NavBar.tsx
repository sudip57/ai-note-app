"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.png";
import { UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import AddEditNoteDialog from "@/components/AddEditNoteDialog";
import ThemeToggleButton from "@/components/ThemeToggle";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import AIChatButton from "@/components/AIChatButton";
const NavBar = () => {
  const { theme } = useTheme();
  const [showAddEditNoteDialog, setShowEditAddNoteDialog] = useState(false);

  return (
    <>
      <div className="p-4 shadow">
        <div className="max-w-7xl flex flex-wrap gap-3 justify-between items-center">
          <Link href="/notes" className="flex items-center gap-1">
            <Image src={logo} width={40} height={40} alt="FlowBrain Logo" />
            <span className="font-bold">FlowBrain</span>
          </Link>
          <div className="flex items-center gap-2">
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                baseTheme: theme === "dark" ? dark : undefined,
                elements: { avatarBox: { width: "2.5rem", height: "2.5rem" } },
              }}
            />
            <ThemeToggleButton />
            <Button onClick={() => setShowEditAddNoteDialog(true)}>
              <Plus size={20} className="mr-2" />
              Add Note
            </Button>
            <AIChatButton />
          </div>
        </div>
      </div>
      {showAddEditNoteDialog && (
        <AddEditNoteDialog
          open={showAddEditNoteDialog}
          setOpen={setShowEditAddNoteDialog}
        />
      )}
    </>
  );
};

export default NavBar;
