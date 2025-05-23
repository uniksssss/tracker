import './habit-item.css'
import { useEffect } from 'react';

export type HabbitItemProps ={
    name: string;
    description: string;
    weeks: number;
    onDelete: () => void;
    checked: boolean[];
    onCheck: (checked: boolean[]) => void;
}

function HabbitItem({name, description, weeks, onDelete, checked, onCheck}: HabbitItemProps){
    const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
    const totalDays = weeks * 7;
    // const [checked, setChecked] = useState<boolean[]>(Array(totalDays).fill(false));

    function handleCheckHabbit(index: number){
        const newChecked = checked.map((val, i)=>(i === index ? !val : val));
        onCheck(newChecked);
    }

    const activeCount = checked.filter(Boolean).length;

    useEffect(() => {
            localStorage.setItem('checked', JSON.stringify(checked));
        }, [checked]);

    return(
        <div className="habit-item">
            <button className="button-delete" onClick={onDelete}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                </svg>
            </button>
            <div className="habit-item_content">
                <h1 className='habit_name'>{name}</h1>
                <p className='habit_description'>{description}</p>
                <div className='habit_weeks'>
                    {Array.from({length: totalDays}).map((_, index) => (
                        <div className="habit_day" key={index}>
                            <span className='habit_day_name'>{days[index % 7]}</span>
                            <input 
                            key={index}
                            type="checkbox"
                            className='habit-checkbox'
                            checked={checked[index]}
                            onChange={() => handleCheckHabbit(index)}
                            />
                        </div>  
                    ))}
                </div>
                <span className='totalHabitDays'>Выполнено: {activeCount}</span>
            </div>
        </div>
    )
}

export default HabbitItem;
