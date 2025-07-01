import { FaPaperPlane } from "react-icons/fa";

const users = [
  {
    id: 1,
    name: "Livia Bator",
    title: "CEO",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 2,
    name: "Randy Press",
    title: "Director",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    id: 3,
    name: "Workman",
    title: "Designer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const QuickTransfer = () => {
  return (
    <div className="h-[calc(100%-2rem)] w-full">
      <h3 className="text-lg font-bold mb-3">Quick Transfer</h3>
      <div className="grid bg-white p-3 md:p-4 lg:p-6 rounded-2xl shadow w-full h-full">
        <div className="flex items-center gap-2 md:gap-3 lg:gap-0 mb-3 md:mb-1 overflow-x-auto pb-2 flex-1 scrollbar-hide">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex flex-col items-center text-center min-w-[70px] md:min-w-[80px] lg:min-w-[100px]"
            >
              <img
                src={user.image}
                alt={user.name}
                className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover border-2 border-white shadow"
              />
              <p className="text-[11px] md:text-xs lg:text-sm font-bold text-gray-800 mt-1 md:mt-2 truncate w-full">
                {user.name}
              </p>
              <p className="text-[9px] md:text-[10px] lg:text-xs text-gray-500 truncate w-full">
                {user.title}
              </p>
            </div>
          ))}
          <div className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm md:text-base lg:text-lg text-gray-500 shadow min-w-[28px] md:min-w-[32px] lg:min-w-[40px]">
            &gt;
          </div>
        </div>
        <div className="flex items-center gap-2 mt-auto">
          <p>Write Amount</p>
          <input
            type="number"
            placeholder="Write Amount"
            className="flex-1 px-2 md:px-3 lg:px-2 py-1.5 md:py-2.5 rounded-full bg-gray-100 focus:outline-none text-xs md:text-sm"
            defaultValue={525.5}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 md:px-3 lg:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1 md:gap-2 text-xs md:text-sm font-medium whitespace-nowrap">
            Send <FaPaperPlane className="text-xs md:text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuickTransfer;
