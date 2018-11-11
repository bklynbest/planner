const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'random stuff' },
    { id: '2', title: 'I got that money in the bank', content: 'random things are sure' },
    { id: '3', title: 'help me find peach', content: 'even more random things' }
  ]
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT': 
      console.log('created project', action.project)
  }
  return state;
};

export default projectReducer;
