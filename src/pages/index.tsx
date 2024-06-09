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
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  AddBulkpopSchema,
  Bulkpop,
  addBulkpopSchema,
} from "@/utils/apis/bulkpop/type";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  createBulkpop,
  deleteBulkpop,
  getBulkpop,
} from "@/utils/apis/bulkpop/api";
import { toast } from "sonner";
import { Form } from "@/components/ui/form";
import { CustomFormFieldTextRight } from "@/components/custom-formfield";
import { format } from "date-fns";

const Homepage = () => {
  const [datas, setDatas] = useState<Bulkpop[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formattedDate: string = format(currentDate, "HH:mm:ss, dd MMMM yyyy");

  const form = useForm<AddBulkpopSchema>({
    resolver: zodResolver(addBulkpopSchema),
    defaultValues: {
      name: "",
      host: "",
      user: "",
      password: "",
      port: "",
    },
  });

  async function fetchData() {
    try {
      const result = await getBulkpop();

      setDatas(result.data);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  async function onSubmit(data: AddBulkpopSchema) {
    console.log("babi");
    console.log(data);
    try {
      const result = await createBulkpop(data);

      toast(result.message);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  async function handleDelete(bulkpopID: string) {
    try {
      const result = await deleteBulkpop(bulkpopID);

      toast(result.message);
      fetchData();
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  const handleAddClick = () => {
    setIsAddDialogOpen(true);
  };

  const closeAddDialog = () => {
    setIsAddDialogOpen(false);
  };

  return (
    <>
      <Layout>
        <div className="flex flex-col my-4 gap-y-4">
          <div className="flex">
            <div className="flex grow my-auto">
              <p className="text-wrap font-semibold text-base md:text-xl">
                Batu Monitoring
              </p>
            </div>
            <div className="flex my-auto justify-end items-end">
              <p className="text-xs md:text-sm">
                {formattedDate}
                <span className="px-1 md:px-4">|</span>
              </p>
              <CirclePlus
                className="w-4 h-4 md:w-5 md:h-5 hover:cursor-pointer"
                onClick={handleAddClick}
              />
            </div>
          </div>
          <div className="gap-4 grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mb-4">
            {datas.map((bulkpop) => (
              <POPCard
                key={bulkpop.id}
                pop_name={bulkpop.name}
                total={bulkpop.total}
                online={bulkpop.online}
                offline={bulkpop.offline}
                onClickDelete={() => handleDelete(bulkpop.id)}
              />
            ))}
          </div>
          <DataTable />
        </div>
      </Layout>
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <DialogHeader>
                <DialogTitle>Add POP</DialogTitle>
                <DialogDescription>
                  Add a new POP here. Click save when you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-4 space-y-2 space-x-4 py-2">
                <div className="grid items-center">
                  <Label className="text-right">POP Name</Label>
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
                        placeholder="POP Name"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label className="text-right">Host</Label>
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
                        placeholder="1.1.1.1"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label className="text-right">User</Label>
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
                        placeholder="user name"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label className="text-right">Password</Label>
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
                        placeholder="****"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
                <div className="grid items-center">
                  <Label className="text-right">Port</Label>
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
                        placeholder="3300"
                        disabled={form.formState.isSubmitting}
                        aria-disabled={form.formState.isSubmitting}
                        value={field.value as string}
                      />
                    )}
                  </CustomFormFieldTextRight>
                </div>
              </div>
              <DialogFooter>
                <Button onClick={closeAddDialog} variant={"outline"}>
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
    </>
  );
};

export default Homepage;
