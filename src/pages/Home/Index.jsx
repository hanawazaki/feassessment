import { useEffect, useState } from "react";
import ListTask from "../../components/ListTask";
import Spinner from "../../components/Spinner";
import axios from "axios";

export default function Index() {

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchData = async () => {
    try {
      setIsLoading(true)
      await axios.get('http://localhost:3000/tasks')
        .then((response) => {
          if (response.data) {
            setData(response.data);
            console.log(response.data)
            setIsLoading(false);
          } else {
            throw new Error('Respon tidak memiliki data JSON.');
          }
        })
    } catch (err) {
      console.log(err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <main>
      <div className="flex flex-col justify-center gap-8">
        <h1 className="text-center text-4xl font-bold text-gray-700">
          Task List
        </h1>
        <div className="input mx-auto flex justify-center w-[300px] mb-6">
          <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 focus:outline-none " placeholder="what are we going to do?" />
        </div>
        <div className="mx-[200px] border rounded-lg p-8">
          {
            isLoading ? (
              <div className="flex justify-center items-center w-full">
                <Spinner />
              </div>
            ) : (

              data && data.map((item) => {
                return (

                  <>
                    <ListTask item={item} key={item.id} />
                  </>
                )
              })
            )
          }
        </div>
      </div>
    </main>
  )
}
