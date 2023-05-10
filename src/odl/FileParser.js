import ClassString from "./ClassString"

class FileParser {

    static createFileContentFromStructure(structure){
        return structure.getAllOfGroup("vertex").map(vertex => ClassString.vertexToClass(vertex)).join("")
    }

    static createFile(name, content){
        let blob = new Blob([content], {type: "text/plain"} ); 

        let link = document.createElement("a");
        link.download = name;
        link.href = window.URL.createObjectURL(blob);
        link.click();
        document.body.appendChild(link);

        setTimeout(() => {
            document.body.removeChild(link);
            window.URL.revokeObjectURL(link.href);
        }, 100);
    }
}

export { FileParser }