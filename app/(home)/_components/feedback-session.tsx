import { feedbacksRepository } from "@/app/_repositories/feedbacks-local-repository";
import FeedbackItem from "./feedback-item";
import Marquee from "@/components/ui/marquee";

const FeedbackSession = () => {
    const allFeedbacks = feedbacksRepository.getAll();

    return (
        <>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
                <Marquee pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <div className="max-w-[390px] h-[320px]">
                            <FeedbackItem feedback={feedback} />
                        </div>
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <div className="max-w-[390px]">
                            <FeedbackItem feedback={feedback} />
                        </div>
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white"></div>
            </div>


        </>
    );
}

export default FeedbackSession;