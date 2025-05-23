import Button from "../button/button";
import { useState } from "react";
import './habbit-form.css';
import type { HabbitItemProps } from "../habit-item/habbit-item";

type HabbitFormProps = {
    onClose: () => void;
    onCreate: (habit: HabbitItemProps) => void;
}

function HabbitForm({ onClose, onCreate }: HabbitFormProps) {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [weeks, setWeeks] = useState("");

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        onCreate({
            name, description, weeks: Number(weeks),
            onDelete: function (): void {
                throw new Error("Function not implemented.");
            }
        });
        onClose();
    }

    return (
        <div className="form-container"> 
            <form method='get' className='form' onSubmit={handleSubmit}>
                <button
                    className="closedButton"
                    type="button"
                    onClick={onClose}
                >X</button>
                <div className="form_item form_name">
                    <label className="form-label">Название привычки: </label>
                    <input type='text' className='form-input' placeholder='Введите привычку' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div className="form_item form_description">
                    <label className="form-label">Описание привычки: </label>
                    <input type='text' className='form-input' placeholder='Введите описание' value={description} onChange={e => setDescription(e.target.value)}/>
                </div>
                <div className="form_item form_weeks">
                    <label className="form-label">Цель: </label>
                    <input type='number' className='form-input' placeholder='Введите количество недель' value={weeks} onChange={e => setWeeks(e.target.value)}/>
                </div>
                
                <Button text="Создать" type="submit" />
            </form>
        </div>
    )
}

export default HabbitForm;