import { workFormRepository } from "@/app/_repositories/work-form-local-repository";
import WorkFormItem from "./work-form-item";

const WorkFormSession = () => {
  const allWorkForms = workFormRepository.getAll();

  return (
    <div className="
        flex gap-4
        px-5
        overflow-x-auto [&::-webkit-scrollbar]:hidden
        2xl:justify-center">
      {allWorkForms.map((workForm) => (
        <div key={workForm.id} className="min-w-[390px] max-w-[390px]">
          <WorkFormItem workForm={workForm} />
        </div>
      ))}
    </div>

  );
}

export default WorkFormSession;