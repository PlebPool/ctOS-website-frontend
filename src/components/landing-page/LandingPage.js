import React, {useEffect, useState} from 'react';
import "./LandingPage.css";
import AnimWrittenText from "../anim-written-text/AnimWrittenText";

const words = ["HEALTH", "CONNECTIVITY", "SECURITY", "YOU", "CRINGE"];
function LandingPage(props) {
    const [article, setArticle] = useState("London");
    const [users, setUsers] = useState(0);
    const [level, setLevel] = useState("Null");
    const [description, setDescription] = useState("Null");
    const [imgUrl, setImgUrl] = useState("Null");

    const [entries, setEntries] = useState([]);

    const fetchEntries = () => {
        fetch("http://localhost:8080/sites")
            .then((response) => response.json())
            .then((data) => {
                setArticle(data[0].siteCity);
                setUsers(data[0].users);
                setLevel(data[0].siteLevel);
                setDescription(data[0].description);
                setImgUrl(data[0].imgUrl);
                console.log(data);
                setEntries(data);
            })
            .catch((err) => console.log(err));
    }

    useEffect(() => {
        fetchEntries();
    }, []);

    function changeToArticle(e, index) {
        console.log(index, entries[index]);
        setArticle(entries[index].siteCity);
        setUsers(entries[index].users);
        setLevel(entries[index].siteLevel);
        setDescription(entries[index].description);
        setImgUrl(entries[index].imgUrl);
    }

    return (
        <div id={"landing-page"}>
            <div className={"landing-page-flex-column"}>
                <AnimWrittenText text_before={"The future of: "} words={words} interval={200} />
                <div className={"landing-page-flex-row"}>
                    <nav>
                        <nav>
                            {entries.map((entry, i) => (
                                <div key={i} onClick={(e) => changeToArticle(e, i)} className={"text-element nav-button"}>
                                    {entry.siteCity}
                                </div>
                            ))}
                        </nav>
                    </nav>
                    <article>
                        <h1>City: {article}</h1>
                        <span><b>Users: {users}</b></span>
                        <span><b>Level: {level}</b></span>
                        <p>{description}</p>
                        <img src={imgUrl}  alt={"oh"} width={"500px"}/>
                    </article>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;