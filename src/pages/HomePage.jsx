import { useEffect, useState } from "react";
import {
  BookOpen,
  CheckCircle2,
  Code2,
  GitBranch,
  CircleHelp,
  SquarePlus,
} from "lucide-react";
import { useNavigate } from "react-router";
import AllQuestionsPage from "./AllQuestionsPage";

const HomePage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const storeQuestions =
      JSON.parse(localStorage.getItem("addQuestion")) || [];

    setQuestions(storeQuestions);
  }, []);

  const totalQuestions = questions.length;

  const recentQuestions = questions.slice(-4).reverse();

  const completeQuestions = questions.filter(
    (question) => question.status === "Completed",
  ).length;

  const inProgressQuestions = questions.filter(
    (question) => question.status === "In Progress",
  ).length;

  const pendingQuestions = questions.filter(
    (question) => question.status === "Pending",
  ).length;

  const completePercentage =
    totalQuestions === 0
      ? 0
      : Math.round((completeQuestions / totalQuestions) * 100);

  const completedDsa = questions.filter(
    (question) =>
      question.category === "DSA" && question.status === "Completed",
  ).length;

  const completedGit = questions.filter(
    (question) =>
      question.category === "Git" && question.status === "Completed",
  ).length;

  const completedTecnical = questions.filter(
    (question) =>
      question.category === "Technical" && question.status === "Completed",
  ).length;

  const completedMachineCoding = questions.filter(
    (question) =>
      question.category === "Machine Coding" && question.status === "Completed",
  ).length;

  const totalDsa = questions.filter(
    (question) => question.category === "DSA",
  ).length;

  const dsaPercentage =
    totalDsa === 0 ? 0 : Math.round((completedDsa / totalDsa) * 100);

  const totalGit = questions.filter(
    (question) => question.category === "Git",
  ).length;

  const gitPercentage =
    totalGit === 0 ? 0 : Math.round((completedGit / totalGit) * 100);

  const totalTecnical = questions.filter(
    (question) => question.category === "Technical",
  ).length;

  const tecnicalPercentage =
    totalTecnical === 0
      ? 0
      : Math.round((completedTecnical / totalTecnical) * 100);

  const totalMachineCoding = questions.filter(
    (question) => question.category === "Machine Coding",
  ).length;

  const MachineCodingPercentage =
    totalMachineCoding === 0
      ? 0
      : Math.round((completedMachineCoding / totalMachineCoding) * 100);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 w-full">
      {/* ================= HEADER ================= */}
      <section className="flex flex-col gap-1">
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Dashboard
          </h1>
          <button
            onClick={() => navigate("/add-question")}
            className="bg-blue-500 flex gap-3 text-white px-4 py-3 rounded-lg hover:bg-blue-600"
          >
            <SquarePlus />
            <p className="font-bold">Add Question</p>
          </button>
        </div>

        <p className="text-sm text-gray-500 sm:text-base">
          Track your interview preparation progress.
        </p>
      </section>

      {/* ================= TOP STATS ================= */}
      <section className="grid grid-cols-1 gap-4 pt-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Total Questions */}
        <div className="flex flex-col gap-4 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
              <CircleHelp size={22} />
            </div>

            <span className="text-md font-bold text-gray-400">Overall</span>
          </div>

          <div>
            <p className="text-md font-bold text-gray-500">Total Questions</p>

            <h2 className="text-3xl font-bold text-gray-800">
              {totalQuestions}
            </h2>
          </div>
        </div>

        {/* Completed DSA */}
        <div className="flex flex-col gap-4 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-green-100 p-3 text-green-600">
              <Code2 size={22} />
            </div>

            <span className="text-md font-bold text-gray-400">DSA</span>
          </div>

          <div>
            <p className="text-md font-bold text-gray-500">Completed DSA</p>

            <h2 className="text-3xl font-bold text-gray-800">{completedDsa}</h2>
          </div>
        </div>

        {/* Completed Git */}
        <div className="flex flex-col gap-4 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-green-100 p-3 text-green-600">
              <Code2 size={22} />
            </div>

            <span className="text-md font-bold text-gray-400">Git</span>
          </div>

          <div>
            <p className="text-md font-bold text-gray-500">Completed Git</p>

            <h2 className="text-3xl font-bold text-gray-800">{completedGit}</h2>
          </div>
        </div>

        {/* Interview Questions */}
        <div className="flex flex-col gap-4 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
              <BookOpen size={22} />
            </div>

            <span className="text-md font-bold text-gray-400">Interview</span>
          </div>

          <div>
            <p className="text-md font-bold text-gray-500">
              Completed Interview
            </p>

            <h2 className="text-3xl font-bold text-gray-800">
              {completedTecnical}
            </h2>
          </div>
        </div>

        {/* Machine Coding */}
        <div className="flex flex-col gap-4 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
              <GitBranch size={22} />
            </div>

            <span className="text-md font-bold text-gray-400">
              Machine Coding
            </span>
          </div>

          <div>
            <p className="text-md font-bold text-gray-500">Complete code</p>

            <h2 className="text-3xl font-bold text-gray-800">
              {completedMachineCoding}
            </h2>
          </div>
        </div>
      </section>

      {/* ================= PROGRESS SECTION ================= */}
      <section className="grid grid-cols-1 gap-5 pt-5 lg:grid-cols-2">
        {/* ---------- Overall Progress ---------- */}
        <div className="flex flex-col gap-6 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Overall Progress
            </h2>

            <p className="text-md font-semibold text-gray-500">
              Your interview preparation progress
            </p>
          </div>

          {/* Progress Bar */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between text-sm">
              <span className="font-bold text-lg text-gray-600">Completed</span>

              <span className="font-bold text-blue-600">
                {completePercentage}%
              </span>
            </div>

            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-blue-500"
                style={{ width: `${completePercentage}%` }}
              />
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {/* Completed */}
            <div className="flex items-center gap-4 rounded-lg bg-green-200 p-4">
              <CheckCircle2 size={25} className="shrink-0 text-green-500" />

              <div>
                <p className="text-xl font-bold text-gray-800">
                  {completeQuestions}
                </p>

                <p className="text-md font-bold text-gray-500">Completed</p>
              </div>
            </div>

            {/* In Progress */}
            <div className="flex items-center gap-4 rounded-lg bg-blue-200 p-4">
              <BookOpen size={25} className="shrink-0 text-blue-500" />

              <div>
                <p className="text-xl font-bold text-gray-800">
                  {inProgressQuestions}
                </p>

                <p className="text-md font-bold text-gray-500">In Progress</p>
              </div>
            </div>

            {/* Pending */}
            <div className="flex items-center gap-4 rounded-lg bg-orange-200 p-4">
              <CircleHelp size={25} className="shrink-0 text-orange-500" />

              <div>
                <p className="text-xl font-bold text-gray-800">
                  {pendingQuestions}
                </p>

                <p className="text-md font-bold text-gray-500">Pending</p>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Category Progress ---------- */}
        <div className="flex flex-col gap-6 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm sm:p-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Category Progress
            </h2>

            <p className="text-md font-bold text-gray-500">
              Track your preparation by category
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-5">
            {/* DSA */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-md text-gray-700">DSA</span>

                <span className="text-gray-800 font-semibold">
                  {completedDsa} / {totalDsa}
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  style={{ width: `${dsaPercentage}%` }}
                  className="h-full rounded-full bg-green-500"
                />
              </div>
            </div>

            {/* Git */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-md font-semibold text-gray-700">Git</span>

                <span className="text-gray-800 font-semibold">
                  {completedGit} / {totalGit}
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  style={{ width: `${gitPercentage}%` }}
                  className="h-full rounded-full bg-orange-500"
                />
              </div>
            </div>

            {/* Technical */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-md font-semibold text-gray-700">
                  Technical
                </span>

                <span className="text-gray-800 font-semibold">
                  {completedTecnical} / {totalTecnical}
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  style={{ width: `${tecnicalPercentage}%` }}
                  className="h-full rounded-full bg-purple-500"
                />
              </div>
            </div>

            {/* Machine Coding */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between text-sm">
                <span className="font-md font-semibold text-gray-700">
                  Machine Coding
                </span>

                <span className="text-gray-800 font-semibold">
                  {completedMachineCoding} / {totalMachineCoding}
                </span>
              </div>

              <div className="h-2 w-full rounded-full bg-gray-200">
                <div
                  style={{ width: `${MachineCodingPercentage}%` }}
                  className="h-full rounded-full bg-blue-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-7 w-[75%]">
        {/* Recent Questions */}
        <div className="mt-6 rounded-xl bg-white p-6 border-3 border-gray-300 shadow-sm sm:mt-0 w-full">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800">
              Recent Questions
            </h2>

            <button
              onClick={() => navigate("/all-questions")}
              className="text-md font-bold text-blue-600 hover:underline"
            >
              View All →
            </button>
          </div>

          {recentQuestions.length === 0 ? (
            <div className="py-8 text-center text-gray-500">
              <p>No questions added yet.</p>

              <button
                onClick={() => navigate("/add-question")}
                className="mt-3 font-medium text-blue-600 hover:underline"
              >
                Add your first question →
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              {recentQuestions.map((question, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-lg border-3 border-gray-300 p-4"
                >
                  <div>
                    <h3 className="font-bold text-lg text-gray-800">
                      {question.title}
                    </h3>

                    <p className="mt-1 text-md font-semibold text-gray-500">
                      {question.category} • {question.difficulty}
                    </p>
                  </div>

                  <span
                    className={`rounded px-5 py-2 text-xs ${
                      question.status === "Completed"
                        ? "bg-green-200 font-bold text-green-700"
                        : question.status === "In Progress"
                          ? "bg-yellow-200 font-bold text-yellow-700"
                          : "bg-gray-200 font-bold text-gray-700"
                    }`}
                  >
                    {question.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
