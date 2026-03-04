import './App.css'
import icon3 from "./assets/icon3.jpg";
import icon4 from "./assets/icon4.jpg";
import icon2 from "./assets/icon2.jpg";

import { useRef } from "react";
import { SEO } from "./SEO.tsx";

function App() {

    const btnRefs = useRef<HTMLButtonElement[]>([]);

    const handleMove = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
        const btn = btnRefs.current[index];
        if (!btn) return;

        const rect = btn.getBoundingClientRect();
        const offsetX = e.clientX - (rect.left + rect.width / 2);
        const offsetY = e.clientY - (rect.top + rect.height / 2);

        const moveX = offsetX > 0 ? -50 : 50;
        const moveY = offsetY > 0 ? -50 : 50;

        btn.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };

    const handleLeave = (index: number) => {
        const btn = btnRefs.current[index];
        if (!btn) return;
        btn.style.transform = "translate(0,0)";
    };

  return (
    <>
        <nav>
            <a href="/">
                Про нас
            </a>
            <a href="/">
                Концерти
            </a>
            <a href="/">
                Контакти
            </a>
        </nav>


        <div className="main">
            <div className="main-text">
                <SEO
                    title="Національний Симфонічний Оркестр"
                    description="Національний Філармонічний Оркестр — концерти, афіша, новини."
                    keywords="оркестр, симфонічний, концерт, Київ, класична музика, афіша"
                    image="https://national-phil-orc.vercel.app/assets/og-image.png"
                    url="https://national-phil-orc.vercel.app"
                />

                <h1>
                    Симфонічний Аркєстр
                </h1>

                <h4>
                    МУзИкА КонЧіЛаСь
                </h4>
            </div>
        </div>

        <div className="about">

            <div className="about-left">
                <img src={icon2} alt="Теодор Кухар"/>

                <h2>
                    Тіодор & Co.
                </h2>
            </div>

            <div className="about-right">
                <h4>
                    Наш симфонічний оркестр об'єднує професійних музикантів, які виконують шедеври світової класики та сучасної музики. Але граєм Аніме опенінги і шароварщину. На цьому все. МУзИкА КонЧіЛаСь
                </h4>
            </div>
        </div>

        <div className="posters">
            <h2>
                Найближчі концерти
            </h2>

            <div className="poster">
                <div className="poster-left">
                    <div className="poster-text">
                        <h2>Фольклорні пісні дружніх народів</h2>
                        <h3>21 жовтня 2026 - Велика зала Філармонії</h3>
                    </div>


                    <button
                        ref={(el) => {
                            if (el) btnRefs.current[0] = el; // записуємо у масив
                        }}
                        onMouseMove={(e) => handleMove(e, 0)}
                        onMouseLeave={() => handleLeave(0)}
                    >
                        Придбати квиток
                    </button>
                </div>

                <img src={icon3} alt="Фольклорні пісні дружніх народів"/>
            </div>

            <div className="poster">
                <div className="poster-left">
                    <div className="poster-text">
                        <h2>СимфоРоблокс</h2>
                        <h3>15 жовтня 2026 - Велика зала Філармонії</h3>
                    </div>

                    <button
                        ref={(el) => {
                            if (el) btnRefs.current[0] = el; // записуємо у масив
                        }}
                        onMouseMove={(e) => handleMove(e, 0)}
                        onMouseLeave={() => handleLeave(0)}
                    >
                        Придбати квиток
                    </button>
                </div>

                <img src={icon4} alt="СимфоРоблокс"/>

            </div>
        </div>

        <div className="contacts">
            <h2>
                Контакти
            </h2>

            <h4>
                Email: orchestra@gmail.com
            </h4>

            <h4>
                Телефон: +380 00 000 00 00
            </h4>
        </div>

        <footer>
            <h3>Стмфонічний Оркестр | Усі права захищені</h3>
        </footer>

    </>
  )
}

export default App
