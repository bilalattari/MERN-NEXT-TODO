"use client"

import { fetchTask } from "@/store/features/taskSlice"
import { logoutUser } from "@/store/features/userSlice"
import { setCookie } from "cookies-next"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

export default function Task() {
    const dispatch = useDispatch()
    const router = useRouter()
    const { tasks, isLoading, status, error } = useSelector((state) => state.task)


    useEffect(() => {
        dispatch(fetchTask())
    }, [])

    if (error) router.push('/')

    return (
        <div className="container mx-auto mt-20">
            <div className="flex gap-4 my-10">
                <input className="flex flex-grow border p-3 rounded" placeholder="Add Task" />

                <button className="bg-slate-800 text-white rounded px-4 py-2">Add Task</button>
                <button
                    onClick={() => {
                        dispatch(logoutUser)
                        setCookie('token', null)
                        router.push('/')
                    }}
                    className="bg-slate-800 text-white rounded px-4 py-2">Logout</button>
            </div>
            <div>
                {tasks?.data?.map((task) => {
                    return (
                        <div className="bg-slate-800 text-white p-3 mv-1" key={task._id}>
                            <h1>{task.task}</h1>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
