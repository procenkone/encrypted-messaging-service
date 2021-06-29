
import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import env from '../env.json'

export default function Note() {
    let { noteURL } = useParams()
    const [noteText, setNoteText] = useState('')
    const [lineClass, setLineCkass] = useState('hide')
    const [formClass, setFormClass] = useState('hide')//
    const [erorrClass, setErorrClass] = useState('hide')//


    useEffect(() => {//пропишем юсЕфект что б загрузить данные из сервера до загрузки страницы, 
        if (noteURL !== undefined) {//проверяем, если noteURL не пустая то продолжаем команду
            fetch(env.urlBackend, {//делаем запрос на бек
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify({ "url": noteURL })// параметром запроса на бек отправляем обект с ключом юрл и значением noteURL - в котором хеш нотатки 
            })
                .then(response => response.json())//получаем ответ от бека в договоренной форме, ето обект с булевым значением и текстом нотатки
                .then(response => {
                    if (response.result) {// проверка, если поле ресалт ответа тру то... 
                        setNoteText(response.note)//положи в стейт поле note ответа бекенда
                        setLineCkass('')
                        setFormClass('hide')
                        setErorrClass('hide')

                    }
                    else if(!response.result){
                        setLineCkass('hide')
                        setFormClass('hide')
                        setErorrClass('')
                    }
                })
        }
        else{
            setLineCkass('hide')
            setFormClass('')
            setErorrClass('hide')
        }

    }, [])

    function getNote(event) {
        event.preventDefault()
        let url = event.target.elements.url.value
        url = url.trim()
        if (url === '') return false;//
        noteURL =url
        window.location.href = env.url+"/"+url
    }

function searchNote() {
    window.location.href=env.url
}
    return (
        <div className='container'>
            <div className={lineClass}>
                
                <div  className='my-3'>{noteText}</div>
                <button className='btn btn-primary my-3' onClick={searchNote} >look for another note</button>
            </div>
            <div className={erorrClass}>
                <p className='my-3' >an error occurred, no such note was found!</p>
            </div>
            <div className={formClass}>
                <form onSubmit={getNote}>
                <input type="text" name='url' id='url' placeholder='enter note hash' className='form-control w-50  my-3' />
                <button type='submit' className='btn btn-primary'>search note</button>
                </form>
            </div>
        </div>
    )
}