import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const DataTable = () => {
  const database = [
    {
      key: 1,
      pop_id: 1,
      user: "PPP - Budi",
      pop_name: "POP 1",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 2,
      pop_id: 2,
      user: "PPP - Budi",
      pop_name: "POP 2",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 3,
      pop_id: 3,
      user: "PPP - Budi",
      pop_name: "POP 3",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 4,
      pop_id: 4,
      user: "PPP - Budi",
      pop_name: "POP 4",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 5,
      pop_id: 5,
      user: "PPP - Budi",
      pop_name: "POP 5",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 6,
      pop_id: 6,
      user: "PPP - Budi",
      pop_name: "POP 6",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 7,
      pop_id: 7,
      user: "PPP - Budi",
      pop_name: "POP 6",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
    {
      key: 8,
      pop_id: 8,
      user: "PPP - Budi",
      pop_name: "POP 8",
      status: "inactive",
      time: "15.00",
      downtime: "14.30",
      count: "1",
    },
  ];

  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>User</TableHead>
          <TableHead>POP Name</TableHead>
          <TableHead className="">Status</TableHead>
          <TableHead className="">Time</TableHead>
          <TableHead className="">Downtime</TableHead>
          <TableHead className="">Count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {database.map((databases) => (
          <TableRow>
            <TableCell className="font-medium">{databases.pop_id}</TableCell>
            <TableCell>{databases.user}</TableCell>
            <TableCell>{databases.pop_name}</TableCell>
            <TableCell className="">{databases.status}</TableCell>
            <TableCell className="">{databases.time}</TableCell>
            <TableCell className="">{databases.downtime}</TableCell>
            <TableCell className="">{databases.count}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
