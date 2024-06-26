import { useCallback, useEffect, useState } from "react"
import { ITarefa, TarefasService } from "../../shared/services/api/tarefas/TarefaService";
import { ApiException } from "../../shared/services/api/ApiException";


export const Dashboard = () => {
  const [lista, setLista] = useState<ITarefa[]>([]);

  useEffect(() => {
    TarefasService.getAll()
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(result)
        }
      })
  }, [])

  const handleInputKKeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.length === 0) return;

      const value = e.currentTarget.value;
      e.currentTarget.value = '';

      if (lista.some((listItem) => listItem.title === value)) return;

      TarefasService.create({ title: value, isFinished: false })
        .then((result) => {
          if (result instanceof ApiException) {
            alert(result.message)
          } else {
            setLista((oldLista) => [...oldLista, result])
          }
        });
    }
  }, [lista])

  const handleToggleComplete = useCallback((id: number) => {
    const tarefaToUpdate = lista.find((tarefa) => tarefa.id === id);
    if (!tarefaToUpdate) return;

    TarefasService.updateById(id, {
      ...tarefaToUpdate,
      isFinished: !tarefaToUpdate.isFinished
    })
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(oldLista => {
            return oldLista.map(oldListItem => {
              if (oldListItem.id === id) return result;
              return oldListItem;
            })
          })
        }
      })
  }, [lista])

  const handleDelete = useCallback((id: number) => {
    TarefasService.deleteById(id)
      .then((result) => {
        if (result instanceof ApiException) {
          alert(result.message)
        } else {
          setLista(oldLista => {
            return oldLista.filter(oldListItem => oldListItem.id !== id)
          })
        }
      })
  }, [])

  return (
    <>
      <p>Lista</p>
      <input
        onKeyDown={handleInputKKeyDown}
      />
      <p>{lista.filter((listItem) => listItem.isFinished).length}</p>
      <ul>
        {lista.map((listItem) => {
          return <li key={listItem.id}>
            <input
              type="checkbox"
              checked={listItem.isFinished}
              onChange={() => handleToggleComplete(listItem.id)}
            />
            {listItem.title}

            <button onClick={() => handleDelete(listItem.id)}>apagar</button>
          </li>;
        })}
      </ul>
    </>
  )
}