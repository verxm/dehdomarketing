import { workFormRepository } from "@/app/_repositories/work-form-local-repository";
import WorkFormItem from "./work-form-item";
import { motion } from "framer-motion";

const WorkFormSession = () => {
  const allWorkForms = workFormRepository.getAll();

  return (
    <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1, transition: {duration: 1}}}
      viewport={{once:true}}
      className="bg-primary">
      <div className="px-5 flex flex-col items-center pt-5">
        <h2 className="text-lg uppercase font-bold text-tertiary">🎯 Planejamento Estratégico 🎯</h2>
        <p className="text-sm text-muted">Para levar seu negócio à outro patamar</p>
      </div>

      <motion.div
        initial={{x: 100}}
        whileInView={{x: 0, transition: {duration:0.5}}} 
        viewport={{once: true}}
        className="
          flex gap-4
          px-5 pb-10 pt-6
          overflow-x-auto [&::-webkit-scrollbar]:hidden
          2xl:justify-center">
        {allWorkForms.map((workForm) => (
          <div
            key={workForm.id} 
            className="min-w-[350px] max-w-[350px]">
            <WorkFormItem workForm={workForm} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default WorkFormSession;