import { DefaultListTasks } from "./style";
import clipBoard from '../../../../assets/Clipboard.png'

export function DefaultContent() {
  return (
    <DefaultListTasks>
        <img src={clipBoard} alt="" />
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
    </DefaultListTasks>
  )
}
