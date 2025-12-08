
const Counter = ({ count, onCountChange }) => {
    const handleIncrement = () => {
        onCountChange(count + 1); 
    };

    const handleDecrement = () => {
        if (count > 0) {
            onCountChange(count - 1);
        }
    };

    return (
        <div className="counter-controls">
            <button onClick={handleDecrement}>-</button>
            <span className="count-display">{count}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
    );
}

export default Counter;