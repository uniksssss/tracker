import './button.css'

type ButtonProps = {
    text: string;
    onClick?: () => void;
    type: 'button' | 'submit' | 'reset';
}

function Button({text, onClick, type}: ButtonProps){
    return(
        <button className='button' onClick={onClick} type={type}>
            {text}
        </button>
    )
}

export default Button;