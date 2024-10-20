import { IoMdSearch } from "react-icons/io";
import { TextInput } from "flowbite-react";


function TaskTableHeader() {
  return (
    <div className="flex justify-between items-center mt-5 mb-8">
        <h2 className="text-2xl font-bold">Your Task</h2>
        <div className="max-w-lg">
        <TextInput id="email4" type="email" rightIcon={IoMdSearch} required />
        </div>
    </div>
  )
}

export default TaskTableHeader
