import { useEffect, useState } from "react";
import { Button, Image } from "antd";

export default function App() {
    const [dogImage, setDogImage] = useState("");

    /* 
    無名関数だとコードが冗長になっちゃうから
    授業内で示された例と同じようにfetchの処理を関数化してるよ
    */
    async function fetchDogImage() {
        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();
        setDogImage(data.message);
    }

    useEffect(() => {
        fetchDogImage();
    }, []);

    return (
        <>
            <header>
                <h1>Dog Dog Dog</h1>
            </header>
            <main>
                <Button variant="contained" onClick={fetchDogImage}>Refresh Dog</Button>
                <Image src={dogImage} alt="Random Dog" />
            </main>
            <footer>
                5422020 池田悠星
                「日本大学文理学部情報科学科 Webプログラミングの演習課題」
            </footer>
        </>
    );
}