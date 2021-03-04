import React from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}
type StarPropsType = {
    selected: boolean
}
type AccordionTitlePropsType = {
    value: string,
}
type AccordionPropsType = {
    value: string,
    collapsed: boolean
}
const Rating = (props: RatingPropsType) => {
    if (props.value === 1) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    }
    if (props.value === 2) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    }
    if (props.value === 3) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </>
        )
    }
    if (props.value === 4) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </>
        )
    }
    if (props.value === 5) {
        return (
            <>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </>
        )
    }
    return (
        <>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
        </>
    )
}
const Star = (props: StarPropsType) => {
    debugger
    if (props.selected) {
        return <span><b>star</b>  </span>

    } else {
        return <span>star  </span>
    }
}
const AccordionTitle = (props: AccordionTitlePropsType) => {
    return <h3>{props.value}</h3>
}
const AccordionBody = () => {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}
const Accordion = (props: AccordionPropsType) => {
    if (props.collapsed) {
        return <div>
            <AccordionTitle value={props.value}/>
        </div>
    } else {
        return <div>
            <AccordionTitle value={props.value}/>
            <AccordionBody/>
        </div>
    }

}

export const App2 = () => {
    return (
        <>
            <Rating value={3}/>
            <Accordion value={'React'} collapsed={false}/>
            <Rating value={2}/>
            <Accordion value={'ANGULAR'} collapsed={true}/>
        </>
    )
}