export const Timer = () => {
  return (
    <div className="">
      <div>25:00</div>
      <div id="controls" className="flex gap-4 my-4">
        <button
          id="start-timer"
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Start
        </button>
        <button
          id="reset-timer"
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
