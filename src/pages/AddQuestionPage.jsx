import { SquarePlus, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

const AddQuestionPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    const oldQuestions = JSON.parse(localStorage.getItem("addQuestion")) || [];

    const newQuestions = [...oldQuestions, data];

    localStorage.setItem("addQuestion", JSON.stringify(newQuestions));

    navigate("/")
    reset();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 w-full">
      {/* ================= HEADER ================= */}
      <section className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          Add Question
        </h1>

        <p className="text-md font-semibold text-gray-500 sm:text-base">
          Add a new question to your interview preparation tracker.
        </p>
      </section>

      {/* ================= FORM CARD ================= */}
      <section className="mt-6 w-[60%] rounded-xl border-3 border-gray-300 bg-white p-5 shadow-sm sm:p-7">
        {/* ================= FORM HEADING ================= */}
        <div className="border-b-2 border-gray-300 pb-5">
          <h2 className="text-2xl font-bold text-gray-800">Question Details</h2>

          <p className="mt-1 text-md font-bold text-gray-500">
            Fill in the details of the question below.
          </p>
        </div>

        {/* ================= FORM ================= */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 pt-6"
        >
          {/* ================= QUESTION INPUT ================= */}
          <input
            {...register("title", {
              required: "Question title is required",
            })}
            type="text"
            placeholder="Enter question title..."
            className="w-full rounded border-2 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-bold"
          />
          {errors.title && (
            <p className="text-sm text-red-500 font-bold">
              {errors.title.message}
            </p>
          )}

          {/* ================= CATEGORY + DIFFICULTY ================= */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {/* CATEGORY SELECT */}
            <div className="flex flex-col gap-4">
              <select
                {...register("category", {
                  required: "Question category is required",
                })}
                defaultValue=""
                className="w-full rounded border-2 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-bold"
              >
                <option className="font-bold text-gray-400" value="" disabled>
                  Select category
                </option>

                <option className="font-bold" value="DSA">
                  DSA
                </option>
                <option className="font-bold" value="Technical">
                  Technical
                </option>
                <option className="font-bold" value="Git">
                  Git
                </option>
                <option className="font-bold" value="Machine Coding">
                  Machine Coding
                </option>
              </select>
              {errors.category && (
                <p className="text-sm text-red-500 font-bold">
                  {errors.category.message}
                </p>
              )}
            </div>

            {/* DIFFICULTY SELECT */}
            <div className="flex flex-col gap-4">
              <select
                {...register("difficulty", {
                  required: "Question difficulty is required",
                })}
                defaultValue=""
                className="w-full rounded border-2 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-bold"
              >
                <option className="font-bold text-gray-400" value="" disabled>
                  Select difficulty
                </option>

                <option className="font-bold" value="Easy">
                  Easy
                </option>
                <option className="font-bold" value="Medium">
                  Medium
                </option>
                <option className="font-bold" value="Hard">
                  Hard
                </option>
              </select>
              {errors.difficulty && (
                <p className="text-sm text-red-500 font-bold">
                  {errors.difficulty.message}
                </p>
              )}
            </div>
          </div>

          {/* ================= STATUS SELECT ================= */}
          <select
            {...register("status", {
              required: "Question status is required",
            })}
            defaultValue=""
            className="w-full rounded border-2 bg-white px-4 py-3 text-sm text-gray-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 font-bold"
          >
            <option className="font-bold text-gray-400" value="" disabled>
              Status
            </option>
            <option className="font-bold" value="Pending">
              Pending
            </option>
            <option className="font-bold" value="In Progress">
              In Progress
            </option>
            <option className="font-bold" value="Completed">
              Completed
            </option>
          </select>
          {errors.status && (
            <p className="text-sm text-red-500 font-bold">
              {errors.status.message}
            </p>
          )}

          {/* ================= ACTION BUTTONS ================= */}
          <div className="flex flex-col-reverse gap-3 border-t-2 border-gray-300 pt-6 sm:flex-row sm:justify-end">
            {/* CANCEL BUTTON */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded border-2 border-gray-500 px-5 py-3 text-sm text-gray-700 font-bold transition hover:bg-gray-300"
            >
              <X size={18} />
              Cancel
            </button>

            {/* ADD QUESTION BUTTON */}
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded border-2 border-blue-500 bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600"
            >
              <SquarePlus size={18} />
              Add Question
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddQuestionPage;
