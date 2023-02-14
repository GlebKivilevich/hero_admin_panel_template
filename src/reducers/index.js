// const initialState = {
//   heroes: [],
//   heroesLoadingStatus: 'idle',
//   filters: [],
//   elementHero: 'Все',
//   filterLoadingStatus: 'idle',
// };

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'HEROES_FETCHING':
//       return {
//         ...state,
//         heroesLoadingStatus: 'loading',
//       };

//     case 'HEROES_FETCHED':
//       const { hero } = action;
//       return {
//         ...state,
//         heroes: hero,
//         heroesLoadingStatus: 'idle',
//       };

//     case 'HEROES_FETCHING_ERROR':
//       return {
//         ...state,
//         heroesLoadingStatus: 'error',
//       };

//     case 'HEROES_DELETE':
//       return (function () {
//         const { id } = action;
//         const { heroes } = state;

//         return {
//           ...state,
//           heroes: heroes.filter((item) => item.id !== id),
//         };
//       })();

//     case 'HEROES_CREATE':
//       return (function () {
//         const { heroes } = state;
//         const { data } = action;
//         return {
//           ...state,
//           heroes: [...heroes, data],
//         };
//       })();

// //================Filter===================== 

//     case 'FILTER_FETCHING':
//       return {
//         ...state,
//         filterLoadingStatus: 'loading',
//       };

//     case 'FILTER_FETCHED':
//       return {
//         ...state,
//         filters: action.dataFilter,
//         filterLoadingStatus: 'idle',
//       };

//     case 'FILTER_ERROR':
//       return {
//         ...state,
//         filterLoadingStatus: 'error',
//       };

//     case 'ELEMENT_FILTER':
//       return (function () {
//         const { filter } = action;
//         return {
//           ...state,
//           elementHero: filter,
//         };
//       })();

//     default:
//       return state;
//   }
// };

// export default reducer;
