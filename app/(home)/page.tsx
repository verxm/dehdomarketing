import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServicesSession from "./_components/services-session";
import { Separator } from "@/components/ui/separator";
import FeedbackSession from "./_components/feedback-session";
import CustomersSession from "./_components/customers-session";

export default function Home() {
  return (
    <>
      <Header />

      <div className="pt-14 px-7">
        <PresentationSession />

        <div className="pt-5">
          <Contacts />
        </div>
      </div>

      <Separator className="mt-10" />

      <div className="mt-10">
        <ServicesSession />
      </div>

      <Separator className="mt-12" />

      <div className="pt-10 pb-5">
        <FeedbackSession />
      </div>
      <div className="p-5 lg:px-20
        2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
        <CustomersSession />
      </div>
    </>
  );
}