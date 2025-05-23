import type { HabbitItemProps } from "../habit-item/habbit-item";
import HabbitItem from "../habit-item/habbit-item";
import './habbits-list.css';

type HabbitListProps = {
    habits: HabbitItemProps[];
    onDelete: (idx: number) => void;
    onCheck: (idx:number, checked: boolean[]) => void;
}

function HabbitList({habits, onDelete, onCheck}: HabbitListProps){
    return(
        <>
            <div className="habits-container">
                {habits.map((habit, idx) => (
                    <HabbitItem 
                        key={idx} 
                        {...habit} 
                        onDelete={()=>onDelete(idx)}
                        onCheck={(checked) => onCheck(idx, checked)} />
                ))}
            </div>
        </>
    )
}

export default HabbitList;