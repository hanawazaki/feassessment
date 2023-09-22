import { useState } from "react"

export default function AlgoOne() {
  const [vals, setVals] = useState([])
  const [total, setTotal] = useState(0)

  const handleInput = (e) => {
    setVals(e.target.value)
  }

  const handleKeyup = (e) => {
    if (e.key === "Enter") {
      converToArray()
    }
  }

  const converToArray = () => {
    const newVal = vals.split(',')
    console.log("before", newVal)
    if (newVal.length < 3) {
      alert("min 3 vals")
      return false
    }
    let v = 0
    for (v in newVal) {
      newVal[v] = parseInt(newVal[v])
    }

    console.log("after  ", newVal)

    maxProductOfThree(newVal)
  }


  const maxProductOfThree = (val) => {
    let total = val[0];
    for (let i = 1; i < val.length; i++) {
      total *= val[i]
    }

    setTotal(total)

    console.log("total", total)
  }

  // 


  return (
    <div>
      <div className="mb-6 max-w-lg">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Input angka dengan koma</label>
        <input type="text" value={vals} onKeyUp={handleKeyup} onChange={handleInput} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
      </div>

      <h1 className="text-xl font-semibold">Max value product : {total}</h1>
    </div>
  )
}
