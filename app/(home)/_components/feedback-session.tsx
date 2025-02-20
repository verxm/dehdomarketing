'use client'

import { feedbacksRepository } from "@/app/_repositories/feedbacks-local-repository";
import FeedbackItem from "./feedback-item";
import Marquee from "@/components/ui/marquee";
import { motion } from "framer-motion";

const FeedbackSession = () => {
    const allFeedbacks = feedbacksRepository.getAll();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
            viewport={{ once: true }}>
            <div className="px-5 flex flex-col items-center">
                <h2 className="text-lg uppercase text-tertiary font-bold">✨ Feedbacks ✨</h2>
                <p className="text-sm text-muted">De quem já vivieu essa transformação</p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-4">
                <Marquee key="marquee-1" pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    ))}
                </Marquee>
                <Marquee key="marquee-2" reverse pauseOnHover className="[--duration:60s]">
                    {allFeedbacks.map((feedback) => (
                        <FeedbackItem key={feedback.id} feedback={feedback} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-primary/50"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-primary/50"></div>
            </div>
        </motion.div>
    );
}

export default FeedbackSession;