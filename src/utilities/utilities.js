// Utilities
function getYear(){
    const d = new Date();
    return d.getFullYear();
}

const storageName = 'favs';

function getStorage(){

    let favsFromStorage = localStorage.getItem(storageName);

    if(favsFromStorage === null){
        favsFromStorage = JSON.stringify([]);
        localStorage.setItem(storageName, favsFromStorage);
        return [];
    }

    favsFromStorage = JSON.parse(favsFromStorage);

    return favsFromStorage;

}

function addItemToStorage(movie){
    const itemsFromStorage = getStorage();
    const itemsForStorage = [...itemsFromStorage, movie];
    localStorage.setItem(storageName, JSON.stringify(itemsForStorage));
    return itemsForStorage;
}

function isFav(movie){

      const itemsFromStorage = getStorage();

      const isItemInStorage = itemsFromStorage.find(item => item.id === movie.id);

      if(isItemInStorage === undefined){
          return false;
      }else {
          return true;
      }

}

function removeItemFromStorage(movie){
    let itemsFromStorage = getStorage();
    let itemsForStorage = itemsFromStorage.filter(item => item.id !== movie.id);
    localStorage.setItem(storageName, JSON.stringify(itemsForStorage));
    return itemsForStorage;
}

export { getYear, removeItemFromStorage, isFav, addItemToStorage, getStorage }


