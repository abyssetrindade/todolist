const search = ({path}) => {
    return fetch(`/api/${path}`)
};

const remove = ({path, id}) => {
    return fetch(`/api/${path}/${id}`, {
        method: 'DELETE'
    });
}; 


export { search, remove };

