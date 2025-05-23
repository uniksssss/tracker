import type { HabbitItemProps } from "../habit-item/habbit-item";
import HabbitItem from "../habit-item/habbit-item";
import './habbits-list.css';

type HabbitListProps = {
    habits: HabbitItemProps[];
    onDelete: (idx: number) => void;
}

function HabbitList({habits, onDelete}: HabbitListProps){
    return(
        <>
            <div className="habits-container">
                {habits.map((habit, idx) => (
                    <HabbitItem key={idx} {...habit} onDelete={()=>onDelete(idx)} />
                ))}
            </div>
        </>
    )
}

export default HabbitList;