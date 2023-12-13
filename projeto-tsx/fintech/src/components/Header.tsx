import DateRange from "./DateRange";
import Months from "./Months";

const Header = () => {
  return (
    <header className="mb">
      <div className="mb">
        <DateRange />
      </div>

      <Months />
    </header>
  );
};

export default Header;
