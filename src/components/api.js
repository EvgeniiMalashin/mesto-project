
import { request } from './utils.js'

const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-20',
  
  headers: {
    authorization: 'eba3d929-619d-43d7-bba3-39a73ea3edcb',
    'Content-Type': 'application/json'
  }
}


const getUserInfo = () => {
  return request(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
}

const getStartCards = () => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    headers: config.headers
  })
}

const patchEditProfile = (username, description) => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/users/me', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: username,
      about: description,
    })
  })
}

const postNewCard = (name, link) => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/cards', {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    })
  })
}

const putLikeCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
}

const deleteLikeCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}

const patchAvatarEdit = (avatar) => {
  return request('https://nomoreparties.co/v1/plus-cohort-20/users/me/avatar', {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    })
  })
}

const deleteCard = (cardId) => {
  return request(`https://nomoreparties.co/v1/plus-cohort-20/cards/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
}


export {
  getUserInfo, getStartCards, patchEditProfile, postNewCard,
  putLikeCard, deleteLikeCard, patchAvatarEdit, deleteCard
}
