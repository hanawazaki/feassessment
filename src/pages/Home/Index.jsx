import { useState } from "react";
import ListTask from "../../components/ListTask";

export default function Index() {

  const [data, setData] = useState([

  ])
  const [newTask, setNewtask] = useState("")

  const handleDelete = (id) => {
    console.log('delete', id)
    setData(prevData => {
      return prevData.filter((item) => id !== item.id


        // {

        //   // const deletedidx = id !== item.id

        //   // const currentData = JSON.parse(localStorage.getItem('tasks')) || []

        //   // if (deletedidx !== -1) {
        //   //   currentData.splice(deletedidx, 1)
        //   // }

        //   // localStorage.setItem("tasks", JSON.stringify(currentData))

        // }

      )
    })
  }

  const handleKeyUp = async (e) => {
    if (e.key === 'Enter') {
      addTask()
    }
  }
  const handleNewTask = (e) => {
    setNewtask(e.target.value)
  }

  const addTask = () => {
    const newtask = {
      id: data.length + 1,
      taskname: newTask,
      isDone: false
    }

    const newData = [...data]

    newData.push(newtask)

    setData(newData)
    setNewtask("")
  }

  return (
    <main>
      <div className="flex flex-col justify-center gap-8">
        <h1 className="text-center text-4xl font-bold text-gray-700">
          Task List
        </h1>
        <div className="input mx-auto flex justify-center w-[300px] mb-6">
          <input value={newTask} onKeyUp={handleKeyUp} onChange={handleNewTask} type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none " placeholder="what are we going to do?" />
        </div>
        <div className="mx-[200px] border rounded-lg p-8">
          {
            data.length ?
              data && data.map((item) => {
                return (

                  <>
                    <ListTask item={item} key={item.id} handleDelete={handleDelete} />
                  </>
                )
              }) :

              <>
                <h1 className="flex justify-center font-mono text-gray-400">no data</h1>
              </>
          }
        </div>
      </div>
    </main>
  )
}
