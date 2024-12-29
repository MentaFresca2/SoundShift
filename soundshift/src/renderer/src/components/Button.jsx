const BotonUno = ({ children, onClick }) => {
    const handleClick = () => {
        if (onClick) {
            onClick();
        } else {
            console.log('Button clicked!');
        }
    };

    return (
        <button className="BotonUno" onClick={handleClick}>
            {children}
        </button>
    );
};

export default BotonUno;