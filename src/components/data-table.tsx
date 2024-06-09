import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getDetailTable } from "@/utils/apis/table/api";
import { DetailTable } from "@/utils/apis/table/type";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "./ui/badge";

const DataTable = () => {
  const [data, setData] = useState<DetailTable[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    console.log("babi");
    try {
      const result = await getDetailTable();
      console.log("babi2");
      console.log(result.data);

      setData(result.data);
    } catch (error) {
      console.log("babi3");

      toast((error as Error).message.toString());
    }
  }

  return (
    <Table>
      <TableHeader className="bg-slate-50">
        <TableRow className="hover:bg-slate-50">
          <TableHead className="w-[100px] text-black">No</TableHead>
          <TableHead className="text-black">User</TableHead>
          <TableHead className="text-black">POP Name</TableHead>
          <TableHead className="text-center text-black">Status</TableHead>
          <TableHead className="text-center text-black">Time</TableHead>
          <TableHead className="text-center text-black">Downtime</TableHead>
          <TableHead className="text-center text-black">Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.length > 0 ? (
          data.map((datas) => (
            <TableRow className="hover:bg-blue-50">
              <TableCell className="font-medium ">{datas.id}</TableCell>
              <TableCell>{datas.user}</TableCell>
              <TableCell className="font-medium">{datas.pop}</TableCell>
              <TableCell className="text-center">
                <Badge className="bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-600 text-xs font-medium rounded-lg gap-1 md:ps-2 md:pe-3 md:py-1">
                  <span className="hidden md:block">•</span>
                  {datas.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center">{datas.time}</TableCell>
              <TableCell className="text-center">{datas.downtime}</TableCell>
              <TableCell className="text-center">{datas.count}</TableCell>
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
  );
};

export default DataTable;
