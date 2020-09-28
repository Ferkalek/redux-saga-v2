import { showAlert } from "./actions";
import { CREATE_POST } from "./types";

const forbidenWords = ["fuck", "php"];
export function spamWordsMiddleware({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === CREATE_POST) {
        const spamArr = forbidenWords.filter(
          (w) =>
            action.payload.title.includes(w) ||
            action.payload.description.includes(w)
        );
        if (spamArr.length) {
          return dispatch(
            showAlert(
              `These words are forbidden ${spamArr.join(", ")}`,
              "danger",
              2000
            )
          );
        }
      }

      return next(action);
    };
  };
}
