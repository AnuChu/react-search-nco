import React, {useState} from 'react';
import {Button, Container, InputGroup, FormControl, Form} from "react-bootstrap";
import ControlledAccordions from './list';
import './main.css';

export default function Main() {

    const [serverResponse, setServerResponse] = useState()
    const [query, setQuery] = useState()

    const SearchOrg = async (e) => {
        e.preventDefault()
        const orgn = e.target.orgn.value
        console.log(orgn)
        const response = await fetch('http://localhost:5000/api/get?orgn=' + orgn);
        const body = await response.json();
        if (response.status !== 200) throw Error(body.message);
        setServerResponse(body.res)
    }

    return (
        <div>
            <div className={"wrapper"}>
                <Container>

                    <div className="logo">
                        <span className="logo">
                        <img src='./rnd.svg' width="14%" alt={"logo"}/>
                        </span>
                        <span className="logo">
                        <img src='./textlogo1.svg' width="26%" alt={"logo"}/>
                    </span>
                        <span className="logo">
                        <img src='./asi1.svg' width="26%" alt={"logo"}/>
                        </span>
                    </div>

                </Container>
                <div className="header">
                    <Container>
                        <h1>Сервис проверки доступности мер поддержки для СО НКО Ростовской области</h1>
                    </Container>
                </div>
                <Container>
                    <p className="text1">
                        Найдите свою организацию в <a
                        href="http://nko.economy.gov.ru/Public/NewsPage/Details.html?id=101">федеральном
                        реестре СО НКО Минэкономразвития России</a>, списке организаций,
                        наиболее пострадавших в условиях распространения новой коронавирусной инфекции и
                        претендующих на
                        дополнительные меры государственной поддержки или подайте заявку на включение
                    </p>

                    <Form className="input" onSubmit={SearchOrg}>
                        <InputGroup className="shadow mb-3">
                            <FormControl
                                placeholder="Введите ОГРН или ИНН"
                                aria-label="Введите ОГРН или ИНН"
                                name="orgn"
                                type="number"
                                className="raz"
                                onChange={e => setQuery(e.target.value)}
                            />

                            <InputGroup.Append>
                                <Button variant="primary fa fa-search" type="submit"
                                        disabled={!query}/>
                            </InputGroup.Append>

                        </InputGroup>
                    </Form>

                    <div className={serverResponse === undefined ? 'none' : "mt-3 mb-3"}>
                        <div className={serverResponse === false ? 'none' : "server-response live"}>
                            Данная организациия <b>входит</b> в реестр СОНКО-получателей поддержки
                        </div>
                        <div className={serverResponse === true ? 'none' : "server-response nolive"}>
                            Данная организациия <b>НЕ входит</b> в реестр СОНКО-получателей поддержки или введены
                            неправильные данные
                        </div>
                    </div>

                    <div className="list shadow">
                        <ControlledAccordions/>
                    </div>


                </Container>
                <div className="wawa">
                    <img src="./waves.svg" width="100%" alt={"wave"}/>
                </div>
            </div>
            <div className="footer">
                <Container>
                    <div className="container-fluid">
                        <div className="row">

                            <p>
                                <br/>
                                Сервис предоставляет исключительно справочную информацию.
                                <br/>
                                Рекомендуем перед подачей документов
                                на возмещение затрат дополнительно проверять данные по организации в соответствующем
                                реестре
                                <br/>
                                <br/>
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}
