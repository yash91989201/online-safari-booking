import PaymentForm from "@/components/payment/payment-form";
import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Payment() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="mx-auto w-full bg-gray-100 px-4 py-8">
        <PaymentForm />
      </div>
      <Footer />
    </main>
  );
}
