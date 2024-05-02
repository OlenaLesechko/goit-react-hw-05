import { BallTriangle } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
    return (
        <div className={css.loader}>
        <BallTriangle
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
        />
        </div>
    );
}

export default Loader