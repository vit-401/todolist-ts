import React from "react";

export function NewComponent(props: { value: any }) {
    return <div> {JSON.stringify(props.value)}</div>;
}