import { useState } from "react";
import "./enrollment.css";

export default function Enrollment() {

  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    childAge: "",
    phone: "",
    email: "",
    program: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeLd6oeM6w_oal2fQzNqjCK3GntHeE914157kmrMdkAyLRpvg/formResponse";

    const data = new FormData();
    data.append("entry.41694064", formData.parentName);
    data.append("entry.950814415", formData.childName);
    data.append("entry.931514082", formData.childAge);
    data.append("entry.104654040", formData.phone);
    data.append("entry.982433201", formData.email);
    data.append("entry.1602113941", formData.program);
    data.append("entry.1332691408", formData.message);

    fetch(formURL, {
      method: "POST",
      mode: "no-cors",
      body: data
    });

    setSubmitted(true);
  };

  return (
    <section className="enrollment-page">

      <h1>Enrollment Form</h1>

      {submitted ? (
        <p className="success-msg">
          Thank you! Your response has been submitted.
        </p>
      ) : (
        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="parentName"
            placeholder="Parent Name"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="childName"
            placeholder="Child Name"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="childAge"
            placeholder="Child Age"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            onChange={handleChange}
          />

          <input
            type="text"
            name="program"
            placeholder="Program Interested"
            required
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="4"
            onChange={handleChange}
          />

          <button type="submit">Submit</button>

        </form>
      )}

    </section>
  );
}