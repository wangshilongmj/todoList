import React from "react";

export type todoProps = {
    text: string,
    isCompleted: boolean
    handleClick:any
};


export const Todo = (props: todoProps) => {
    return (
        <li
        style={{
            textDecoration: props.isCompleted ? 'line-through' : 'none'
        }}
        onClick={e => {
            e.preventDefault()
            props.handleClick()
        }}
        >
            {props.text}
        </li>
    )
};

