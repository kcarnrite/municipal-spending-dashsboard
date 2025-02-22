import { useReducer } from "react"
import FilterControls from "../FilterControls"
import Table from "../Table"

function CategoryPage() {
  const data_headers = ["Municipality", "Amount"]
  const data_items = [[23,5], [30,5], [50,1]]
  function handleFilterChange(state, action) {
    switch (action.type) {
      case 'ST':
        return{...state, ST: !state.ST,}
      case 'LT':
        return {...state, LT: !state.LT,}
      case 'UT':
        return {...state,UT: !state.UT,}
      case 'CHANGE_QUERY':
        console.log("here")
        return {...state, query: action.payload}
      case 'CHANGE_MEASUREMENT':
        return {...state, measurement: action.payload}
      default:
        throw new Error("Action not declared")
    }
  }

  const [filterState, filterReducer] = useReducer(handleFilterChange,
    {ST: true,
      LT: true,
      UT: true,
      query: 'governance',
      measurement: 'total',
    }
  );
    return (
        <div className="flex content-center flex-col grow-0">
        <h1 className="text-center text-4xl font-bold font-mono text-green-900" >Municipal Spending Dashboard</h1>
        <div>
            <FilterControls onFilterChange={filterReducer} filterState={filterState} />
            <div className="self-auto justify-items-center">
                <Table headers={data_headers} table_content={data_items} filters={filterState}/>
            </div>
        </div>
      </div>
    )
}

export default CategoryPage;