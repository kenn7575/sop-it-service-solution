interface ContextMenuItem {
    name: string;
    onClick?: (e: MouseEvent, itemId?: number) => void;
    displayText?: string;
    class?: string;
}