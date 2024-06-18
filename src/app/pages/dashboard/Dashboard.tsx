import { useCallback, useState } from "react"


interface IListItem {
  title: string
  isSelected: boolean
}

export const Dashboard = () => {
  const [lista, setLista] = useState<IListItem[]>([]);

  const handleInputKKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length === 0) return;

      const value = e.currentTarget.value;
      e.currentTarget.value = '';
      setLista((oldLista) => {

        if (oldLista.some((listItem) => listItem.title === value)) return oldLista;

        return [
        ...oldLista, 
        {
          title: value,
          isSelected: false
        }]
      })
    }
  }, [])

  return (
    <>
      <p>Lista</p>
      <input
        onKeyDown={handleInputKKeyDown}
      />
      <p>{lista.filter((listItem) => listItem.isSelected).length}</p>
      <ul>
        {lista.map((listItem) => {
          return<li key={listItem.title}>
            <input
              type="checkbox"
              onChange={() => {
                setLista(oldLista => {
                  return oldLista.map(oldListItem => {
                    const newIsSelected = oldListItem.title === listItem.title
                    ? !oldListItem
                    : oldListItem.isSelected
                    return{
                      ...oldListItem,
                      isSelected: newIsSelected,
                    }
                  })
                })
              }}
            />
            {listItem.title}
          </li>;          
        })}
      </ul>
    </>
  )
}