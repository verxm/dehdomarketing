import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServicesSession from "./_components/services-session";
import { Separator } from "@/components/ui/separator";

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

      <Separator className="mt-10"/>

      <div className="mt-10 mb-[4.5rem]">
        <ServicesSession />
      </div>
    </>
  );
}