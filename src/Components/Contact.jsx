const Contact = () => {
  return (
    <div className="max-w-md w-full mt-20 mx-auto p-6 bg-gray-300 round-lg shadow-md">
      <h2 className="text-3xl text-center text-black-600 font-bold mb-6">
        Contact Us
      </h2>
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-2">
          Your Name
        </label>
        <input
          placeholder=""
          className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:border-blue-500 "
          type="text"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block black-white text-sm font-semibold mb-2">
          {" "}
          Your Email
        </label>
        <input
          placeholder=""
          className="w-full px-3 py-2 border rounded-lg bg-white-800 focus:border-blue-500 "
          type="text"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-semibold mb-2">
          Your Message
        </label>
        <textarea
          rows={4}
          placeholder="Type your message here ..."
          className="w-full px-3 border rounded-lg bg-white-800"
        />
      </div>
    </div>
  );
};

export default Contact;
