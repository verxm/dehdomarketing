'use client'

import Header from "@/components/header";
import PresentationSession from "./_components/presentation-session";
import Contacts from "@/app/(home)/_components/contacts";
import ServicesSession from "./_components/services-session";
import { Separator } from "@/components/ui/separator";
import FeedbackSession from "./_components/feedback-session";
import CustomersSession from "./_components/customers-session";
import WorkFormSession from "./_components/work-form-session";
import WhoWeAreSession from "./_components/who-we-are-session";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />

      <div className="pt-14 px-7">
        <PresentationSession />

        <motion.div
          className="pt-5 flex flex-col"
          initial={{ display: "none" }}
          animate={{ display: "flex" }}
          transition={{ delay: 5.5 }}>
          <Contacts />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ display: "none" }}
        animate={{ display: "initial" }}
        transition={{ delay: 6.5 }}
        className="pt-5">
        <div className="pt-14">
          <WorkFormSession />
        </div>

        <div className="mt-10">
          <ServicesSession />
        </div>

        <Separator className="mt-12" />

        <div className="p-5 lg:px-20 pb-12
        2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
          <CustomersSession />
        </div>

        <div className="pt-8 pb-10 bg-primary">
          <FeedbackSession />
        </div>

        <div className="py-9 px-7 md:px-14">
          <WhoWeAreSession />
        </div>
      </motion.div>
    </>
  );
}