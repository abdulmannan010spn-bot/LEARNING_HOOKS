import { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("submitted by", title);
    settitle("");
  };

  return (
    <div className="h-screen flex flex-c0l justify-center items-center bg-slate-900 ">
      <form
        onSubmit={(e) => {
          sumbitHandler(e);
        }}
        className="bg-slate-800  p-20 gap-6 rounded-2xl"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <h1 className="text-white font-bold text-2xl mb-4">Welcome</h1>

          <input
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="bg-white text-l  font-medium rounded-lg  p-4 outline-none mb-2 border-2 border-transparent focus:border-green-500 transition-all duration-200"
            type="text "
            placeholder="Enter Your Name"
          />

          <button className="bg-green-600 text-2l font-medium ro rounded-lg py-3 text-white hover:bg-green-700 active:scale-95 transition-all duration-200 px-6  shadow-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default App;
