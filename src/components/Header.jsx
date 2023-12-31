import viteLogo from '/vite.svg'
import reactLogo from '../assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faClock  } from '@fortawesome/free-solid-svg-icons'
import dayjs from 'dayjs';
import 'dayjs/locale/sr';
import { useEffect, useState} from "react";
import { toast } from "react-toastify";


const Header = () => {

    //  Notify WELCOME Alert

    const toastSettingWelcome =   {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    }

    const toastSettingError =   {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    }
  
    const notifyWelcome = () =>
      toast.success("Dobro došli na Todo aplikaciju!",
      { ...toastSettingWelcome }
    );

    const notifyError = () =>
    toast.error("Unesite Vaše korisničko ime prilikom sledećeg pokretanja aplikacije!!!",
    { ...toastSettingError }
  );
  
    // End  WELCOME Succes Alert

  const [promptUserName, setUserName] = useState('');

  useEffect(() => {

    const promptUserName = localStorage.getItem('userName');

    if (promptUserName) {
      setUserName(promptUserName);
    } else {
      const promptStorageValue = prompt('Unesite Vaše korisničko');
      if (promptStorageValue) {
        localStorage.setItem('userName', promptStorageValue);
        setUserName(promptStorageValue);
        notifyWelcome();
      } else {
        notifyError();
      }
    }

   
  }, []);


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
