const Contact = () => {
  return (
    <div>
      <div className="p-8 border w-1/4 flex justify-center flex-col">
        <h1 className="text-2xl font-medium">Contact Us</h1>
        <form>
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="name"
              className="border p-2 rounded-sm mt-2"
            />
            <input
              type="text"
              placeholder="message"
              className="border p-2 rounded-sm mt-2"
            />
            <button className="bg-blue-400 w-1/4 p-2 rounded-md mt-2 text-white cursor-pointer">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
