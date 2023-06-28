import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock  } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';
import 'dayjs/locale/sr';
import { useEffect, useState} from "react";


const Header = () => {

  const [promptUserName, setUserName] = useState('')

  useEffect(() => {
    const promptUserName = prompt('Unesi ime korisnika!');
    setUserName(promptUserName);
  }, [])

  const condicionalLogic = promptUserName ? <span>, { promptUserName ? promptUserName : '' }.</span> : '';

  dayjs.locale('sr');
  const formattedDate = dayjs().format('DD. MMMM YYYY.');
  const timeHours = dayjs().format('HH:mm')
  const hours = dayjs().format('HH')
  const isHours = hours >= 6 && hours < 12 ? 'Dobro jutro' :  hours >= 12 && hours <= 18 ? 'Dobar dan' : hours >= 19 && hours <= 22 ? 'Dobro veče' : 'Laku noc';

  return (
    
    <div className={"header"}>
      <div className={'date-calendar'}>
        <span> <FontAwesomeIcon icon={faCalendarDays} /> {formattedDate} </span>
      </div>
      <h1>TODO APP</h1>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <div>

        <h2> <FontAwesomeIcon icon={faClock} /> {timeHours} </h2>
        <h3> { isHours }  { condicionalLogic } </h3>

      </div>


    </div>
  );
};

export default Header;
