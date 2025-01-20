// UTILS
import { protectedPage } from "@/server/utils";
// CUSTOM COMPONENTS
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AccountTab } from "@/components/admin/account-tab";
import { EnquiryTab } from "@/components/admin/enquiry-tab";
import { CorbettBookingsTab } from "@/components/admin/corbett-bookings";

export default async function Page() {
  await protectedPage();

  return (
    <main className="container mx-auto min-h-screen px-6 py-12">
      <h2 className="mb-6 text-lg font-bold md:text-3xl">Admin Dashboard</h2>
      <Tabs
        defaultValue="enquiry"
        className="flex h-screen flex-col md:flex-row"
      >
        <div className="w-full md:h-[75vh] md:w-64">
          <TabsList className="flex h-auto flex-row justify-start gap-3 md:h-full md:flex-col">
            <TabsTrigger
              value="enquiry"
              className="w-full justify-center md:justify-start"
            >
              Enquiries
            </TabsTrigger>
            <TabsTrigger
              value="corbett_bookings"
              className="w-full justify-center md:justify-start"
            >
              Corbett Bookings
            </TabsTrigger>
            <TabsTrigger
              value="account"
              className="w-full justify-center md:justify-start"
            >
              Account
            </TabsTrigger>
          </TabsList>
        </div>
        <div className="flex-grow overflow-auto py-6 md:-mt-3 md:px-6 md:py-0">
          <TabsContent value="enquiry">
            <EnquiryTab />
          </TabsContent>
          <TabsContent value="corbett_bookings">
            <CorbettBookingsTab />
          </TabsContent>
          <TabsContent value="account">
            <AccountTab />
          </TabsContent>
        </div>
      </Tabs>
    </main>
  );
}
