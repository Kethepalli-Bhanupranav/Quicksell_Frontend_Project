import { AiFillCloseCircle} from 'react-icons/ai';

export const getPriorityIcon = (priority) => {
    switch (priority) {
        case "No priority": return <img src="icons_FEtask/No-priority.svg" alt="No Priority" />;
        case "Low": return  <img src="icons_FEtask/Img - Low Priority.svg" alt="Low priority" />;
        case "Medium": return <img src="icons_FEtask/Img - Medium Priority.svg" alt="Medium Priority" />;
        case "High": return <img src="icons_FEtask/Img - High Priority.svg" alt="High " />;
        case "Urgent": return <img src="icons_FEtask/SVG - Urgent Priority colour.svg" alt="Urgent" />;
        default: return <img src="icons_FEtask/SVG - Urgent Priority grey.svg" alt="Default" />
    }
}

export const getStatusIcon = (status) => {
    switch (status) {
        case "Backlog": return <img src="icons_FEtask/Backlog.svg" alt="BackLog" />;
        case "Todo": return <img src="icons_FEtask/To-do.svg" alt="To-Do" />;
        case "In progress": return <img src="icons_FEtask/in-progress.svg" alt="in-Progress" />;
        case "Done": return <img src="icons_FEtask/Done.svg" alt="Done" />;
        case "Cancelled": return <img src="icons_FEtask/Cancelled.svg" alt="Cancelled" />;
        default: return <AiFillCloseCircle color='#94a2b3' size={16} />;
    }
}
