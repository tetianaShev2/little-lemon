import { useState } from "react";

function BookingForm() {
  const [form, setForm] = useState({
    date: "",
    time: "",
    numberOfGuests: "",
    occasion: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bookingForm">
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", maxWidth: 200, gap: 20 }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          required
          value={form.date}
          onChange={(e) => {
            setForm({
              ...form,
              date: e.target.value,
            });
          }}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time ">
          required value={form.time}
          onChange={" "}
          {(e) => {
            setForm({
              ...form,
              time: e.target.value,
            });
          }}
          <option>17:00</option>
          <option>18:00</option>
          <option>19:00</option>
          <option>20:00</option>
          <option>21:00</option>
          <option>22:00</option>
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          min={1}
          max={10}
          id="guests"
          required
          value={form.numberOfGuests}
          onChange={(e) => {
            setForm({
              ...form,
              numberOfGuests: e.target.value,
            });
          }}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={form.occasion}
          onChange={(e) => {
            setForm({
              ...form,
              occasion: e.target.value,
            });
          }}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" disabled={!form} value="Make Your reservation" />
      </form>
    </div>
  );
}

export default BookingForm;
