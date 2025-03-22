import { FaCreditCard, FaBluetooth, FaUserCircle, FaPaperPlane, FaDownload, FaEdit } from "react-icons/fa";
import { IoMdWallet } from "react-icons/io";
import { MdAccountBalanceWallet } from "react-icons/md";
import { useState } from "react";
import "./Dashboard.css";

const UserDashboard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    accountNumber: "XXXX-XXXX-XXXX-1234",
    mobile: "+91 9876543210",
    email: "johndoe@example.com",
    dob: "1995-06-15",
    gender: "Male",
    address: "123 Street, City, Country",
    balance: "₹67,900.98",
    cards: [
      { type: "Work Card", number: "**** 7798" },
      { type: "Travel Card", number: "**** 8900" },
    ],
    transactions: [
      { name: "Dan", amount: "-₹314", type: "debit", mode: "Bluetooth" },
      { name: "Amanda", amount: "+₹90", type: "credit", mode: "QR Code" },
      { name: "Pete", amount: "-₹19", type: "debit", mode: "Bluetooth" },
      { name: "Sara", amount: "-₹120", type: "debit", mode: "QR Code" },
      { name: "Jake", amount: "+₹250", type: "credit", mode: "Bluetooth" },
    ],
  });

  const handleEditToggle = () => setIsEditing(!isEditing);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-700 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-6 w-[400px]">
        {/* Profile Section */}
        <div className="text-center">
          <FaUserCircle className="text-gray-700 text-6xl mx-auto" />
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleInputChange}
              className="text-xl font-semibold mt-2 w-full text-center border-b"
            />
          ) : (
            <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
          )}
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleInputChange}
              className="text-gray-600 text-sm w-full text-center border-b"
            />
          ) : (
            <p className="text-gray-600 text-sm">{user.email}</p>
          )}
          <div className="flex justify-center mt-3">
            <button onClick={handleEditToggle} className="text-blue-600 text-sm flex items-center hover:text-blue-800 transition">
              <FaEdit className="mr-1" /> {isEditing ? "Save" : "Edit Profile"}
            </button>
          </div>
        </div>

        {/* Account Balance Section */}
        <div className="bg-blue-100 p-4 rounded-lg text-center mt-4">
          <p className="text-sm text-gray-600">Account Balance</p>
          <h3 className="text-2xl font-bold text-blue-700">{user.balance}</h3>
          <p className="text-gray-500 text-sm">Acc No: {user.accountNumber}</p>
        </div>

        {/* User Info Section */}
        <div className="bg-gray-100 p-4 rounded-lg mt-4">
          <h3 className="text-md font-semibold mb-2">User Information</h3>
          <p><strong>Mobile:</strong> {user.mobile}</p>
          <p><strong>DOB:</strong> {user.dob}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Address:</strong> {user.address}</p>
        </div>

        {/* Money Transfer Section */}
        <div className="flex justify-between mt-4">
          <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-green-700 transition">
            <FaPaperPlane className="mr-2" /> Send Money
          </button>
          <button className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-purple-700 transition">
            <FaDownload className="mr-2" /> Receive Money
          </button>
        </div>

        {/* Bluetooth Sharing Feature */}
        <div className="flex justify-center mt-4">
          <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition">
            <FaBluetooth className="mr-2" /> Share via Bluetooth
          </button>
        </div>

        {/* Cards Section */}
        <div className="mt-4">
          <h3 className="text-md font-semibold">Cards</h3>
          {user.cards.map((card, index) => (
            <div key={index} className="bg-gray-200 flex items-center p-3 mt-2 rounded-lg">
              <FaCreditCard className="text-blue-600 mr-2" />
              <span>{card.type} / {card.number}</span>
            </div>
          ))}
        </div>

        {/* Transactions Table Section */}
        <div className="mt-6">
          <h3 className="text-md font-semibold">Last 5 Transactions</h3>
          <table className="w-full mt-2 border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-3 py-1">Name</th>
                <th className="border px-3 py-1">Amount</th>
                <th className="border px-3 py-1">Mode</th>
              </tr>
            </thead>
            <tbody>
              {user.transactions.slice(0, 5).map((txn, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-3 py-1">{txn.name}</td>
                  <td className={`border px-3 py-1 ${txn.type === "credit" ? "text-green-500" : "text-red-500"}`}>{txn.amount}</td>
                  <td className="border px-3 py-1">{txn.mode}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
