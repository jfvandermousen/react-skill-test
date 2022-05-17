import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timeActions } from "../store/time";
import Button from "./Button";
import TimeSpend from "./TimeSpend";

const HomePage = () => {
	const dispatch = useDispatch();

	const [showTimer,setShowTimer] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(timeActions.updateTime(1));
		}, 1000);
		return () => clearInterval(interval); // add clearInterval
	}, []);

	
	// toggle function on button
	const handleToggle = () => {
        setShowTimer(!showTimer)
      }


	return <div className="w-full h-screen flex flex-col justify-center items-center">
		<h1 className="my-4 text-3xl">Welcome to Ucan</h1>
	  	
		{showTimer && <TimeSpend className='mb-4' /> }

		<Button className="blue-toggle-btn" onClick={handleToggle} />
	
	</div>
}

export default HomePage;