import React, { useState } from 'react'
import Error from './Error'
import '../scss/form.scss'

function Form () {
  const [inputName, setName] = useState('')
  const [errorName, setErrorName] = useState(false)
  const [inputEmail, setEmail] = useState('')
  const [errorEmail, setErrorEmail] = useState(false)
  const [inputTitle, setTitle] = useState('')
  const [errorTitle, setErrorTitle] = useState(false)

  const rexValidateMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

  function updateValue (e, set) {
    set(e.target.value)
  }

  function sendForm (e) {
    e.preventDefault()
    if (inputName.length > 0) {
      setErrorName(false)
    } else setErrorName(true)
    if (inputEmail.length >0) {
      if (rexValidateMail.test(inputEmail)) {
        setErrorEmail(false)
      }
      else setErrorEmail(true)
    } else setErrorEmail(true)

    if (inputTitle.length > 0) {
      setErrorTitle(false)
    } else setErrorTitle(true)

  }

  return (
    <form action="" className={'general-form'}>
      <div className="row-field">
      <div className={'input-field'}>
        <label>
          <input type='text' placeholder='Your Name' onChange={(e) => updateValue(e, setName)} value={inputName}/>
        </label>
        <Error classStyle={errorName? 'active': ''} placeholder='Your Name' name={'Введите ваше имя'}/>
      </div>
        <div className={'input-field'}>
          <label>
            <input type='text' placeholder='Your Email' onChange={(e) => updateValue(e, setEmail)} value={inputEmail}/>
          </label>
          <Error name={'Введите правильный Email вида inbox@domen.ru'} classStyle={errorEmail? 'active': ''}/>
        </div>
      </div>

      <div className={'input-field'}>
        <label>
          <input type='text' placeholder='Your Title' onChange={(e) => updateValue(e, setTitle)} value={inputTitle}/>
        </label>
        <Error name={'Введите Title'} classStyle={errorTitle? 'active': ''}/>
      </div>
      <div className={'input-field'}>
        <textarea placeholder={'Your Comment'}/>
      </div>

      <button className={`btn`} onClick={(event) => sendForm(event)} type={onsubmit}>send message</button>
    </form>
  )
}

export default Form
