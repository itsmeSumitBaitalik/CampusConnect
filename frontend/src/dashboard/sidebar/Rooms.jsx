import React from "react";
import {
  Calendar,
  Users,
  MessageCircle,
  SquareKanban,
  UserPlus,
  Users2,
  Search,
} from "lucide-react";

function Rooms() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-20 md:w-40 bg-white border-r-2 border-black flex flex-col items-center py-4 space-y-6">
        <div className="flex flex-col items-center space-y-6">
          <button className="flex flex-col items-center text-sm hover:scale-105 transition">
            <Calendar className="w-8 h-8 text-blue-500" />
            <span className="hidden md:block">Events</span>
          </button>
          <button className="flex flex-col items-center text-sm hover:scale-105 transition">
            <Users className="w-8 h-8 text-orange-500" />
            <span className="hidden md:block">Mentors</span>
          </button>
          <button className="flex flex-col items-center text-sm hover:scale-105 transition">
            <SquareKanban className="w-8 h-8 text-pink-500" />
            <span className="hidden md:block">Rooms</span>
          </button>
          <button className="flex flex-col items-center text-sm hover:scale-105 transition">
            <MessageCircle className="w-8 h-8 text-red-500" />
            <span className="hidden md:block">Chatting</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-4 py-2 border-b-2 border-black bg-white">
          <h1 className="text-lg md:text-xl font-bold">ROOMS</h1>
          <div className="flex items-center gap-3">
            <button className="bg-yellow-400 px-4 py-1 rounded-md border-2 border-black shadow-[3px_3px_0px_black] font-semibold">
              Jackie
            </button>
            <div className="w-10 h-10 bg-black rounded-full"></div>
          </div>
        </header>

        {/* Search & Actions */}
        <div className="flex items-center justify-between px-4 py-3 gap-3 flex-wrap">
          <button className="flex items-center gap-2 border-2 border-black px-3 py-2 rounded-md shadow-[3px_3px_0px_black] bg-white hover:bg-gray-100 transition">
            <UserPlus className="w-5 h-5" />
            <span className="hidden sm:block">Create Room</span>
          </button>

          <div className="flex-1 flex justify-center">
            <div className="flex items-center w-full max-w-xl bg-gray-200 rounded-full px-3 py-2 border-2 border-gray-300">
              <Search className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none px-2"
              />
            </div>
          </div>

          <button className="flex items-center gap-2 border-2 border-black px-3 py-2 rounded-md shadow-[3px_3px_0px_black] bg-white hover:bg-gray-100 transition">
            <Users2 className="w-5 h-5" />
            <span className="hidden sm:block">Join Room</span>
          </button>
        </div>

        {/* Table */}
        <div className="flex-1 overflow-auto px-4 pb-4">
          <div className="w-full border-2 border-black bg-gray-200 rounded-md overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="bg-gray-300 border-b-2 border-black">
                <tr>
                  <th className="border-r-2 border-black px-4 py-2 text-left">
                    Name
                  </th>
                  <th className="border-r-2 border-black px-4 py-2 text-left">
                    Discussion
                  </th>
                  <th className="border-r-2 border-black px-4 py-2 text-left">
                    Members
                  </th>
                  <th className="px-4 py-2 text-left">Admin</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-400">
                  <td className="px-4 py-2">Room A</td>
                  <td className="px-4 py-2">Topic 1</td>
                  <td className="px-4 py-2">25</td>
                  <td className="px-4 py-2">Jackie</td>
                </tr>
                <tr className="border-t border-gray-400">
                  <td className="px-4 py-2">Room B</td>
                  <td className="px-4 py-2">Topic 2</td>
                  <td className="px-4 py-2">12</td>
                  <td className="px-4 py-2">Alex</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rooms;
