import { useState } from "react"

export default function AlgoTwo() {

  const [vals, setVals] = useState([])
  const [total, setTotal] = useState(null)

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
    // console.log("before", newVal)
    if (newVal.length < 2) {
      alert("min 2 vals")
      return false
    }
    let v = 0
    for (v in newVal) {
      newVal[v] = parseInt(newVal[v])
    }

    // console.log("after  ", newVal)

    maxProfit(newVal)
  }

  const maxProfit = (prices) => {
    console.log(prices)

    let profit = 0

    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        let profitNow = prices[j] - prices[i]
        profit = Math.max(profit, profitNow)
      }
    }

    setTotal(profit)

  }

  return (
    <div>
      <div className="mb-6 max-w-lg">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900">Input angka dengan koma</label>
        <input type="text" value={vals} onKeyUp={handleKeyup} onChange={handleInput} id="default-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " />
      </div>

      <h1 className="text-xl font-semibold">Max profit : {total}</h1>
    </div>
  )
}
