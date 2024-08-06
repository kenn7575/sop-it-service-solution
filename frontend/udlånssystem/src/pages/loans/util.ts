import goToPath from "@services/goToPath";

export function handleReturn(id: number) {
  goToPath(`/udlaan/${id}/returner`);
}

function btn(e: MouseEvent, contextMenuItemId: number) {
  console.log(contextMenuItemId);
}

export const contextMenuItems: ContextMenuItem[] = [
  {
    name: "return",
    onClick: (_e, id) => handleReturn(id),
    displayText: "Returner",
    class: "fa-solid fa-rotate-left",
  },
  // {
  //   name: "printPDF",
  //   onClick: btn,
  //   displayText: "Print PDF",
  //   class: "fa-solid fa-print",
  // },
  {
    name: "hr"
  },
  {
    name: "items",
    displayText: null
  }
];
