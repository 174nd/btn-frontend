import { Breadcrumb } from "@/components/ui/breadcrumb";
import { TextEditor } from "@/components/ui/textEditor";
import { DashboardLayout } from "./layout";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const AdminDashboard = () => {
  const items = [
    { label: "Home", path: "/" },
    { label: "Dashboard", path: "/dashboard" },
    { label: "Settings", path: "/settings" },
    { label: "Profile", path: "/profile" },
  ];

  const [value, setValue] = useState("");
  const options = [
    { value: "id", label: "Indonesia" },
    { value: "en", label: "English" },
    { value: "jp", label: "日本語" },
  ];

  const [text, setText] = useState("");
  return (
    <DashboardLayout>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-12 mt-2 flex w-full flex-col justify-between rounded-lg border-2 border-slate-300 bg-white px-4 py-2 md:flex-row md:items-center">
          <h1 className="text-xl font-bold text-black italic">Dashboard</h1>
          <Breadcrumb items={items} />
        </div>

        <div className="col-span-12 mt-2 flex w-full flex-col gap-4 rounded-xl border bg-white px-4 py-2 shadow md:col-span-6">
          <Input label="Bahasa" placeholder="anjayy" />

          <h1 className="text-xl font-bold text-black italic">Dashboard</h1>
          {/* <TextEditor /> */}
          <TextEditor
            label="Deskripsi"
            placeholder="Tulis sesuatu..."
            value={text}
            onValueChange={setText}
            // error={true}
            // errorId="error-deskripsi"
            hint="Tuliskan deskripsi produk secara lengkap"
          />
          <Select
            label="Bahasa"
            placeholder="Pilih bahasa..."
            value={value}
            onValueChange={setValue}
            options={options}
            // hint="Gunakan untuk memilih bahasa tampilan"
          />
          <Button>Haii</Button>
        </div>
      </div>

      {/* <h2 className="text-2xl font-bold mb-4">Dashboard</h2> */}
      <p>Welcome to the dashboard! This is your main area.</p>
      {/* <div className="h-48 bg-black text-white">hola</div>
      <div className="h-48 bg-black text-white">hola</div>
      <div className="h-48 bg-black text-white">hola</div>
      <div className="h-48 bg-black text-white">hola</div>
      <div className="h-48 bg-black text-white">hola</div>
      <div className="h-48 bg-black text-white">hola</div> */}
    </DashboardLayout>
  );
};
