import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { deleteUserList, getDetailTable } from "@/utils/apis/table/api";
import { DetailTable } from "@/utils/apis/table/type";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";
import { useSelectedPopIdStore } from "@/utils/stores/selectedPop";
import { ArrowDown, CircleCheck, CircleCheckBig } from "lucide-react";
import { Button } from "./ui/button";

const DataTable = () => {
  const [data, setData] = useState<DetailTable[]>([]);
  const { selectedPopId } = useSelectedPopIdStore();

  useEffect(() => {
    fetchData();
  }, [selectedPopId]);

  useEffect(() => {
    const refresh = setInterval(() => {
      fetchData();
    }, 10000);

    return () => clearInterval(refresh);
  }, [selectedPopId]);

  async function fetchData() {
    try {
      const result = await getDetailTable();
      const filteredData = selectedPopId.length
        ? result.data.filter((item) => selectedPopId.includes(item.pop_id))
        : result.data;

      const sortedData = filteredData.sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );

      console.log("Data yang diurutkan berdasarkan createdAt:", sortedData);

      setData(sortedData);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  async function handleDelete(popID: string, userName: string) {
    try {
      const result = await deleteUserList(popID, userName);
      toast(result.message);
      fetchData();
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <div className="bg-white px-4 py-2 rounded-2xl shadow-sm">
      <Table className="min-w-full divide-y divide-gray-200 p-1 bg-white rounded-3xl">
        <TableHeader className="p-1 hover:bg-white">
          <TableRow className="p-1 hover:bg-white">
            <TableHead className="w-[50px] text-black py-1 px-2 text-center font-bold">
              No
            </TableHead>
            <TableHead className="text-black p-1 font-bold">User</TableHead>
            <TableHead className="text-black p-1 font-bold">POP Name</TableHead>
            <TableHead className="text-center text-black p-1 font-bold">
              Status
            </TableHead>
            <TableHead className="text-center text-black p-1 font-bold">
              Time
            </TableHead>
            <TableHead className="text-center text-black p-1 font-bold">
              Downtime
            </TableHead>
            <TableHead className="text-center text-black p-1 font-bold">
              Count
            </TableHead>
            <TableHead className="text-center p-1 font-bold">
              <div className="flex justify-center gap-2 bg-emerald-500 rounded-md py-2 text-white">
                <span>Solve</span>
                <CircleCheckBig className="w-4 h-4 my-auto" />
              </div>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="p-1">
          {data.length > 0 ? (
            data.map((datas, index) => (
              <TableRow key={datas.id} className="p-1 group">
                <TableCell className="font-semibold text-xs py-1 px-2 text-center group-hover:bg-amber-300">
                  {index + 1}
                </TableCell>
                <TableCell className="font-semibold text-xs p-1 group-hover:bg-amber-300">
                  {datas.user}
                </TableCell>
                <TableCell className="font-semibold text-xs p-1 group-hover:bg-amber-300">
                  {datas.pop}
                </TableCell>
                <TableCell className="p-1 group-hover:bg-amber-300">
                  <div className="flex gap-1 items-center justify-center">
                    <span className="flex">
                      <ArrowDown className="w-4 h-4 p-1 my-auto rounded-full text-red-500 bg-red-100 group-hover:bg-red-200 group-hover:text-red-600" />
                    </span>
                    <Badge className="bg-red-100 group-hover:bg-red-200 text-red-500 group-hover:text-red-600 text-[10px] font-medium rounded-full px-1">
                      {datas.status}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell className="text-center text-xs p-1 group-hover:bg-amber-300">
                  {datas.time}
                </TableCell>
                <TableCell className="font-semibold text-center text-red-500 text-xs p-1 group-hover:bg-amber-300">
                  {datas.downtime}
                </TableCell>
                <TableCell className="text-center text-xs p-1 group-hover:bg-amber-300">
                  {datas.count}
                </TableCell>
                <TableCell className="text-center text-xs p-1 border-l w-24 group-hover:bg-white">
                  <Button
                    className="shadow-md rounded-md bg-emerald-500 hover:bg-emerald-600"
                    size="xs"
                    onClick={() => handleDelete(datas.pop_id, datas.user)}
                  >
                    <CircleCheck className="w-4 h-4 hover:text-white/75" />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="text-center text-gray-500 py-4">
                No inactive POP cards available.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
