import { useSelector } from "react-redux";
import { timeSelectors } from "../store/time";
import {secondsToHms}  from "../utils/index"; // Import custom function to convert seconds in Minutes, Hours
 


const TimeSpend = ({className}) => {

	const timePassed = useSelector(timeSelectors.getTimePassed);

	return <div className={className}>
		
		<span className="text-xl">Time spend on site: {secondsToHms(timePassed)}</span>
		</div>
}

export default TimeSpend;