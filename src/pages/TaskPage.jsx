import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-slate-500 p-6">
      <div className="flex justify-center relative mb-6">
        <button
          onClick={() => navigate(-1)}
          className="absolute left-0 text-slate-100"
        >
          <ChevronLeftIcon />
        </button>
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Detalhes Da Tarefa
        </h1>
      </div>
      <div className="bg-slate-200 p-4 rounded-md">
        <h2 className="text-xl font-bold text-slate-700">{title}</h2>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
