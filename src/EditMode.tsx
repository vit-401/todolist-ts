import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    value: string
    onChangeValueTask: (title: string, id: string, todolistId: string) => void
    todolistId: string
    id: string
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState<any>(false)
    let [title, setTitle] = useState<any>(props.value)
    const activateEditMode = () => {
        setEditMode(!editMode);
        props.onChangeValueTask('asd', props.id, props.todolistId)
    }
    const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value);
    return editMode ? <input onChange={onChangeTitle} onBlur={activateEditMode} autoFocus value={title}/> :
        <span onDoubleClick={activateEditMode}>{title}</span>
}