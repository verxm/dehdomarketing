import { workFormRepository } from "@/app/_repositories/work-form-local-repository";
import WorkFormItem from "./work-form-item";

const WorkFormSession = () => {
  const allWorkForms = workFormRepository.getAll();

  return (
    <div className="bg-primary">
      <div className="px-5 flex flex-col items-center pt-5">
        <h2 className="text-lg uppercase text-primary font-bold text-[#F6E7D8]">🎯 Planejamento Estratégico 🎯</h2>
        <p className="text-sm text-muted">Para levar seu negócio à outro patamar</p>
      </div>

      <div className="
        flex gap-4
        px-5 pb-10 pt-6
        overflow-x-auto [&::-webkit-scrollbar]:hidden
        2xl:justify-center">
        {allWorkForms.map((workForm) => (
          <div key={workForm.id} className="min-w-[390px] max-w-[390px]">
            <WorkFormItem workForm={workForm} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkFormSession;