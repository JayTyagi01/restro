import React, { useState, useEffect } from "react";
import axios from "axios";

const ReservationList = () => {
  const [tables, setTables] = useState([]);
  const [confirmedTables, setConfirmedTables] = useState([]);

  // Fetch available tables from the backend
  const fetchTables = async () => {
    try {
      const response = await axios.get(
        "https://restaurant-server-chi.vercel.app/api/reservation"
      );
      setTables(response.data);
      console.log(response.data);
    } catch (error) {
      // Handle error, e.g., show an error message to the user
    }
  };

  const handleDeleteReservation = (reservationId) => {
    console.log(reservationId);

    axios
      .delete(
        `https://restaurant-server-chi.vercel.app/api/reservation/${reservationId}`
      )
      .then((response) => {
        console.log("Reservation deleted successfully:", response.data);
        fetchTables();
      })
      .catch((error) => {
        console.error("Error deleting reservation:", error);
      });
  };

  const handleConfirmReservation = (
    reservationId,
    userEmail,
    tableId,
    tableName,
    tableDate,
    tableSize,
    tableSelectedHour,
    tableSelectedPeriod
  ) => {
    axios
      .post(
        "https://restaurant-server-chi.vercel.app/api/reservation/sendConfirmationEmail",
        {
          reservationId: reservationId,
          userEmail: userEmail,
          userName: tableName,
          userDate: tableDate,
          userSize: tableSize,
          userTime: tableSelectedHour,
          userPeriod: tableSelectedPeriod,
        }
      )
      .then((response) => {
        console.log("Confirmation email sent successfully:", response.data);
        setTimeout(() => {
          handleDeleteReservation(reservationId);
        }, 10000);
        setConfirmedTables([...confirmedTables, tableId]); // Mark this table as confirmed
        fetchTables();
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
      });
  };

  const handleDeleteMailReservation = (
    reservationId,
    userEmail,
    tableId,
    tableName,
    tableDate,
    tableSize,
    tableSelectedHour,
    tableSelectedPeriod
  ) => {
    axios
      .post(
        "https://restaurant-server-chi.vercel.app/api/reservation/sendDeleteEmail",
        {
          reservationId: reservationId,
          userEmail: userEmail,
          userName: tableName,
          userDate: tableDate,
          userSize: tableSize,
          userTime: tableSelectedHour,
          userPeriod: tableSelectedPeriod,
        }
      )
      .then((response) => {
        console.log("Confirmation email sent successfully:", response.data);
        handleDeleteReservation(reservationId);
      })
      .catch((error) => {
        console.error("Error sending confirmation email:", error);
      });
  };

  useEffect(() => {
    fetchTables();
  }, []);

  return (
    <div className="bg-gray-200 p-4">
      <h2 className="text-2xl text-white bg-black p-2 rounded-lg shadow-md">
        Reservation Lists
      </h2>
      <ul className="mt-4">
        {tables.map((table) => (
          <li
            key={table._id}
            className={`p-4 rounded-lg shadow-md mb-4 sm:flex flex-col ${
              confirmedTables.includes(table._id) ? "bg-green-200" : "bg-white"
            }`}
          >
            <div className="mb-4">
              <p className="text-gray-700 overflow-hidden whitespace-nowrap overflow-ellipsis">
                {console.log(table)} User Email: {table.email}
                <br />
                Phone Number: {table.phone}
                <br />
                Booking Time: {table.selectedHour + table.selectedPeriod}
                <br />
                Date: {table.date.split("T")[0]}
                <br />
                Name: {table.name}
                <br />
                Guests: {table.partySize}
              </p>
            </div>
            <div className="flex justify-end flex-col sm:flex-row sm:items-center">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md mb-2 sm:mb-0 sm:mr-2"
                onClick={() =>
                  handleDeleteMailReservation(
                    table._id,
                    table.email,
                    table._id,
                    table.name,
                    table.date.split("T")[0],
                    table.partySize,
                    table.selectedHour,
                    table.selectedPeriod
                  )
                }
              >
                Delete
              </button>
              {!confirmedTables.includes(table._id) && (
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  onClick={() =>
                    handleConfirmReservation(
                      table._id,
                      table.email,
                      table._id,
                      table.name,
                      table.date.split("T")[0],
                      table.partySize,
                      table.selectedHour,
                      table.selectedPeriod
                    )
                  }
                >
                  Confirm
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReservationList;
