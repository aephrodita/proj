import iconError from './images/new-logo.png';

export default function ErrorPage(){

    return (
        <div class="placeholder-main">
            <div class="placeholder-page">
                <span>
                    <img alt="logo" src={iconError}/>
                    <noscript>
                        <img alt="logo" srcSet="/_next/image?url=%2Ficons%2Fnew-logo.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Ficons%2Fnew-logo.png&amp;w=384&amp;q=75 2x" src="/_next/image?url=%2Ficons%2Fnew-logo.png&amp;w=384&amp;q=75" decoding="async" data-nimg="intrinsic"/>
                    </noscript>
                </span>
                <div class="title text-center my-10">Упс, похоже, такого фильма нет</div>
                <div class="text-medium text-center">Возможно, введен неверный ID фильма</div>
                <div class="d-flex justify-center py-24">
                    <div class="d-flex column">
                        <a href="/" class="btn-link active mb-24">На главную</a>
                        <button class="btn-link">Назад</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


