import React, { useState } from "react";
import data from "./data";
import { User } from "./User";

const Birthdays = () => {
  const [users, setUsers] = useState(data);

  return (
    <div className="h-screen w-screen bg-fuchsia-100 flex items-center justify-center">
      <div className="bg-white px-8 py-8 space-y-6 max-w-2xl">
        {/* Title */}
        <div className="flex flex-row space-x-2">
          <p className="text-3xl font-bold">{users.length}</p>
          <h1 className="text-3xl font-bold">birthdays today</h1>
        </div>
        {/* UserList */}
        <div>
          {/* UserList - 當 users 為空時，不渲染 */}
          {users.length > 0 ? (
            <div>
              {users.map((d) => (
                <User key={d.id} name={d.name} age={d.age} image={d.image} />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No birthdays today.</p>
          )}
        </div>
        <button
          onClick={() => setUsers([])}
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full"
        >
          清除
        </button>
      </div>
    </div>
  );
};

export default Birthdays;
