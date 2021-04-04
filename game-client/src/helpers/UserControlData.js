import types from '../redux/constants'

export default function userControlData(isFull = true) {
  if (isFull) {
    return [{
      type: types.FAVORITE,
      name: 'bookmark',
      mr: 'mr-5'
    }, {
      type: types.LIKE,
      name: 'thumbs-up',
      mr: 'mr-2'
    }]
  } else {
    return [{
      type: types.FAVORITE,
      name: 'bookmark',
      mr: 'mr-0'
    }]
  }
}
