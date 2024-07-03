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
import { useSelectedPopIdStore } from "@/utils/stores/selectedPop";

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
  }, []);

  async function fetchData() {
    try {
      const result = await getDetailTable();
      const filteredData = selectedPopId.length
        ? result.data.filter((item) => selectedPopId.includes(item.pop_id))
        : result.data;
      setData(filteredData);
    } catch (error) {
      toast((error as Error).message.toString());
    }
  }

  return (
    <Table className="min-w-full divide-y divide-gray-200 p-1">
      <TableHeader className="bg-slate-50 p-1">
        <TableRow className="p-1 hover:bg-slate-50">
          <TableHead className="w-[50px] text-black p-1">No</TableHead>
          <TableHead className="text-black p-1">User</TableHead>
          <TableHead className="text-black p-1">POP Name</TableHead>
          <TableHead className="text-center text-black p-1">Status</TableHead>
          <TableHead className="text-center text-black p-1">Time</TableHead>
          <TableHead className="text-center text-black p-1">Downtime</TableHead>
          <TableHead className="text-center text-black p-1">Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="p-1">
        {data.length > 0 ? (
          data.map((datas, index) => (
            <TableRow key={datas.id} className="hover:bg-blue-50 p-1">
              <TableCell className="font-medium text-xs p-1">
                {index + 1}
              </TableCell>
              <TableCell className="text-xs p-1">{datas.user}</TableCell>
              <TableCell className="font-medium text-xs p-1">
                {datas.pop}
              </TableCell>
              <TableCell className="text-center text-xs p-1">
                <Badge className="bg-red-100 hover:bg-red-200 text-red-500 hover:text-red-600 text-xs font-medium rounded-lg gap-1 md:ps-1 md:pe-2 md:py-1">
                  <span className="hidden md:block">•</span>
                  {datas.status}
                </Badge>
              </TableCell>
              <TableCell className="text-center text-xs p-1">
                {datas.time}
              </TableCell>
              <TableCell className="text-center text-xs p-1">
                {datas.downtime}
              </TableCell>
              <TableCell className="text-center text-xs p-1">
                {datas.count}
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
  );
};

export default DataTable;
