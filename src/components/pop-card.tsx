import { Card } from "./ui/card";
import { Ellipsis, SquarePen, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  UpdateBulkpopSchema,
  updateBulkpopSchema,
} from "@/utils/apis/bulkpop/type";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { editBulkpop, getBulkpop } from "@/utils/apis/bulkpop/api";
import { toast } from "sonner";
import { CustomFormFieldTextRight } from "./custom-formfield";
import { Form } from "./ui/form";
import useBulkpopStore from "@/utils/stores/bulkpop";
interface Props {
  id: string;
  pop_name: string;
  total: string;
  online: string;
  offline: string;
  onClickDelete: () => void;
}

const POPCard = (props: Props) => {
  const { id, pop_name, total, online, offline, onClickDelete } = props;
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const { editDatas, setEditDatas } = useBulkpopStore();

  const form = useForm<UpdateBulkpopSchema>({
    resolver: zodResolver(updateBulkpopSchema),
    defaultValues: {
      name: editDatas ? editDatas.name : "",
      host: editDatas ? editDatas.host : "",
      user: editDatas ? editDatas.user : "",
      password: editDatas ? editDatas.password : "",
      port: editDatas ? editDatas.port : "",
    },
  });

  useEffect(() => {
    fetchData();
  }, [form.formState.isSubmitSuccessful]);

  async function fetchData() {
    try {
      const result = await getBulkpop();
      const filteredData = result.data.filter((elemen) => elemen.id == id);
      setEditDatas(filteredData[0]);
      form.setValue("name", filteredData[0].name);
      form.setValue("host", filteredData[0].host);
      form.setValue("user", filteredData[0].user);
      form.setValue("password", filteredData[0].password);
      form.setValue("port", filteredData[0].port);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  async function onSubmit(data: UpdateBulkpopSchema) {
    try {
      const result = await editBulkpop(id, data);

      toast(result.message);
      setIsEditDialogOpen(false);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  const handleEditClick = () => {
    setIsEditDialogOpen(true);
  };

  const handleDeleteClick = () => {
    setIsDeleteDialogOpen(true);
  };

  const closeEditDialog = () => {
    setIsEditDialogOpen(false);
  };

  const closeDeleteDialog = () => {
    setIsDeleteDialogOpen(false);
  };

  const totalNumber = parseInt(total, 10);
  const offlineNumber = parseInt(offline, 10);

  const bgColor =
    offlineNumber / totalNumber > 0.5
      ? "bg-gradient-to-tl from-red-600 to-red-400"
      : offlineNumber / totalNumber > 0.2
      ? "bg-gradient-to-tl from-amber-600 to-amber-400"
      : "bg-gradient-to-tl from-emerald-600 to-emerald-400";

  return (
    <Card className={`p-4 rounded-xl shadow-lg text-white ${bgColor}`}>
      <div className="flex mb-4">
        <div className="flex grow">
          <p className="font-bold text-lg me-14 md:me-8">POP {pop_name}</p>
        </div>
        <div className="flex justify-end mb-auto">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Ellipsis className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount>
              <DropdownMenuItem onClick={handleEditClick}>
                <SquarePen className="mr-2 h-4 w-4" />
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleDeleteClick}>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex flex-col mt-auto">
        <div className="flex">
          <p className="text-sm grow">Total POP </p>
          <p className="text-sm font-semibold">{total}</p>
        </div>
        <div className="flex">
          <p className="text-sm grow">Online </p>
          <p className="text-sm font-semibold">{online}</p>
        </div>
        <div className="flex">
          <p className="text-sm grow">Offline </p>
          <p className="text-sm font-semibold">{offline}</p>
        </div>
      </div>

      {/* Edit Dialog */}
      <Dialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
        key={editDatas?.id}
      >
        <DialogContent>
          <Form {...form}>
            <form action="" onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Edit POP</DialogTitle>
                <DialogDescription>
                  Make changes to POP here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-4 space-y-2 space-x-4 py-2">
                <div className="grid items-center">
                  <Label htmlFor="pop-name" className="text-right">
                    POP Name
                  </Label>
                </div>
                <div className="grid col-span-3">
                  <CustomFormFieldTextRight
                    control={form.control}
                    name="name"
                    label="POP Name"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="POP Rungkut"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label htmlFor="host" className="text-right">
                    Host
                  </Label>
                </div>
                <div className="grid col-span-3">
                  <CustomFormFieldTextRight
                    control={form.control}
                    name="host"
                    label="Host"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="100.100.100.1"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label htmlFor="user" className="text-right">
                    User
                  </Label>
                </div>
                <div className="grid col-span-3">
                  <CustomFormFieldTextRight
                    control={form.control}
                    name="user"
                    label="User"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="beatcom"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                </div>
                <div className="grid col-span-3">
                  <CustomFormFieldTextRight
                    control={form.control}
                    name="password"
                    label="Password"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="beatcom"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label htmlFor="port" className="text-right">
                    Port
                  </Label>
                </div>
                <div className="grid col-span-3">
                  <CustomFormFieldTextRight
                    control={form.control}
                    name="port"
                    label="Port"
                  >
                    {(field) => (
                      <Input
                        {...field}
                        placeholder="2323"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
              </div>
              <DialogFooter className="gap-2">
                <Button onClick={closeEditDialog} variant={"outline"}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-green-500 hover:bg-green-400"
                >
                  Save Changes
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>

      {/* Delete AlertDialog */}
      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription className="text-xs md:text-base">
              This action cannot be undone. This will permanently delete your
              POP and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="gap-2">
            <AlertDialogCancel onClick={closeDeleteDialog}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={onClickDelete}
              className="bg-red-500 hover:bg-red-400"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </Card>
  );
};

export default POPCard;
