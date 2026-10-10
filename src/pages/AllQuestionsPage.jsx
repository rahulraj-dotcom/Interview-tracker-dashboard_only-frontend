import React, { useEffect, useState } from "react";
import {
  Search,
  SquarePlus,
  Filter,
  CheckCircle2,
  Clock3,
  Circle,
} from "lucide-react";
import { useNavigate } from "react-router";

const AllQuestionsPage = () => {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [difficulty, setDifficulty] = useState("All Difficulties");
  const [status, setStatus] = useState("All Status");

  useEffect(() => {
    const storedQuestions =
      JSON.parse(localStorage.getItem("addQuestion")) || [];

    setQuestions(storedQuestions);
  }, []);

  const completedQuestions = questions.filter(
    (question) => question.status === "Completed",
  ).length;

  const inProgressQuestions = questions.filter(
    (question) => question.status === "In Progress",
  ).length;

  const pendingQuestions = questions.filter(
    (question) => question.status === "Pending",
  ).length;

  const totalQuestions = questions.length;

  const completionProgressPercentage =
    totalQuestions === 0
      ? 0
      : Math.round((completedQuestions / totalQuestions) * 100);

  const filteredQuestions = questions.filter((question) => {
    const searchMatch = question.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All Categories" || question.category === category;

    const difficultyMatch =
      difficulty === "All Difficulties" || question.difficulty === difficulty;

    const statusMatch = status === "All Status" || question.status === status;

    return searchMatch && categoryMatch && difficultyMatch && statusMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 w-full">
      {/* ================= HEADER ================= */}
      <section className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            All Questions
          </h1>

          <p className="mt-1 text-sm font-semibold text-gray-500 sm:text-base">
            Track and manage your interview preparation questions.
          </p>
        </div>

        <button
          onClick={() => navigate("/add-question")}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-bold text-white transition hover:bg-blue-600 sm:w-auto"
        >
          <SquarePlus size={19} />
          Add Question
        </button>
      </section>

      {/* ================= STATS ================= */}
      <section className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {/* TOTAL */}
        <div className="rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500">Total Questions</p>

            <Circle size={21} className="text-blue-500" />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {questions.length}
          </h2>
        </div>

        {/* COMPLETED */}
        <div className="rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500">Completed</p>

            <CheckCircle2 size={21} className="text-green-500" />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {completedQuestions}
          </h2>
        </div>

        {/* IN PROGRESS */}
        <div className="rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500">In Progress</p>

            <Clock3 size={21} className="text-orange-500" />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {inProgressQuestions}
          </h2>
        </div>

        {/* PENDING */}
        <div className="rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold text-gray-500">Pending</p>

            <Circle size={21} className="text-gray-500" />
          </div>

          <h2 className="mt-3 text-3xl font-bold text-gray-800">
            {pendingQuestions}
          </h2>
        </div>
      </section>

      {/* ================= PROGRESS ================= */}
      <section className="mt-6 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              Completion Progress
            </h2>

            <p className="mt-1 text-sm font-semibold text-gray-500">
              {completedQuestions} of {totalQuestions} questions completed
            </p>
          </div>

          <span className="text-xl font-bold text-blue-500">
            {completionProgressPercentage}%
          </span>
        </div>

        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `${completionProgressPercentage}%` }}
            className="h-full rounded-full bg-blue-500"
          ></div>
        </div>
      </section>

      {/* ================= SEARCH & FILTER ================= */}
      <section className="mt-6 rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center gap-2">
          <Filter size={20} className="text-blue-500" />

          <h2 className="text-lg font-bold text-gray-800">Search & Filter</h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* SEARCH */}
          <div className="relative">
            <Search
              size={19}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions..."
              className="w-full  rounded-lg border-2 py-3 pl-10 pr-4 text-sm font-bold outline-none focus:border-blue-500"
            />
          </div>

          {/* CATEGORY */}
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg  border-2 bg-white px-4 py-3 text-sm font-bold text-gray-700 outline-none focus:border-blue-500"
          >
            <option className="font-bold text-gray-400">All Categories</option>
            <option className="font-bold">DSA</option>
            <option className="font-bold">Technical</option>
            <option className="font-bold">Git</option>
            <option className="font-bold">Machine Coding</option>
          </select>

          {/* DIFFICULTY */}
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            className="rounded-lg  border-2 bg-white px-4 py-3 text-sm font-bold text-gray-700 outline-none focus:border-blue-500"
          >
            <option className="font-bold text-gray-400">
              All Difficulties
            </option>
            <option className="font-bold">Easy</option>
            <option className="font-bold">Medium</option>
            <option className="font-bold">Hard</option>
          </select>

          {/* STATUS */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-lg  border-2 bg-white px-4 py-3 text-sm font-bold text-gray-700 outline-none focus:border-blue-500"
          >
            <option className="font-bold text-gray-400">All Status</option>
            <option className="font-bold">Pending</option>
            <option className="font-bold">In Progress</option>
            <option className="font-bold">Completed</option>
          </select>
        </div>
      </section>

      {/* ================= QUESTIONS ================= */}
      <section className="mt-10">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Questions</h2>

          <p className="text-xl font-bold text-gray-500">
            {filteredQuestions.length} Questions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {filteredQuestions.map((question, index) => (
            <div
              key={index}
              className="rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm transition hover:border-blue-300"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">
                    {question.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4">
                    <span className="rounded bg-blue-200 px-5 py-2 text-xs font-bold text-blue-600">
                      {question.category}
                    </span>

                    <span className="rounded bg-purple-200 px-5 py-2 text-xs font-bold text-purple-600">
                      {question.difficulty}
                    </span>

                    <span
                      className={`rounded px-5 py-2 text-xs font-bold ${
                        question.status === "Completed"
                          ? "bg-green-200 text-green-600"
                          : question.status === "In Progress"
                            ? "bg-orange-200 text-orange-600"
                            : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {question.status}
                    </span>
                  </div>
                </div>

                {question.status === "Completed" ? (
                  <CheckCircle2 size={28} className="text-green-500" />
                ) : question.status === "In Progress" ? (
                  <Clock3 size={28} className="text-orange-500" />
                ) : (
                  <Circle size={28} className="text-gray-400" />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllQuestionsPage;
