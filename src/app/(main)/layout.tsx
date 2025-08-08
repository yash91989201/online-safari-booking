import { Navbar } from "@/components/shared/navbar";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="bg-red-600 px-4 py-2 text-center text-sm text-white">
        <p>
          ⚠️ <strong>Important:</strong> Safari bookings are subject to forest
          department availability. Please confirm your booking 24 hours in
          advance.
        </p>
      </div>
      <Navbar />
      {children}
    </>
  );
}
