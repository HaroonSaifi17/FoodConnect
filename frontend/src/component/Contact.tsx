const Contact = () => {
  return (
    <div>
      <div className="px-[5vw] max-w-screen-2xl mx-auto py-10">
        <div id="contact" className="mx-auto md:min-w-[300px] p-2 max-w-[500px]">
          <h2 className="text-center font-semibold text-3xl">Contact Us</h2>
          <p className="text-center text-sm text-gray-700 mt-2 mb-5">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our plans? Let us know.
          </p>
          <form>
            <p className="font-semibold text-xs mt-3">Email</p>
            <input
              type="text"
              required
              className="bg-gray-200 mt-1 border-none w-full p-2 rounded-md"
              name="email"
              placeholder="example@gmail.com"
            />
            <p className="font-semibold text-xs mt-3">Subject</p>
            <input
              type="text"
              required
              className="bg-gray-200 mt-1 border-none w-full p-2 rounded-md"
              name="subject"
              placeholder="how we can help you"
            />
            <p className="font-semibold text-xs mt-3">Your Message</p>
            <textarea
              required
              className="bg-gray-200 mt-1 border-none w-full rounded-md border-gray-600 p-2"
              name="message"
              placeholder="Leave a message"
            ></textarea>
            <button
              type="submit"
              className="py-2 px-4 hover:bg-blue-600 rounded-lg bg bg-blue-500 text-white mt-3"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
