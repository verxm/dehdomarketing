import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServicesSession from "./_components/services-session";
import { Separator } from "@/components/ui/separator";
import FeedbackSession from "./_components/feedback-session";

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

      <div className="pt-8 pb-5">
        <FeedbackSession />
      </div>
    </>
  );
}