import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FiEye, FiEyeOff, FiLock, FiUser } from "react-icons/fi";
import { Link } from "@tanstack/react-router";

export function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="bg-primary-700 flex min-h-screen w-full flex-col items-center justify-center">
      <main className="flex w-full flex-col gap-4 rounded-4xl bg-slate-200 p-4 md:max-w-[480px]">
        <div className="flex items-center justify-center gap-4">
          <img src="/logo.png" alt="Logo" className="aspect-square w-18" />
          <h1 className="text-primary-700 text-2xl font-bold">
            BAKTI TANI
            <br />
            NUSANTARA
          </h1>
        </div>

        <div className="flex w-full flex-col items-center gap-4">
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              type="identifier"
              label={
                <>
                  Username
                  <span className="text-red-500">*</span>
                </>
              }
              id="identifier"
              placeholder="Username"
              iconBefore={<FiUser />}
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Input
              type={showPassword ? "text" : "password"}
              label={
                <>
                  Password
                  <span className="text-red-500">*</span>
                </>
              }
              id="password"
              placeholder="Password"
              iconBefore={<FiLock />}
              hint="Gunakan password yang kuat"
              // error={true}
              iconAfter={
                showPassword ? (
                  <FiEyeOff onClick={() => setShowPassword(false)} className="cursor-pointer" />
                ) : (
                  <FiEye onClick={() => setShowPassword(true)} className="cursor-pointer" />
                )
              }
            />
          </div>
          <Button className="mb-4 w-full max-w-sm" asChild>
            {/* TODO: Perbaiki */}
            <Link to="/admin/dashboard">Login</Link>
          </Button>
        </div>
      </main>
    </div>
  );
}
