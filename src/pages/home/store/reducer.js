import { fromJS } from "immutable";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});

// const changeHomeData = (state, action) => {
//   return state.merge({
//     topicList: fromJS(action.topicList),
//     articleList: fromJS(action.articleList),
//     recommendList: fromJS(action.recommendList)
//   });
// };

export default function reducer(state = defaultState, action) {
  return state;
};
