import './main-screen.css'
import Button from '../button/button';
import HabbitForm from '../habbit-form/habbit-form';
import HabbitList from '../habits-list/habbit-list';  
import { useState } from 'react';
import type { HabbitItemProps } from '../habit-item/habbit-item';

function MainScreen(){
    const [showForm, setShowForm] = useState(false);
    const [habits, setHabits] = useState<HabbitItemProps[]>([]);
    
    function handleAddHabbit(){
        setShowForm(true);
    }

    function handleDeleteHabbit(idx: number){
        setHabits(habits.filter((_, index) => index !== idx));
    }

    function handleCreateHabit(habit: HabbitItemProps){
        setHabits([...habits, habit]);
    }

    return(
        <>
            <header className='header'>
                <h1 className='header_text'>Трекер привычек</h1>
            </header>
            <Button text ="Добавить привычку" onClick={handleAddHabbit} type="button"/>
            {showForm && <HabbitForm onClose={()=> setShowForm(false)} onCreate={handleCreateHabit}/>}
            <HabbitList habits={habits} onDelete={handleDeleteHabbit}/>
        </>
    )
}

export default MainScreen;