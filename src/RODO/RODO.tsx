import './RODO.css';

const RODO = () => {
    const openRODO = () => {
        window.open('RODO.pdf', '_blank');
    };

    return (
        <div className="rodo-container">
            <a href="#" onClick={openRODO}>
                <img src='padlock.png' alt='Open RODO' />
            </a>
            <p>RODO</p>
        </div>
    );
};

export default RODO;