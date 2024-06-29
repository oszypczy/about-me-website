import './RODO.css';

const RODO = () => {
    const downloadRODO = () => {
        const link = document.createElement('a');
        link.href = 'RODO.pdf';
        link.download = 'RODO.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="rodo-container">
            <a href="#" onClick={downloadRODO}>
                <img src='padlock.png' alt='Download RODO' />
            </a>
            <p>RODO</p>
        </div>
    );
};

export default RODO;