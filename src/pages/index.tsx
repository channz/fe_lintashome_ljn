import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import POPCard from "@/components/pop-card";
import { CirclePlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Homepage = () => {
  const data = [
    { key: 1, pop_name: "POP 1", total: 100, online: 80, offline: 20 },
    { key: 2, pop_name: "POP 2", total: 150, online: 120, offline: 30 },
    { key: 3, pop_name: "POP 3", total: 200, online: 160, offline: 40 },
    { key: 4, pop_name: "POP 4", total: 250, online: 200, offline: 50 },
    { key: 5, pop_name: "POP 5", total: 100, online: 80, offline: 20 },
    { key: 6, pop_name: "POP 6", total: 150, online: 120, offline: 30 },
    { key: 7, pop_name: "POP 7", total: 200, online: 160, offline: 40 },
    { key: 8, pop_name: "POP 8", total: 250, online: 200, offline: 50 },
  ];
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const closeAddDialog = () => {
    setIsAddDialogOpen(false);
  };

  return (
    <Layout>
      <div className="flex flex-col my-4 gap-y-4">
        <div className="flex">
          <div className="flex grow">
            <p className="font-semibold text-lg">NOM Surabaya Monitoring</p>
          </div>
          <div className="flex justify-end items-end">
            <p className="text-sm">
              15.00,
              <span> 05 May 2024</span>
              <span className="px-4">|</span>
            </p>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger>
                <CirclePlus className="w-5 h-5" />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add POP</DialogTitle>
                  <DialogDescription>
                    Add a new POP here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="pop-name" className="text-right">
                      POP Name
                    </Label>
                    <Input
                      id="pop-name"
                      placeholder="POP Rungkut"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="host" className="text-right">
                      Host
                    </Label>
                    <Input
                      id="host"
                      placeholder="100.100.100.1"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="user" className="text-right">
                      User
                    </Label>
                    <Input
                      id="user"
                      placeholder="beatcom"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                      Password
                    </Label>
                    <Input
                      id="password"
                      placeholder="beatcom"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="port" className="text-right">
                      Port
                    </Label>
                    <Input
                      id="port"
                      placeholder="2323"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button onClick={closeAddDialog} variant={"outline"}>
                    Cancel
                  </Button>
                  <Button className="bg-green-500 hover:bg-green-400">
                    Save Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="gap-4 justify-center grid grid-cols-4 mb-4">
          {data.map((item) => (
            <POPCard
              key={item.key}
              pop_name={item.pop_name}
              total={item.total}
              online={item.online}
              offline={item.offline}
            />
          ))}
        </div>
        <DataTable />
      </div>
    </Layout>
  );
};

export default Homepage;
