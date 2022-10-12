import { RectangleButton, TitleWithArrow } from "../../Components";

const DiscoutCode = () => {
  return (
    <div>
      <div className="mb-10">
        <TitleWithArrow
          text={"discount code"}
          textStyle={{ fontSize: "30px" }}
        />
      </div>
      <div className="mb-7">
        <span className="!mb-3 block normal-case">
          Enter discount code if you have one
        </span>
        <input
          type="text"
          className="border rounded-lg outline-none h-10 !px-5 w-full font-normal"
          placeholder="Your code..."
        />
      </div>
      <div className="">
        <RectangleButton text="apply your code" />
      </div>
    </div>
  );
};

export default DiscoutCode;
