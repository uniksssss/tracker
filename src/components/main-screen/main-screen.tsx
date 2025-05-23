import './main-screen.css'
import Button from '../button/button';
import HabbitForm from '../habbit-form/habbit-form';
import HabbitList from '../habits-list/habbit-list';  
import { useState, useEffect } from 'react';
import type { HabbitItemProps } from '../habit-item/habbit-item';

function MainScreen(){
    const [showForm, setShowForm] = useState(false);
    const [habits, setHabits] = useState<HabbitItemProps[]>(() => {
    const saved = localStorage.getItem('habits');
    if (!saved) return [];
    try {
        const parsed = JSON.parse(saved);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return parsed.map((habit: any) => ({
            ...habit,
            checked: Array.isArray(habit.checked)
                ? habit.checked
                : Array((habit.weeks || 1) * 7).fill(false),
        }));
    } catch {
        return [];
    }
});
    
    function handleAddHabbit(){
        setShowForm(true);
    }

    function handleDeleteHabbit(idx: number){
        setHabits(habits.filter((_, index) => index !== idx));
    }

    function handleCreateHabit(habit: HabbitItemProps){
        setHabits([...habits, habit]);
    }

    function handleCheck(idx: number, checked: boolean[]){
        setHabits(habits =>
            habits.map((habit, i) =>
                i === idx ? {...habit, checked} : habit
            )
        );
    }

    useEffect(() => {
        localStorage.setItem('habits', JSON.stringify(habits));
    }, [habits]);

    return(
        <>
            <header className='header'>
                <h1 className='header_text'>Трекер привычек</h1>
            </header>
            <Button text ="Добавить привычку" onClick={handleAddHabbit} type="button"/>
            {showForm && <HabbitForm onClose={()=> setShowForm(false)} onCreate={handleCreateHabit}/>}
            <HabbitList habits={habits} onDelete={handleDeleteHabbit} onCheck={handleCheck}/>
        </>
    )
}

export default MainScreen;