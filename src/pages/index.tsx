import DataTable from "@/components/data-table";
import Layout from "@/components/layout";
import POPCard from "@/components/pop-card";
import { CirclePlus } from "lucide-react";

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
            <CirclePlus className="w-5 h-5" />
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
