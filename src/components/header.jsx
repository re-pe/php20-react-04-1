import logoArrow from '../img/logo-arrow.png';
import logoText from '../img/logo-text.png';
import Tags from '../helpers/tags';

const { div, header, img } = Tags;

function Header() {
    /**
     * W/ jsx
     */
    // return (
    //     <header className="App-header">
    //         <div>
    //             <img src={logoArrow} className="App-logo w-100 h-auto" alt="logo" />
    //         </div>
    //         <div>
    //             <img src={logoText} className="my-4" alt="logo" />
    //         </div>
    //     </header>
    // );

    /**
     * w/o jsx
     */
    return (
        header(
            { className: 'App-header' },
            div(
                img({ src: logoArrow, className: 'App-logo w-100 h-auto', alt: 'logo' }),
            ),
            div(
                img({ src: logoText, className: 'my-4', alt: 'logo' }),
            ),
        )
    );

    /**
     * Markup'o projektas
     */
    // return `
    //     $header { className="App-header" } [
    //         $div[ $img{ src=logoArrow className="App-logo w-100 h-auto" alt="logo"} ] // curly syntax
    //         $div[ $img.src(logoText).className("my-4").alt("logo") ] // dot syntax
    //     ]
    // `;
}

export default Header;
