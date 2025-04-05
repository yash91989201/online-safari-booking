import { Footer } from "@/components/shared/footer";
import { Navbar } from "@/components/shared/navbar";

export default function Payment() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-3xl font-bold text-gray-800">Payment</h1>

        <div className="mx-auto max-w-2xl rounded-lg bg-white p-6 shadow-md">
          <div className="mb-6">
            <h2 className="mb-4 text-xl font-semibold">Payment Options</h2>
            <p className="mb-4 text-gray-600">
              Please use one of the following methods to make your payment for
              Corbett National Park bookings:
            </p>

            <div className="space-y-4">
              <div className="rounded-md border p-4">
                <h3 className="font-medium">Bank Transfer</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>Account Name: Corbett Travel Agency</p>
                  <p>Account Number: 1234567890</p>
                  <p>IFSC Code: ABCD0001234</p>
                  <p>Bank: Sample Bank, Ramnagar Branch</p>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">UPI Payment</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>UPI ID: corbett@upi</p>
                  <p>Scan the QR code or use the UPI ID to make payment</p>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="font-medium">Credit/Debit Card</h3>
                <div className="mt-2 text-sm text-gray-600">
                  <p>For card payments, please fill out the form below:</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Booking Reference
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Amount (₹)
              </label>
              <input
                type="number"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-green-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-800 focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:outline-none"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </main>
  );
}
