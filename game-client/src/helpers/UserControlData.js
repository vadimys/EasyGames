import types from "../redux/constants";

export default function userControlData(data) {
  if (!data) {
    return [{
      type: types.FAVORITE,
      name: "bookmark",
      mr: "mr-5"
    }, {
      type: types.LIKE,
      name: "thumbs-up",
      mr: "mr-2"
    }];
  } else if (data === types.FAVORITE) {
    return [{
      type: types.FAVORITE,
      name: "bookmark",
      mr: "mr-0"
    }];
  } else {
    return [{
      type: types.LIKE,
      name: "thumbs-up",
      mr: "mr-2"
    }];
  }
}
