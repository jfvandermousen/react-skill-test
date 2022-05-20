import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { timeActions } from "../store/time";
import Button from "../components/Button";
import TimeSpend from "../components/TimeSpend";


const HomePage = () => {

	const dispatch = useDispatch();
	const [showTimer,setShowTimer] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(timeActions.updateTime(1));
		}, 1000);
		return () => clearInterval(interval); // add clearInterval
	}, [dispatch]);

	
	// toggle function on button
	const handleToggle = () => {
        setShowTimer(!showTimer)
      }

	// remove h-screen  from className
	return <div className="w-full flex flex-col justify-center items-center"> 
		<h1 className="my-4 text-3xl">Welcome to Ucan</h1>
	  	
		{showTimer && <TimeSpend className='mb-4' /> }

		<Button className="blue-toggle-btn mb-12" onClick={handleToggle} />

	</div>
}

export default HomePage;


