import './Button.css'


const Button = ({handleClick, text}) => {

    return (
        <button className={'Button'} onClick={() => handleClick('Viktoria')}>
            {text}
        </button>
    )
}

export default Button;