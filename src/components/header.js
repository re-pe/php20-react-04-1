import logoArrow from '../img/logo-arrow.png'
import logoText from '../img/logo-text.png'
import Tags from '../helpers/tags'
const { div, header, img } = Tags;


// function Header() {
//     return (
//         <header className="App-header">
//             <div>
//                 <img src={logoArrow} className="App-logo w-100 h-auto" alt="logo" />
//             </div>
//             <div>
//                 <img src={logoText} className="my-4" alt="logo" />
//             </div>
//         </header>
//     )
// }

function Header() {
    return (
        header(
            { className: "App-header" },
            div(
                img({ src: logoArrow, className: "App-logo w-100 h-auto", alt: "logo" })
            ),
            div(
                img({ src: logoText, className: "my-4", alt: "logo" })
            )
        )
    );
}

// Markup'o projektas
// const Header = () => `
//     $header { className="App-header" } [
//         $div[ $img{ src=logoArrow className="App-logo w-100 h-auto" alt="logo"} ]
//         $div[ $img.src(logoText).className("my-4").alt("logo") ]
//     ]
// `

export default Header