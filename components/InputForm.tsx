const InputForm = ({ type, name, placeholder }) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label htmlFor="LastName">Last Name</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder ? placeholder : ""}
          className="border-grey-500 p-4 border-2 rounded-md h-12 w-full md:w-72"
        />
      </div>
    </>
  );
};

export default InputForm;
