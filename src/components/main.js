import { useState } from 'react';
import Tags from '../helpers/tags'
const { button, div, h1, main, p } = Tags;


const Main = () => {
    const [likes, setLikes] = useState(0);
    const [hates, setHates] = useState(0);

    const countLikes = () => setLikes(likes + 1)
    const countHates = () => setHates(hates + 1)
    const resetStatus = () => { setLikes(0); setHates(0) }

    const btnData = [
        ['success', countLikes, `Like ${likes}`],
        ['danger', countHates, `Hate ${hates}`],
        ['info', resetStatus, 'Reset'],
    ];

    /**
     * su jsx
     */
    // return (
    //     <main className="row text-start">
    //         <div className="col">
    //             <h1>Post</h1>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
    //             suscipit, deserunt dicta quam soluta ipsum odio veritatis pariatur
    //             quia beatae error nisi delectus expedita, voluptatum nobis. Rem
    //             ducimus ad minima!</p>
    //             {btnData.map((props, id) => (
    //                 <button
    //                     key={id}
    //                     className={`btn btn-${props[0]} mx-2`}
    //                     onClick={props[1]}
    //                 >{props[2]}</button>
    //             ))}
    //         </div>
    //     </main>
    // )

    return main(
        { className: "row text-start" },
        div(
            { className: "col" },
            h1("Post"),
            p(`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet,
                suscipit, deserunt dicta quam soluta ipsum odio veritatis pariatur
                quia beatae error nisi delectus expedita, voluptatum nobis. Rem
                ducimus ad minima!`
            ),
            btnData.map(
                (props, id) => button({
                    key: id,
                    className: `btn btn-${props[0]} mx-2`,
                    onClick: props[1],
                }, props[2])
            )
        )
    )
}

export default Main;
