import React, { useState } from 'react'
import env from "../env.json"

export default function Create() {
    const [url, setUrl] = useState('')//
    const [lineClass, setLineClass] = useState('hide')//
    const [formClass, setFormClass] = useState('')//
    let sendData = (obj) => {//функция принимает обект с нотаткой и передает ее на бек
        setFormClass('hide')//скрываем форму
        setLineClass('')//показуем строку с юрл и хешом
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: JSON.stringify(obj)//делаем запрос к беку и передаем параметром  обект  который содержит нотатку из формы
        })
            .then(response => response.json())//получаем ответ от бека в договоренной форме, ето обект с булевым значением и хешом
            .then(response => {
                if (response.result) {//проверка, если респонс(ответ) с полем ресалт равен тру то... 
                    setUrl(env.url + '/' + response.url)//запиши в стейт юрл ссылку на компоненту note с полем юрл ответа в котором лежыт хеш
                }
            })
    }

    let loadDataFromForm = (event) => {//функция обработки формы
        event.preventDefault()//останавливаем перезагрузку
        let note = event.target.elements.note.value//достаем и ложем велью из форми в переменную
        note = note.trim()//отсекаем пробелы
        // console.log(note);//контроль велью
        if (note === '') return false;//проверяем не пустая ли строка, если пустая то останавливаем програму
        sendData({ "note": note })//разделяем логику на две функции, ета достает велью и передает обект  в сендДата а сендДата уже делает запрос к бекенду для записи нотатки в таблицу и возврата зашифрованого хеша
    }

    return (
        <div className='container'>

      
            <form onSubmit={loadDataFromForm} className={formClass} >
                <input type="text" className="form-control w-50 my-3" name="note" id="note" placeholder="enter a note" aria-describedby="basic-addon1"/>
                
                <button className='btn btn-primary' type='submit' >create note</button>

            </form>
            <div className={lineClass} >
                <div className='my-3'><p>{url}</p></div>
                <button className='btn btn-primary' onClick={function () { window.location.reload() }}>add new note</button>

            </div>
            <p>copy the note and send to the addressee</p>
        </div>
    )
}