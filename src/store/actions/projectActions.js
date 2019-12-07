export const createProjectAC = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'JS',
            authorSecondName: 'Ninja',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_PROJECT', project})
        }).catch((error) => {
            dispatch({type: 'CREATE_PROJECT_ERROR', error})
        });
    }
};