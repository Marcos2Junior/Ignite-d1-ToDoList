import { ITask } from "./ITask";

export interface ITaskProps {
    onDeleteTask(id: number) : void,
    onChangeTask(id: number) : void,
    task : ITask
}