"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { api } from "@/trpc/react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Badge } from "../ui/badge";
import { RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

export const EnquiryTab = () => {
  const [hydrated, setHydrated] = useState(false);
  const {
    data: enquiries,
    isLoading,
    isRefetching,
    refetch: refetchAllEnquiries,
  } = api.enquiry.getAll.useQuery(undefined, {
    refetchInterval: 12000,
  });

  const mutation = api.enquiry.resolved.useMutation({
    onSuccess: async () => {
      toast.success("Enquiry marked as resolved!");
      await refetchAllEnquiries(); // Re-fetch the data after mutation
    },
    onError: () => {
      toast.error("Failed to mark enquiry as resolved.");
    },
  });

  const handleResolve = (id: string) => {
    mutation.mutate({ enquiryId: id, enquiryResolved: true });
  };

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null;

  if (isLoading) {
    return <p>Loading enquiries...</p>;
  }

  if (!enquiries || enquiries.length === 0) {
    return <p>No enquiries found.</p>;
  }
  console.log(isRefetching);
  return (
    <Card className="w-full border-none bg-white">
      <CardHeader>
        <CardTitle>Booking Enquiries</CardTitle>
        <CardDescription>
          View all enquiries made by site visitors and manage their status.
        </CardDescription>
        <Button
          variant="link"
          disabled={isRefetching}
          className="w-fit rounded-lg px-0"
          onClick={() => refetchAllEnquiries()}
        >
          <RefreshCw className={cn(isRefetching && "animate-spin")} />
          Refresh
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="min-w-48">Name</TableHead>
                <TableHead className="min-w-60">Email</TableHead>
                <TableHead className="min-w-52">Phone Number</TableHead>
                <TableHead className="max-w-[200px]">Message</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enquiries.map((enquiry) => (
                <TableRow key={enquiry.id}>
                  <TableCell className="font-medium">{enquiry.name}</TableCell>
                  <TableCell>{enquiry.email}</TableCell>
                  <TableCell>{enquiry.phoneNumber}</TableCell>
                  <TableCell className="max-w-[200px] truncate">
                    {enquiry.message}
                  </TableCell>
                  <TableCell>
                    {enquiry.resolved ? (
                      <Badge className="rounded-xl">Resolved</Badge>
                    ) : (
                      <Badge variant="secondary" className="rounded-xl">
                        Pending
                      </Badge>
                    )}
                  </TableCell>
                  <TableCell>
                    {!enquiry.resolved ? (
                      <Button
                        size="sm"
                        className="rounded-lg"
                        onClick={() => handleResolve(enquiry.id)}
                      >
                        Mark Resolved
                      </Button>
                    ) : (
                      "N/A"
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};
