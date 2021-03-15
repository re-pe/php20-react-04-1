import { useState } from 'react';
import Tags from '../helpers/tags';

const { button, div, h1, main, p } = Tags;

const Main = () => {
    const [likes, setLikes] = useState(0);
    const [hates, setHates] = useState(0);

    const countLikes = () => setLikes(likes + 1);
    const countHates = () => setHates(hates + 1);
    const resetStatus = () => { setLikes(0); setHates(0); };

    const btnData = {
        1: { case: 'success', action: countLikes, textContent: `Like ${likes}` },
        2: { case: 'danger', action: countHates, textContent: `Hate ${hates}` },
        3: { case: 'info', action: resetStatus, textContent: 'Reset' },
    };

    /**
     * su jsx
     */
    // return (
    //     <main className="row text-start">
    //         <div className="col">
    //             <h1>Post</h1>
    //             <p>
    //                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
    //                 suscipit, deserunt dicta quam soluta ipsum odio veritatis pariatur
    //                 quia beatae error nisi delectus expedita, voluptatum nobis. Rem
    //                 ducimus ad minima!
    //             </p>
    //             {Object.entries(btnData).map(([id, props]) => (
    //                 <button
    //                     key={id}
    //                     type="button"
    //                     className={`btn btn-${props.case} mx-2`}
    //                     onClick={props.action}
    //                 >
    //                     {props.textContent}
    //                 </button>
    //             ))}
    //         </div>
    //     </main>
    // );

    return main(
        { className: 'row text-start' },
        div(
            { className: 'col' },
            h1('Post'),
            p(
                `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                suscipit, deserunt dicta quam soluta ipsum odio veritatis pariatur
                quia beatae error nisi delectus expedita, voluptatum nobis. Rem
                ducimus ad minima!`,
            ),
            ...Object.entries(btnData).map(
                ([id, props]) => button({
                    key: id,
                    type: 'button',
                    className: `btn btn-${props.case} mx-2`,
                    onClick: props.action,
                }, props.textContent),
            ),
        ),
    );
};

export default Main;
