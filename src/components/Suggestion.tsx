import { title } from "process";

interface SuggestionProps {
    isActive?: boolean;
    title: string;
}

const Suggestion = ({ isActive, title }: SuggestionProps) => {
    return (
        <button className={`suggestion ${isActive ? 'active' : ''}`}>
            {title}
        </button>
    )
}

export default Suggestion;