import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServicesSession from "./_components/services-session";
import { Separator } from "@/components/ui/separator";
import FeedbackSession from "./_components/feedback-session";
import { feedbacksRepository } from "../_repositories/feedbacks-local-repository";

export default function Home() {
  const allFeedbacks = feedbacksRepository.getAll();

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

      <div className="p-5">
        {allFeedbacks.map((feedback) => (
          <FeedbackSession feedback={feedback} />
        ))}
      </div>
    </>
  );
}