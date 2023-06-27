function searchByTitle(data, title) {
    return data?.products?.filter(p => p.title.toLowerCase().includes(title.toLowerCase()))
}

export { searchByTitle }