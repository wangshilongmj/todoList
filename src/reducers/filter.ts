const filter = (preState='SHOW_ALL', action: any) => {
    console.log('filter');
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
          return action.filter;
        default:
          return preState;
      }
}
export default filter;